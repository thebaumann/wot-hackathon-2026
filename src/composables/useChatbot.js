import { ref } from 'vue'
import i18next from '../i18n/index.js'

const isOpen = ref(false)
const isLoading = ref(false)
const hasGreeted = ref(false)
const messages = ref([])

function buildSystemPrompt(audience) {
  const audienceContext = audience === 'management'
    ? 'CURRENT USER: C-Level Manager / Business Decision-Maker. Emphasize ROI, cost savings, competitive advantage, implementation timelines, and business impact. Avoid overly technical details unless asked.'
    : 'CURRENT USER: Machine Operator. Emphasize practical steps, time savings, ease of use, material handling, and day-to-day operation. Use clear, direct language.'

  return `You are the TRUMPF Cutting Assistant AI — an expert support agent for TRUMPF's AI-powered laser cutting solution.

PRODUCT KNOWLEDGE:
- Auto Parameter Optimization: automatically selects laser power, speed, gas pressure, and focus position based on material/geometry. Reduces setup from ~30 min to under 2 min.
- Adaptive Cutting: real-time sensor feedback adjusts cutting parameters mid-job to compensate for material variations and thermal effects.
- Collision Avoidance: AI path planning prevents nozzle collisions with cut-out parts, reducing unplanned machine stops and part damage.
- Material Detection: camera and sensor fusion identifies material type and surface condition before cutting, automatically confirming the correct parameter set.
- Oseon Integration: seamless data exchange with TRUMPF's Oseon MES for job scheduling, full traceability, and production reporting.
- Typical outcomes: -18% operating cost per part, 6-month average ROI, +35% throughput, -40% scrap rate, -45% setup time.
- Compatible with: TruTops Boost CAM programs, standard DXF/DWG formats, OPC UA, REST API for third-party MES/ERP.
- Deployment: 2-4 weeks standard, runs on TRUMPF machine controller (no separate server required).

${audienceContext}

RULES:
- Respond in the same language the user writes in.
- Keep answers concise (under 200 words) unless a technical question genuinely requires more detail.
- For specific pricing questions: explain that pricing depends on configuration and machine model, and direct the user to contact TRUMPF sales.
- Stay on topic (TRUMPF Cutting Assistant, laser cutting, TRUMPF products). If asked about unrelated topics, politely redirect.
- Maintain a professional, helpful TRUMPF brand voice.`
}

function greetingFor(audience) {
  const key = audience === 'management' ? 'chatbot.greeting_management' : 'chatbot.greeting_operator'
  return i18next.t(key)
}

function getLast20ApiMessages(msgs) {
  return msgs
    .filter(m => m.role === 'user' || m.role === 'assistant')
    .filter(m => m.content.trim() !== '')
    .slice(-20)
    .map(m => ({ role: m.role, content: m.content }))
}

export function useChatbot() {
  function openChat(audience) {
    isOpen.value = true
    if (!hasGreeted.value) {
      hasGreeted.value = true
      messages.value.push({
        id: crypto.randomUUID(),
        role: 'assistant',
        content: greetingFor(audience),
        isStreaming: false
      })
    }
  }

  async function sendMessage(text, audience) {
    if (!text.trim() || isLoading.value) return

    messages.value.push({
      id: crypto.randomUUID(),
      role: 'user',
      content: text.trim(),
      isStreaming: false
    })

    const assistantId = crypto.randomUUID()
    messages.value.push({
      id: assistantId,
      role: 'assistant',
      content: '',
      isStreaming: true
    })
    isLoading.value = true

    const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY

    if (!apiKey || apiKey === 'sk-ant-your-key-here') {
      const msg = messages.value.find(m => m.id === assistantId)
      msg.content = '⚠️ No API key configured. Please add your VITE_ANTHROPIC_API_KEY to the .env file.'
      msg.isStreaming = false
      isLoading.value = false
      return
    }

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1024,
          stream: true,
          system: buildSystemPrompt(audience),
          messages: getLast20ApiMessages(messages.value.slice(0, -1))
        })
      })

      if (!response.ok) {
        throw new Error(`API error ${response.status}`)
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      const msg = messages.value.find(m => m.id === assistantId)

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const payload = line.slice(6).trim()
          if (payload === '[DONE]') continue
          try {
            const data = JSON.parse(payload)
            if (data.type === 'content_block_delta' && data.delta?.type === 'text_delta') {
              msg.content += data.delta.text
            }
          } catch {
            // skip malformed SSE lines
          }
        }
      }

      msg.isStreaming = false
    } catch (err) {
      const msg = messages.value.find(m => m.id === assistantId)
      if (msg) {
        msg.content = i18next.t('chatbot.error')
        msg.isStreaming = false
      }
    } finally {
      isLoading.value = false
    }
  }

  return {
    isOpen,
    isLoading,
    messages,
    openChat,
    sendMessage
  }
}

import { ref, computed } from 'vue'

import { availableCommands, handleCommand } from '@/services/commands'
import Command from '@/models/Command'
import Message from '@/models/Message'

const messages = ref<Array<{ timestamp: number; message: string }>>([])

function addMessage(msg: string, type: 'input' | 'output' | 'info') {
  console.log(`Adding message: ${msg}`)

  messages.value.push(new Message(msg, type))

  if (type !== 'input') return

  const split = msg.split(' ')

  if (availableCommands.map(_ => _.name).includes(split[0])) {
    const cmd = split[0]
    const payload = split.filter((_, i) => i !== 0)

    const command = new Command(cmd, payload)

    handleCommand(command)
  }
}

export { messages, addMessage }

export type MessageType = 'input' | 'output' | 'info'

export default class Message {
  timestamp: number = Date.now()
  message: string
  type: MessageType

  constructor(message: string, type: MessageType) {
    console.log('new message', type)
    this.message = message
    this.type = type
  }
}

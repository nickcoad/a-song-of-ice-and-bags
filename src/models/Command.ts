export default class Command {
  command: string
  payload: string[] = []

  constructor(command: string, payload?: string[]) {
    this.command = command

    if (payload) this.payload = payload
  }
}

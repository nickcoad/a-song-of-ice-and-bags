import GameObject from './GameObject'

export default class Location implements GameObject {
  name: string = ''
  displayName: string = ''
  appearance: string = ''
  connections: string[] = []
  flavour: string[] = []
  people: string[] = []

  constructor(name: string, displayName: string) {
    this.name = name
    this.displayName = displayName
  }
}

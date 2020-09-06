import GameObject from './GameObject'

export default class Item implements GameObject {
  name: string = ''
  displayName: string = ''

  constructor(name: string, displayName: string) {
    this.name = name
    this.displayName = displayName
  }
}

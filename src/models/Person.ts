import GameObject from './GameObject'

export default class Person implements GameObject {
  name: string = ''
  displayName: string = ''
  quotes: string[] = []
  appearance: string = ''
  odour: string = ''

  constructor(name: string, displayName: string) {
    this.name = name
    this.displayName = displayName
  }
}

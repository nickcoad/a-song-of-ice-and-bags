import GameObject from './GameObject'

export default class User implements GameObject {
  name: string = ''
  displayName: string = ''
  currentLocation: string = ''
}

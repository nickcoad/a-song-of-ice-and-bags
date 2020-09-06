import Command from '@/models/Command'
import { commands } from '@/services/data'
import {
  setLocation,
  availableLocations,
  currentLocation,
  availablePeople
} from './game'
import { addMessage } from './messages'

const availableCommands = commands

async function handleCommand(cmd: Command) {
  console.log(`Handling command: '${cmd.command}' with payload:`, cmd.payload)

  switch (cmd.command) {
    case 'move': {
      const locationNum = parseInt(cmd.payload[0])
      const newLocation = (await availableLocations.value)[locationNum - 1]

      setLocation(newLocation.name)

      break
    }
    case 'look': {
      if (!cmd.payload[0]) {
        addMessage('You take a look around you', 'output')
        addMessage((await currentLocation.value).appearance, 'info')
      }

      const personNum = parseInt(cmd.payload[0])
      const thisPerson = (await availablePeople.value)[personNum - 1]

      if (thisPerson) {
        addMessage('You look at ' + thisPerson.displayName, 'output')
        addMessage(
          thisPerson.appearance ||
            `${thisPerson.displayName} looks pretty normal.`,
          'info'
        )
      }

      break
    }
    case 'smell': {
      const personNum = parseInt(cmd.payload[0])
      const thisPerson = (await availablePeople.value)[personNum - 1]

      if (!thisPerson) return

      addMessage('You take a big whiff of ' + thisPerson.displayName, 'output')
      addMessage(
        thisPerson.odour || `${thisPerson.displayName} smells pleasant!`,
        'info'
      )

      break
    }
    case 'talk': {
      const personNum = parseInt(cmd.payload[0])
      const thisPerson = (await availablePeople.value)[personNum - 1]

      if (!thisPerson) return

      addMessage('You talk to ' + thisPerson.displayName, 'output')

      let quote = `${thisPerson.displayName} has nothing to say.`
      if (thisPerson.quotes && thisPerson.quotes.length > 0) {
        const rand = Math.floor(Math.random() * thisPerson.quotes.length)
        quote = thisPerson.quotes[rand]
      }
      addMessage(quote, 'info')
    }
  }
}

export { availableCommands, handleCommand }

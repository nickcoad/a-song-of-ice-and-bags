function getValueFromInputEvent(event: Event): string {
  const htmlElement = event.target as HTMLInputElement

  if (!htmlElement) return ''

  return htmlElement.value
}

export { getValueFromInputEvent }

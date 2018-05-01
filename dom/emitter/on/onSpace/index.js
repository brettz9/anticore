import { on } from '..'

export function onSpace (element, listener, useCapture) {
  return on('keydown', element, function (event) {
    if (event.which === 32 && !event.shiftKey && !event.ctrlKey) {
      return listener.call(this, event)
    }
  }, useCapture)
}
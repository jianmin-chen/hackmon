import states from './states.js'

let canvas, ctx, stateStack, then
let keys = {}
let canvasProperties = {
  width: undefined,
  height: undefined
}

const init = () => {
  // Resize 4:3 aspect ratio, get tile width, etc.
  canvas.height = canvasProperties.height = 600
  canvas.width = canvasProperties.width = 800
}

class StateStack {
  // Just a simple stack
  constructor(initialState) {
    this.nodes = [initialState]
  }

  get current() {
    return this.nodes[this.nodes.length - 1] // Return last/current one
  }

  push(state) {
    this.nodes.push(state)
  }

  pop() {
    this.nodes.pop()
  }
}

const gameloop = () => {
  let now = Date.now()
  let delta = now - then

  const newState = stateStack.current.run(delta / 100, keys, canvasProperties)
  stateStack.current.render(ctx, canvasProperties)
  if (stateStack.current.done) stateStack.nodes.pop()
  if (newState) stateStack.push(newState)

  then = now
  if (stateStack.nodes.length) requestAnimationFrame(gameloop)
}

window.onload = () => {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')

  init()

  window.addEventListener('keydown', function (event) {
    keys[event.key] = true
  })

  window.addEventListener('keyup', function (event) {
    keys[event.key] = false
  })

  stateStack = new StateStack(new states.InitialState())
  then = Date.now()
  gameloop()
}

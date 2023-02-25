class InitialState {
  constructor() {
    this.done = false
  }

  run(delta, keys, canvasProperties) {
    if (Object.keys(keys).length) {
      this.done = true
      return new FadeIn(MainState)
    }
  }

  render(canvasProperties, ctx) {
    // Show start screen
    ctx.fillStyle = '#f3f2f0'
    ctx.fillRect(0, 0, canvasProperties.width, canvasProperties.height)
    ctx.fillStyle = 'black'
    ctx.font = '100px Pokemon'
    ctx.fillText('Hackmon', 195, 280)
    ctx.font = '64px Orange'
    ctx.fillText('Press any key to start', 175, 380)
  }
}

class FadeIn {
  constructor(type, returnState) {
    this.full = type === 'white' ? '255, 255, 255' : '0, 0, 0'
    this.returnState = returnState
    this.alpha = 0
  }

  run(delta) {}

  render(ctx) {}
}

class MainState {
  constructor() {
    this.done = false
  }

  run(delta, keys, canvasProperties) {
    // Show main screen - i.e. player moving around
    // Toughest part. Layers to deal with and such
  }

  render(ctx, canvasProperties) {}
}

class FightState {
  constructor() {
    this.done = false
  }

  run(delta, keys, canvasProperties) {
    // Fight screen
    // Player gets code to work (another stack state) before they're allowed to do turn based fighting
  }

  render(ctx, canvasProperties) {}
}

class DialogState {
  constructor(dialog, config = {}) {
    this.done = false
    this.dialog = dialog
    this.config = config
  }

  run(delta, keys, canvasProperties) {
    // Show dialog
    // If this.config is not {} then this is interactive dialog
  }

  render(ctx, canvasProperties) {}
}

class VictoryState {
  constructor() {
    this.done = false
  }

  run(delta, keys, canvasProperties) {
    // Win
    // "Epilogue"
  }

  render(ctx, canvasProperties) {}
}

const states = {
  InitialState,
  MainState,
  FightState,
  DialogState,
  VictoryState
}

export default states

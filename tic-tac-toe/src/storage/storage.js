export class Storage {
  constructor(storageName = 'gameScoreboard', initialValue = '[]') {
    this.storageName = storageName

    // if no data from previous games, then create a new tic tac toe game
    if (!localStorage.getItem(storageName)) {
      localStorage.setItem(storageName, initialValue)
    }
  }

  // load game data from previous games
  getData() {
    return JSON.parse(localStorage.getItem(this.localStorage))
  }

  // update local stroage data
  updateData(data) {
    localStorage.setItem(this.storageName, JSON.stringify(data))
  }
}

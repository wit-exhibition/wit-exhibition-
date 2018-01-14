const initialState = {
  mode: "start",
  currentRoom: "firstRoom",
  graceElementVisible: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ROOM':
      console.log("room changed" )
      return Object.assign({}, state, {
          currentRoom: action.room
      })
    case 'CHOOSE_DEVICE':
      console.log("device chosen" )
      return Object.assign({}, state, {
          mode: action.mode
      })
    case 'SPOTLIGHT_ON':
      console.log("spotlight on" )
      return Object.assign({}, state, {
          graceElementVisible: true
      })
    default:
      return state
  }
}

const init = {
  selection: 'intro'
}

const navigation = (state = init, action) => {
  switch(action.type) {
    case 'NAVIGATE':
      return {
        selection: action.file_name        
      }
    default:
      return {
        selection: state.selection
      }
  }
};

module.exports = {
  navigation
};
const init = {
  nav_lock: true,
  nav_panel: true
}

const layout = (state = init, action) => {
  switch(action.type) {
    case 'TOGGLE_NAV_LOCK':
      return Object.assign({}, state, {
        nav_lock: !state.nav_lock
      });

    case 'TOGGLE_NAV_PANEL':
      return Object.assign({}, state, {
        nav_panel: !state.nav_panel,
        nav_lock: state.nav_panel ? false : state.nav_lock
      });

    default:
      return state
  }
};

module.exports = {
  layout
};
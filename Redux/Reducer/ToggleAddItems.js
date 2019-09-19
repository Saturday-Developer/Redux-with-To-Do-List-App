const ToggleAddItems = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_HIDE_MODAL':
      state = !state;
      break;
    default:
      return state;
  }
  return state;
};

export default ToggleAddItems;

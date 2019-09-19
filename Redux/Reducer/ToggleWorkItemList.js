const ToggleWorkItemList = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_HIDE':
      state = !state;
      break;

    default:
      return state;
  }
  return state;
};
export default ToggleWorkItemList;

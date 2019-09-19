const WorkItemList = (
  state = [
    {
      workItem: 'Write some Code!',
      id: 'uuid1',
    },
    {
      workItem: 'Debug the Code!',
      id: 'uuid12',
    },
    {
      workItem: 'Test the final Output!',
      id: 'uuid123',
    },
  ],
  action,
) => {
  switch (action.type) {
    case 'ADD':
      state = [...state, action.payload];
      break;
    case 'REMOVE':
      state = action.payload;
      break;

    default:
      return state;
  }

  return state;
};

export default WorkItemList;

import React from 'react';
import ToDoList from './ToDoList';
import {Provider} from 'react-redux';
import store from './Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
};

export default App;

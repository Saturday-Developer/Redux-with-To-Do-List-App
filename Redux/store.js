import {createStore, combineReducers} from 'redux';
import WorkItemList from './Reducer/WorkItemList';
import ToggleAddItems from './Reducer/ToggleAddItems';
import ToggleWorkItemList from './Reducer/ToggleWorkItemList';

const store = createStore(
  combineReducers({WorkItemList, ToggleWorkItemList, ToggleAddItems}),
);

export default store;

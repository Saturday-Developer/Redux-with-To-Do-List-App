import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import WorkItem from './WorkItem';
import AddWorkItem from './AddWorkItem';
import {connect} from 'react-redux';

console.disableYellowBox = true;
class Work extends Component {
  newItem = '';

  addNewItem = event => {
    this.newItem = event.nativeEvent.text;
  };
  addItem = () => {
    this.props.ADD({workItem: this.newItem});
    this.props.SHOW_HIDE_MODAL();
  };

  removeItem = workItemIndex => {
    const toDoList = this.props.toDoList.slice();
    toDoList.splice(workItemIndex, 1);
    this.props.REMOVE(toDoList);
  };
  render() {
    let workItems = null;
    if (this.props.toggleWorkItems) {
      workItems = (
        <>
          {this.props.toDoList.map((toDoList, index) => {
            return (
              <WorkItem
                key={toDoList.id}
                workItem={toDoList.workItem}
                removeItem={() => this.removeItem(index)}
              />
            );
          })}
        </>
      );
    }

    let addWorkItem = null;
    if (this.props.toggleAddWorkItems) {
      addWorkItem = (
        <AddWorkItem
          cancel={this.props.SHOW_HIDE_MODAL}
          save={this.addItem}
          insertWorkItem={this.addNewItem}
        />
      );
    }
    return (
      <View style={{backgroundColor: '#000', flex: 1}}>
        <Button title="Check Work Items" onPress={this.props.SHOW_HIDE} />
        <ScrollView contentContainerStyle={{flex: 1}}>
          {workItems}
          {addWorkItem}
        </ScrollView>
        <TouchableOpacity
          style={styles.bottomView}
          onPress={this.props.SHOW_HIDE_MODAL}>
          <Text style={styles.textStyle}>Add Item</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
mapStateToProps = state => {
  return {
    toDoList: state.WorkItemList,
    toggleWorkItems: state.ToggleWorkItemList,
    toggleAddWorkItems: state.ToggleAddItems,
  };
};

mapDispatchToProps = dispatch => {
  return {
    ADD: newItem => {
      dispatch({
        type: 'ADD',
        payload: newItem,
      });
    },

    REMOVE: updateWorkItemList => {
      dispatch({
        type: 'REMOVE',
        payload: updateWorkItemList,
      });
    },

    SHOW_HIDE: () => {
      dispatch({
        type: 'SHOW_HIDE',
      });
    },
    SHOW_HIDE_MODAL: () => {
      dispatch({
        type: 'SHOW_HIDE_MODAL',
      });
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Work);

const styles = StyleSheet.create({
  bottomView: {
    width: '30%',
    height: 40,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderRadius: 30,
  },

  textStyle: {
    color: '#fff',
  },
});

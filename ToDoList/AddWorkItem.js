import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

const addWorkItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.popUpBox}>
        <View style={styles.popUpBoxItem}>
          <Text style={styles.action}>Add Work Item</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="#000"
            onChange={props.insertWorkItem}
          />
        </View>

        <View style={styles.actionBox}>
          <TouchableOpacity onPress={props.cancel}>
            <Text style={styles.action}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.save}>
            <Text style={styles.action}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    height: Dimensions.get('screen').height,
    backgroundColor: 'rgba(128,128,128,0.7)',
  },
  popUpBox: {
    backgroundColor: 'orange',
    width: '100%',
    top: '10%',
  },
  popUpBoxItem: {
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    width: '70%',
    left: 10,
    color: '#fff',
    fontSize: 16,
  },
  actionBox: {
    justifyContent: 'space-around',

    flexDirection: 'row',
  },
  action: {
    color: '#fff',
    fontSize: 16,
  },
});
export default addWorkItem;

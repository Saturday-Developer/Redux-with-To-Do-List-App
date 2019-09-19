import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const workItem = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.workItem}>I have to {props.workItem}</Text>
      <TouchableOpacity style={styles.container} onPress={props.removeItem}>
        <Text style={styles.workItem}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    margin: 10,
    alignSelf: 'center',
    borderColor: 'orange',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  workItem: {
    fontStyle: 'italic',
    fontSize: 16,
    color: '#000',
    fontWeight: '700',
  },
});

export default workItem;

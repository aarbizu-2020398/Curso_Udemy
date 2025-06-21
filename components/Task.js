import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Task = ({ task, index, completeTask, deleteTask }) => {
  return (
    <View style={styles.task}>
      <Text style={task.completed ? styles.completed : styles.text}>{task.text}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => completeTask(index)}>
          <Icon name="check" size={20} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTask(index)}>
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  text: {
    fontSize: 16,
    color: '#2c3e50',
    fontWeight: '500',
    flex: 1,
    marginRight: 10,
  },
  completed: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#95a5a6',
    fontWeight: '400',
    fontStyle: 'italic',
  },
  buttons: {
    flexDirection: 'row',
    gap: 15,
  },
});

export default Task;

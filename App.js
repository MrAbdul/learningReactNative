import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/TodoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: 1 },
    { text: 'create an app', key: 2 },
    { text: 'play on the switch', key: 3 }
  ]);
  const pressHandler = (key) => {
    setTodos((prevToDos) => prevToDos.filter(todo => todo.key != key))
  }
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevToDos) => {
        // console.log(prevToDos[prevToDos.length-1].key)
        return [
          ...prevToDos,
          { text: text, key: Math.random() }

          // {text:text,key:prevToDos[prevToDos.length-1].key+1}
        ]
      })
    } else {
      Alert.alert('OOPS!', 'ToDos must be over 3 letter long', [{ text: 'understood', onPress: () => console.log('alert,closed') }]);
    }


  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      console.log('dis')
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        {/* Header  */}
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              // item extracted using desctructering
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler}></ToDoItem>
                // <Text>{item.text}</Text>
              )}
            />
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 40
  }
});



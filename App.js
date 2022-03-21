import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';




export default function App() {
  const [name, setName] = useState('shau2n');
  const [age, setAge] = useState('30')
  const [person, setPerson] = useState({ name: 'mario', age: 40 })

  const [people, setPeople] = useState([{ name: 'ahmad', id: '1' },
  { name: 'khalid', id: '2' },
  { name: 'moha', id: '3' },
  { name: 'alo', id: '4' },
  { name: 'jams', id: '5' },
  { name: 'jack', id: '6' },
  { name: 'danial', id: '7' },
  { name: 'abdul', id: '8' }])

  // const clickHandler= ()=>{
  //   setName('chun-li');
  //   setPerson({name:'luigi',age:45})
  // }

  const pressHandler = (id) => {
    console.log(id)
    // wheen we depend on a state its better to pass a function the function takes the previous state
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.boldText}>Hello,world!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>my name is {name}</Text>
        <Text>his name is {person.name} and his age is {age}</Text>
        <View style={styles.buttonContainer}>
          <Button title='update Name' onPress={clickHandler} />
        </View>

      </View>
      <Text>Enter name:</Text>
      <TextInput 
        style={styles.input}  
        placeholder='e.g. John Doe'
        onChangeText={(val)=>{setName(val)}}/>
        <Text>Enter age:</Text>
      <TextInput 
        style={styles.input}  
        placeholder='e.g. 32'
        keyboardType='numeric'
        
        onChangeText={(val)=>{setAge(val)}}/>
        <Text>name: {name} age: {age}</Text> */}
      {/* one way of doing a list  */}
      {/* <ScrollView>
      {people.map((item)=>{
        return (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      })}
      </ScrollView> */}
      {/* a better of doing scroll */}
      <FlatList
        numColumns={2}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => { pressHandler(item.id) }}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>)}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems:'center',
    // justifyContent:'center',
  },
  item: {
    marginTop: 24,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
  // header:{
  //   backgroundColor:'pink',
  //   padding:20,
  // },
  // boldText:{
  //   fontWeight:'bold',
  // },
  // body:{
  //   backgroundColor:'yellow',
  //   padding:20,
  //   fontWeight:'bold',
  // },
  // buttonContainer:{
  //   marginTop:20
  // },
  // input:{
  //   borderWidth:1,
  //   borderColor:'#777',
  //   padding:8,
  //   margin:10,
  //   width: 200,
  // }
});



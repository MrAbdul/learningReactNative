import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
//we want to recive props
//we are destructering props and getting item so we don't have to do props.item in the code
export default function ToDoItem ({item,pressHandler}){

    return (
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }
})
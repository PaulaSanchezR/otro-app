import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Button, Modal} from 'react-native'



const GoalInput = props =>{
    const [enteredGoald , setEnterdGoal] = useState('')
    const goalInputHandler = (enteredText) => {
    setEnterdGoal(enteredText)
    }

const addGoalHandler= () =>{
  props.onAddGoal(enteredGoald);
  setEnterdGoal(''); // this will be reset the textInput

}

return(
  <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
     <TextInput 
      placeholder="Course Goals"
      style={styles.input}
      onChangeText={goalInputHandler}
      value={enteredGoald}
     />
     <View style={styles.buttonContainer}>
     <View style={styles.button}>
       <Button title="ADD" onPress={addGoalHandler} />
     </View>
     <View style={styles.button}>
        <Button  title="CANCEL"  color="red" onPress={props.onCancel} />
     </View>
    </View>
   </View>
  </Modal>
)

}

const styles= StyleSheet.create({
        inputContainer:{
        flex: 1,  
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      },
        input:{
        width:'80%',
        borderColor:'black', 
        borderBottomWidth:1, 
        padding:10,
        marginBottom:10
      },
      buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%'
      },
      button:{
        width:'50%',
        margin: '2%'
      }
})

export default GoalInput;
import React , { useState } from 'react';
import { StyleSheet, Text, View , TextInput, Button, ScrollView, FlatList} from 'react-native';
import { black } from 'color-name';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'
// import console = require('console');
// import console = require('console');

//react hooks
export default function App() {  
  // manage some state
const [courseGoals, setCurseGoal] = useState([]);

        // another way to do it
        // function goalInputHandler(entertedText){
        //   setEnterGoal(entertedText)
        // }

 

  const addGoalHandler = goalTitle =>{
    //sprade operator  take and existen array and pulls out the elemente of the array and add to 
    // a new array
    // the way react update the state it is always 
    // snapshot update the state with an onother state
             // setCurseGoal([...courseGoalds, enteredGoald])


    // this sintaxis always waranty to get the last snapshot of the array
    
    setCurseGoal(currentGoals => [
      ...currentGoals, 
      // list of objects that has a key property and value property for flatList
      { id: Math.random().toString(), value: goalTitle } 
    ]);
  };

  const removeGoalHandler = goalId => {
   
    setCurseGoal(currentGoals => {
       
      // filter a methods that  allow to create a new array
      // base on a new criteria 
      // retuirn true if the id is not equal to the id pass a parameter
        return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }
  return (
       
      <View style={styles.screen}>
          <GoalInput 
            onAddGoal={addGoalHandler}
          />
     
          {/* use it when you know the amount of items
           <ScrollView> */}
        
            {/* we can map the array data on the array of components */}
            {/* we use inline function to avoid the return word but is going to work the same */}
            {/* {courseGolds.map(goal => (
            <View style={styles.listItem}>
            <Text key={goal}>{goal}</Text>
            </View>
            ))}
        
          
        </ScrollView> */}


            {/* FlatListlong lists 100 elements
                two import properties : data, renderItem takes a function and .item will me my data */}
        <FlatList 
         keyExtractor={(item,index)=> item.id}
         data={courseGoals}
         renderItem={itemData=>
         <GoalItem 
          // 
          id={itemData.item.id}
          onDelete={removeGoalHandler}
          title={itemData.item.value} />}
        />   
               
        
      </View>
   
  );
}

// styles object

const styles= StyleSheet.create({
    screen:{
      padding:50
    },

})

// using flex direccion 

      //  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      //   <TextInput placeholder="Course Goald"  
      //              style ={{width:'80%',borderBottomColor:'black', borderBottomWidth:1, padding:10}}/>
      //   <Button title="ADD"/>
      // </View> 
      //  <View style={{flexDirection:'row', width:'80%', height:300, padding:50, justifyContent:'space-around', alignItems:'stretch'}}> 
      //  <View
      //     style={{
      //       backgroundColor:'red',
      //       flex:1,
      //       // width:100,
      //       // height:100,
      //       justifyContent: 'center',
      //       alignItems:'center'
      //     }}>
      //     <Text>1</Text>
      // </View>
      // <View
      //     style={{
      //       backgroundColor:'blue',
      //       flex:2,
      //       // width:100,
      //       // height:100,
      //       justifyContent: 'center',
      //       alignItems:'center'
      //     }}>
      //      <Text>2</Text>
      // </View>
      // <View
      //     style={{
      //       backgroundColor:'yellow',
      //       flex:3,
      //       // width:100,
      //       // height:100,
      //       justifyContent: 'center',
      //       alignItems:'center'
      //     }}>
      //      <Text>3</Text>
      // </View>
      // </View> 
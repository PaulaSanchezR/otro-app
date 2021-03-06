import  React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'


const GoaldItem  = props =>{
    console.log(props.id)
return(
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
     <View style={styles.listItem} on>
     <Text>{props.title}</Text>
     </View>
   </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    listItem:{
        padding:10,
        backgroundColor:'#ccc',
        borderColor: 'black',
        borderWidth: 1,
        margin: 10
  
      }
})

export default GoaldItem;
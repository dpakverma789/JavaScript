import {React, useState } from 'react';
import { Text, Button, Alert, StyleSheet, View, TextInput } from 'react-native';


const Input = ()=>{
  return (
    <View>
      <TextInput 
      style={styles.container}
      placeholder={'Enter Your Name'}/>
    </View>
  )
}


const App = () => {
  return (
    <View>
     <Input/>
     <Button
        style={styles.button}
        title='Submit'
        onPress={()=>{
          Alert.alert('Hello WOlrd');
        }}
      />
    </View>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    marginLeft: 100,
    marginTop:100,
    padding: 5,
    fontSize:20
  },
  button:{
    backgroundColor:'#3c40c6',
    padding:2,
    shadowOffset:{
      width:2,
      height:2
    }
  }
});
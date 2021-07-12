import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as SMS from 'expo-sms';
import messageRandomizer from './messages.js';



export default function App() {


  const [number, setNumber] = useState('1(234)567-8910')
  const [message, setMessage] = useState(messageRandomizer())


  let numberSet = (e) => {
    e.preventDefault()
    let setNumberString = e.nativeEvent.text
    console.log(setNumberString)
    setNumber(setNumberString)
  }


  const textMessage = async () => {
    setMessage(messageRandomizer())
    setNumber(number)
    const { result } = await SMS.sendSMSAsync(
      number,
      message
    );
    console.log(result)
  }


  return (

    <View style={styles.container}>

      <Text style={styles.titleText}>Game Generator</Text>
      <TextInput
        type="text"
        onChange={numberSet}
        style={{
          height: 40,
          width: '60%',
          borderColor: 'gray',
          backgroundColor: 'gray',
          borderWidth: 1,
          textAlign: 'center',
          margin: 20,
        }}
        placeholder="Insert Their Number"
      />

      <Button
        onPress={textMessage}
        style={{
          padding: 20,
        }}
        title="Generate Game!" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#32cd32',
    alignItems: 'center',
  },
  titleText: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: "bold",
    padding: 10
  },

});

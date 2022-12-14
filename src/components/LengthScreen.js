import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { useState } from 'react';

const LengthScreen = () => {
  const [firstVal, setFirstVal] = useState('');
  const [secondVal, setSecondVal] = useState('');
  const [valueFrom, setValueFrom] = useState('cm');
  const [valueTo, setValueTo] = useState('cm');

  const reset = () => {
    setFirstVal(" ");
    setSecondVal(" ");
    setValueFrom(" ");
    setValueTo(" ");
  }

  const convert = () => {
    if (valueFrom == valueTo) {
      setSecondVal(firstVal);
    }
    else {
      if (valueFrom == "cm") {
        if (valueTo == "m") {
          setSecondVal(firstVal / 100)
        }
        else if (valueTo == "km") {
          setSecondVal(firstVal / 100000)
        }
      }
      else if (valueFrom == "m") {
        if (valueTo == "cm") {
          setSecondVal(firstVal * 100)
        }
        if (valueTo == "km") {
          setSecondVal(firstVal / 1000)
        }
      }
      else if (valueFrom == "km") {
        if (valueTo == "cm") {
          setSecondVal(firstVal * 100000)
        }
        if (valueTo == "m"){
          setSecondVal(firstVal * 1000)
        }
      }
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{firstVal} {valueFrom} = {secondVal} {valueTo}</Text>
      <View style={styles.horiz}>
        <Text style={styles.paragraph}>From : </Text>
        <Picker style={styles.pick}
          selectedValue={valueFrom}
          onValueChange={(itemValue, itemIndex) => setValueFrom(itemValue)}
        >
          <Picker.Item label="cm" value="cm" />
          <Picker.Item label="m" value="m" />
          <Picker.Item label="km" value="km" />
        </Picker>
      </View>
      <View style={styles.horiz}>
        <Text style={styles.paragraph}>To : </Text>
        <Picker style={styles.pick}
          selectedValue={valueTo}
          onValueChange={(itemValue, itemIndex) => setValueTo(itemValue)}
        >
          <Picker.Item label="cm" value="cm" />
          <Picker.Item label="m" value="m" />
          <Picker.Item label="km" value="km" />
        </Picker>
      </View>
      <TextInput value={firstVal} onChangeText={text => setFirstVal(text)} style={styles.input} placeholder="Enter Value Here" keyboardType="numeric" >
      </TextInput>

      <View style={styles.horiz}>
        <TouchableOpacity onPress={convert} style={styles.button} >
          <Text style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
            Convert
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset} style={styles.button} >
          <Text style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#AC33E1',
    padding: 5,
    alignItems: "center",
    textAlign: "center",
  },

  paragraph: {
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  horiz: {
    flexDirection: "row"
  },
  pick: {
    margin: 5,
    width: 110,
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: '#7600bc',
    marginBottom: 20,
  },

  input: {
    width: 200,
    borderWidth: 3,
    borderColor: '#7600bc',
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#7600bc',
    padding: 15,
    borderRadius: 20,
    width: 110,
    height: 50,
    margin: 10
  }
})

export default LengthScreen
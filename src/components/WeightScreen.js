import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

const WeightScreen = () => {
  const [firstVal, setFirstVal] = useState('');
  const [secondVal, setSecondVal] = useState('');
  const [valueFrom, setValueFrom] = useState('mg');
  const [valueTo, setValueTo] = useState('mg');

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
      if (valueFrom == "mg") {
        if (valueTo == "g") {
          setSecondVal(firstVal / 100)
        }
        else if (valueTo == "kg") {
          setSecondVal(firstVal / 100000)
        }
      }
      else if (valueFrom == "g") {
        if (valueTo == "mg") {
          setSecondVal(firstVal * 100)
        }
        if (valueTo == "kg") {
          setSecondVal(firstVal / 1000)
        }
      }
      else if (valueFrom == "kg") {
        if (valueTo == "mg") {
          setSecondVal(firstVal * 100000)
        }
        if (valueTo == "g") {
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
          <Picker.Item label="mg" value="mg" />
          <Picker.Item label="g" value="g" />
          <Picker.Item label="kg" value="kg" />
        </Picker>
      </View>
      <View style={styles.horiz}>
        <Text style={styles.paragraph}>To : </Text>
        <Picker style={styles.pick}
          selectedValue={valueTo}
          onValueChange={(itemValue, itemIndex) => setValueTo(itemValue)}
        >
          <Picker.Item label="mg" value="mg" />
          <Picker.Item label="g" value="g" />
          <Picker.Item label="kg" value="kg" />
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

export default WeightScreen
import { View, Text, StyleSheet, TextInput, Pressable, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React from 'react';

const LengthScreen = () => {
  return (
    <View style={styles.parentrow}>
      <View style={styles.column}>
        <Picker style={styles.pick}>
          <Picker.Item label='cm' value='cm' />
          <Picker.Item label='m' value='m' />
          <Picker.Item label='km' value='km' />
        </Picker>

        <Picker style={styles.pick}>
          <Picker.Item label='cm' value='cm' />
          <Picker.Item label='m' value='m' />
          <Picker.Item label='km' value='km' />
        </Picker>
      </View>

      <View style={styles.column}>
        <Button title="="></Button>
      </View>

      <View style={styles.column}>
        <TextInput style={styles.input} keyboardType='numeric' placeholder='0' />
        <TextInput style={styles.input} keyboardType='numeric' placeholder='0' />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  parentrow: {
    flex: 1,
    flexDirection: 'row',
    alignItem: 'center',
    backgroundColor: '#AC33E1',
    justifyContent: 'center',
  },

  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 100
  },

  pick: {
    width: 110,
    borderWidth: 3,
    borderColor: '#7600bc',
    borderRadius: 10,
    marginBottom: 90,
    marginTop: 90

  },

  input: {
    width: 110,
    borderWidth: 3,
    borderColor: '#7600bc',
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 90,
    marginTop: 90
  },

  btn: {
    width: 110,
    height: 100,
    margin: 10

  }
})
export default LengthScreen
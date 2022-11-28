import { StyleSheet, View, Text, Pressable, Image } from 'react-native';

export default function StartPage({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate('Measurements');
  }

  return (
    <View style={styles.body}>
      <Image style={styles.img} source={require('../assets/arrowlogo.jpg')} />
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? '#0f0' : '#7600bc', borderRadius: 7 })}
      >
        <Text style={styles.text}>
          Start
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    color: '#fff',
  },
  appText: {
    color: '#555',
    width: '90%',
    textAlign: 'center',
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  img: {
    width: 130, 
    height: 130, 
    margin : 10
  }
})
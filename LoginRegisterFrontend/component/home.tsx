import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native';

function home(props: any) {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.cardView}>
        <Text style={style.text}>Home Screen</Text>

        <TouchableOpacity
          style={style.button}
          onPress={() => props.navigation.navigate('Login Page')}>
          <Text style={style.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.button2}
          onPress={() => props.navigation.navigate('Register Page')}>
          <Text style={style.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default home;

const screenHeight = Dimensions.get('window').height;
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fefae0',
  },
  button: {
    backgroundColor: '#d4a373',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: 30,
    borderRadius: 15,
    position: 'absolute',
    top: -15,
  },
  button2: {
    backgroundColor: '#d4a373',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: 30,
    borderRadius: 15,
    position: 'absolute',
    top: 294,
  },

  buttonText: {
    color: '#fefae0',
    fontSize: 25,
  },
  cardView: {
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#faedcd',
    width: 250,
    borderRadius: 10,
    height: screenHeight / 3,
  },
  text: {
    fontSize: 30,
    fontWeight: '900',
    color: '#d4a373',
  },
});

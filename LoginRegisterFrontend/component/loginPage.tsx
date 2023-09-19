import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function loginPage(props: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userCredentials = {
    email: email,
    password: password,
  };

  const loginButtonHandle = async () => {
    const axiosCall = await axios.post(
      'http://localhost:3000/user/login',
      userCredentials,
    );
    if (axiosCall.data.message === 'Email or password is not correct') {
      Alert.alert('Email or password is not correct');
    } else {
      const token = axiosCall.data.token;
      await AsyncStorage.setItem('token', token);
      props.navigation.navigate('Movie Data Page');
    }
  };

  return (
    <SafeAreaView style={style.safeAreaView}>
      <View style={style.container}>
        <View style={style.cardView}>
          <Text style={style.loginText}>Log In</Text>
          <View style={style.inputView}>
            <TextInput
              placeholder="Enter your Email"
              onChangeText={setEmail}
              value={email}
              style={style.textInput}></TextInput>
            <TextInput
              placeholder="Enter your Password"
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
              style={style.textInput}></TextInput>
          </View>
        </View>

        <TouchableOpacity onPress={loginButtonHandle} style={style.button}>
          <Text style={style.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default loginPage;

const style = StyleSheet.create({
  safeAreaView: {
    height: '100%',
    backgroundColor: '#fefae0',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#faedcd',
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  loginText: {
    fontWeight: '900',
    fontSize: 40,
    color: '#d4a373',
    margin: 20,
  },
  inputView: {
    flexDirection: 'column',
    margin: 15,
    marginBottom: 20,
  },
  textInput: {
    borderBottomColor: '#d4a373',
    borderBottomWidth: 1,
    width: 200,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#d4a373',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    borderRadius: 15,
    position: 'absolute',
    top: 520,
  },
  buttonText: {
    color: '#fefae0',
    fontSize: 25,
  },
});

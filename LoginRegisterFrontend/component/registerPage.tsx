import axios from 'axios';
import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native';

function registerPage(props: any) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const newUserData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  const submitButtonHandle = async () => {
    const axiosCall = await axios.post(
      'http://localhost:3000/user/register',
      newUserData,
    );

    if (
      axiosCall.data.message ===
      `${firstName} ${lastName} your account Created Successfully"`
    ) {
      Alert.alert(
        `${firstName} ${lastName} your account Created Successfully"`,
      );
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      props.navigation.navigate('Login Page');
    } else {
      Alert.alert('Account not created');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      props.navigation.navigate('Register Page');
    }
  };
  return (
    <SafeAreaView style={style.safeView}>
      <View style={style.container}>
        <View style={style.cardView}>
          <Text style={style.signUpText}>Sign Up</Text>

          <View style={style.inputView}>
            <TextInput
              placeholder="Enter your First name"
              onChangeText={setFirstName}
              value={firstName}
              style={style.textView}></TextInput>
            <TextInput
              placeholder="Enter your Last name"
              onChangeText={setLastName}
              value={lastName}
              style={style.textView}></TextInput>
            <TextInput
              placeholder="Enter your Email"
              onChangeText={setEmail}
              value={email}
              style={style.textView}></TextInput>
            <TextInput
              placeholder="Enter your Password"
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
              style={style.textView}></TextInput>
          </View>
        </View>

        <TouchableOpacity onPress={submitButtonHandle} style={style.button}>
          <Text style={style.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default registerPage;

const style = StyleSheet.create({
  safeView: {
    height: '100%',
    backgroundColor: '#fefae0',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView: {
    backgroundColor: '#faedcd',
    width: 300,
    height: 300,
    borderRadius: 20,
    alignItems: 'center',
  },
  signUpText: {
    color: '#d4a373',
    fontWeight: '900',
    fontSize: 50,
    marginVertical: 10,
  },
  inputView: {
    marginVertical: 10,
  },
  textView: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d4a373',
    width: 200,
  },
  button: {
    backgroundColor: '#d4a373',
    borderRadius: 15,
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 535,
  },
  buttonText: {
    color: '#fefae0',
    fontSize: 25,
  },
});

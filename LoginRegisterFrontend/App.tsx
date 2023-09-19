import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import home from './component/home';
import registerPage from './component/registerPage';
import loginPage from './component/loginPage';
import movieData from './component/movieData';
import movieDetails from './component/movieDetails';

const stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: '#d4a373',
          headerStyle: {backgroundColor: '#faedcd'},
        }}>
        <stack.Screen
          name="Home"
          component={home}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="Register Page"
          component={registerPage}
          options={{headerTintColor: '#d4a373'}}
        />
        <stack.Screen name="Login Page" component={loginPage} />
        <stack.Screen
          name="Movie Data Page"
          component={movieData}
          options={{headerBackTitle: 'Log Out'}}
        />
        <stack.Screen
          name="Movie Detail Page"
          component={movieDetails}
          options={{headerBackTitle: 'All Movies'}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import { StyleSheet, Text, View, ScrollView, Navigator } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './routes/Home.js';
import Calendar from './routes/Calendar.js';
import Medicamentos from './routes/Medicamentos.js';
import Perfil from './routes/Perfil.js';


const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Calendar: {screen: Calendar},
  Medicamentos: {screen: Medicamentos},
  Perfil: {screen: Perfil}

});

const App = createAppContainer(MainNavigator);

export default App;


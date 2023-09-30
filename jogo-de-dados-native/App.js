import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';
import HistoryScreen from './src/screens/HistoryScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Página Inicial' }} />
        <Stack.Screen name="GameScreen" component={GameScreen} options={{ title: 'Jogo de Dados' }} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} options={{title:'Histórico de jogadas'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

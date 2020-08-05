import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ListNotesScreen from './src/screens/ListNotesScreen';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {NotesProvider} from './src/context/NotesContext'
import CreateNoteScreen from './src/screens/CreateNoteScreen';
import ShowNotesScreen from './src/screens/ShowNotesScreen';


const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name='notes'
         component={ListNotesScreen}
         options={{
           headerTitleAlign: 'center',
           title: 'All Notes'
         }}
        />

      <Stack.Screen
         name='create'
         component={CreateNoteScreen}
         options={{
           headerTitleAlign: 'center',
           title: 'create'
         }}
        />

      <Stack.Screen
         name='show'
         component={ShowNotesScreen}
         options={{
           headerTitleAlign: 'center',
           title: 'create'
         }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <NotesProvider>
      <App />
    </NotesProvider>
    
  )
}
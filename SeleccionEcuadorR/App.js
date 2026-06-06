// App.js — Punto de entrada de la aplicación
// Aquí configuramos la navegación entre pantallas
 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
// Importamos nuestras pantallas
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
 
// Creamos el navegador de tipo "stack" (apila pantallas como cartas)
const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    // NavigationContainer envuelve toda la app para habilitar la navegación
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"   // La primera pantalla que aparece
        screenOptions={{ headerShown: false }} // Ocultamos la barra de título
      >
        {/* Definimos cada pantalla con un nombre y su componente */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
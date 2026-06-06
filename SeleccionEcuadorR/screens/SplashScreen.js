// SplashScreen.js — Pantalla de bienvenida
// Se muestra al abrir la app por 2 segundos, luego va al Home

import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    // Espera 2 segundos y luego navega al Home
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 2000);

    // Limpia el timer si el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.emoji}>ECUADOR</Text>
      <Text style={styles.titulo}>LA TRI</Text>
      <Text style={styles.subtitulo}>Selección Ecuatoriana de Fútbol</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#ffffff',   // amarillo Ecuador
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#003087',             // azul Ecuador
    letterSpacing: 6,
  },
  subtitulo: {
    fontSize: 14,
    color: '#003087',
    marginTop: 8,
  },
});
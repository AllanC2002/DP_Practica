import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.fondo}>

      <View style={styles.header}>
        <Text style={styles.headerTexto}>EC La Tri</Text>
      </View>

      {/* Información del equipo */}
      <View style={styles.seccion}>
        <Text style={styles.titulo}>Selección Ecuatoriana</Text>
        <Text style={styles.texto}>
          La Tri es el equipo nacional de fútbol del Ecuador.
          Ha participado en 5 Copas del Mundo: 2002, 2006, 2014, 2022 y 2026.
          Su mejor desempeño fue en 2006, llegando a los octavos de final.
          El equipo es conocido por su pasión, garra y el apoyo incondicional de sus hinchas.
          Ahora se prepara para seguir dejando en alto el nombre del Ecuador en el fútbol mundial, con su quinta participación en el Mundial 2026. ¡Vamos La Tri!
        </Text>
      </View>

      {/* Datos rápidos */}
      <View style={styles.seccion}>
        <Text style={styles.titulo}>Datos del equipo</Text>
        <Text style={styles.dato}>🏆 Mundiales: 5</Text>
        <Text style={styles.dato}>📅 Fundación: 1925</Text>
        <Text style={styles.dato}>🏟️ Estadio: Olimpico Atahualpa, Quito</Text>
        <Text style={styles.dato}>👕 Colores: Amarillo, Azul y Rojo</Text>
      </View>

      {/* Jugadores */}
      <View style={styles.seccion}>
        <Text style={styles.titulo}>Jugadores destacados</Text>
        <Text style={styles.dato}>Moisés Caicedo — Mediocampista</Text>
        <Text style={styles.dato}>Enner Valencia — Delantero</Text>
        <Text style={styles.dato}>Piero Hincapié — Defensa</Text>
        <Text style={styles.dato}>William Pacho — Defensa</Text>
        <Text style={styles.dato}>Antonio Valencia — Lateral</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#003087',   
    padding: 30,
    alignItems: 'center',
  },
  headerTexto: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD100',             
  },
  seccion: {
    backgroundColor: '#fff',
    margin: 12,
    padding: 16,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003087',
    marginBottom: 8,
  },
  texto: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
  },
  dato: {
    fontSize: 14,
    color: '#444',
    marginBottom: 6,
  },
});
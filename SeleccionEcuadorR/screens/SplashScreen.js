import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Dimensions, Platform  } from 'react-native';

const { width } = Dimensions.get('window');
const ANCHO = Platform.OS === 'web' ? 380 : width;
const CIRCULO = ANCHO * 0.85;

export default function SplashScreen({ navigation }) {
    const irAlHome = () => {
        navigation.replace('Home');
    };

    useEffect(() => {
        const timer = setTimeout(irAlHome, 10000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.contenedor}>
            <View style={styles.circulo}>
                <Text style={styles.emoji}>ECUADOR</Text>
                <Text style={styles.titulo}>LA TRI</Text>
                <Text style={styles.subtitulo}>Selección Ecuatoriana de Fútbol</Text>

                <TouchableOpacity style={styles.boton} onPress={irAlHome}>
                    <Text style={styles.botonTexto}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 430,        
        alignSelf: 'center',  
        width: '100%',  
    },
    emoji: {
        fontSize: ANCHO  * 0.1,
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#FFD100',
    },
    titulo: {
        fontSize: ANCHO * 0.09,
        fontWeight: 'bold',
        color: '#003087',
        letterSpacing: 6,
    },
    subtitulo: {
        fontSize: ANCHO * 0.04,
        color: '#003087',
    },
    boton: {
        marginTop: 40,
        backgroundColor: '#ff0000',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 20,
    },
    botonTexto: {
        color: '#ffffff',
        fontSize: ANCHO * 0.04,
        fontWeight: 'bold',
    },
    circulo: {
        width: CIRCULO,
        height: CIRCULO,
        borderRadius: CIRCULO / 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderWidth: 4,
        borderColor: '#000000',
    },
});
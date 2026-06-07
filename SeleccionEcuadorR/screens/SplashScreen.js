import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Dimensions, Platform, Image } from 'react-native';

const { width } = Dimensions.get('window');
const ANCHO = Platform.OS === 'web' ? 380 : width;
const CIRCULO = ANCHO * 0.85;

export default function SplashScreen({ navigation }) {
    const irAlHome = () => {
        navigation.replace('Home');
    };

    useEffect(() => {
        const timer = setTimeout(irAlHome, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.contenedor}>
            <View style={styles.anilloAmarillo}>
                <View style={styles.anilloAzul}>
                    <View style={styles.anilloRojo}>
                        <View style={styles.circulo}>
                                <Text style={styles.emoji}>ECUADOR</Text>
                                <Text style={styles.titulo}>LA TRI</Text>
                                <Image
                                    source={require('../assets/logo_fef.png')}
                                    style={{ width: 37, height: 45 }}
                                />
                                <Text style={styles.subtitulo}>Selección Ecuatoriana de Fútbol</Text>
                                <TouchableOpacity style={styles.boton} onPress={irAlHome}>
                                <Text style={styles.botonTexto}>Entrar</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    contenedor: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 430,        
        alignSelf: 'center',  
        width: '100%',  
    },
    emoji: {
        fontSize: ANCHO  * 0.1,
        marginTop: 35,
        fontWeight: 'bold',
        color: '#000000',
    },
    titulo: {
        fontSize: ANCHO * 0.07,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 7,
    },
    subtitulo: {
        fontSize: ANCHO * 0.03,
        color: '#000000',
        marginTop: 7,
    },
    boton: {
        marginTop: 25,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#003087',
    },
    botonTexto: {
        color: '#000000',
        fontSize: ANCHO * 0.04,
        fontWeight: 'bold',
    },
    circulo: {
        backgroundColor: '#F5F5F5',
        width: CIRCULO,
        height: CIRCULO,
        borderRadius: CIRCULO / 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    anilloAmarillo: {
        width: CIRCULO + 36,
        height: CIRCULO + 36,
        borderRadius: (CIRCULO + 36) / 2,
        backgroundColor: '#FFD100',
        alignItems: 'center',
        justifyContent: 'center',
    },
    anilloAzul: {
        width: CIRCULO + 24,
        height: CIRCULO + 24,
        borderRadius: (CIRCULO + 24) / 2,
        backgroundColor: '#003087',
        alignItems: 'center',
        justifyContent: 'center',
    },
    anilloRojo: {
        width: CIRCULO + 12,
        height: CIRCULO + 12,
        borderRadius: (CIRCULO + 12) / 2,
        backgroundColor: '#CE1126',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
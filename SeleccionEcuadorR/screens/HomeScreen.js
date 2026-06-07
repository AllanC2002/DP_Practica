import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';


export default function HomeScreen() {
    const [formacion, setFormacion] = useState('433'); 
    return (
        <ScrollView style={styles.fondo}>

            <View style={styles.header}>
                <View style={styles.bandera}>
                    <View style={[styles.franja, { backgroundColor: '#FFD100' }]} />
                    <View style={[styles.franja, { backgroundColor: '#003087' }]} />
                    <View style={[styles.franja, { backgroundColor: '#CE1126' }]} />
                </View>
                <Text style={styles.headerTexto}>ECUADOR</Text>
                <Image
                    source={require('../assets/logo_fef.png')}
                    style={{ width: 37, height: 45 }}
                />
            </View>

            {/* Información del equipo */}
            <View style={styles.seccion}>
                <Text style={styles.titulo}>Selección Ecuatoriana</Text>
                <Text style={styles.texto}>La Tri es el equipo nacional de fútbol del Ecuador, conocido por su pasión y garra.</Text>

                <Text style={styles.titulo}>Ha participado en 5 Copas del Mundo:</Text>
                <Text style={styles.texto}>2002 · 2006 · 2014 · 2022 · 2026</Text>

                <Text style={styles.titulo}>Mejor desempeño:</Text>
                <Text style={styles.texto}>Octavos de final — Alemania 2006</Text>

                <Text style={styles.destacado}>¡Vamos La Tri!</Text>
            </View>
            <View style={styles.seccion}>
                <Text style={styles.titulo}>Datos del equipo</Text>
                <Text style={styles.texto}>Mundiales: 5</Text>
                <Text style={styles.texto}>Fundación: 1925 y afiliada a la FIFA desde 1926</Text>
                <Text style={styles.texto}>Estadio: Rodrigo Paz Delgado, Quito</Text>
                <Text style={styles.texto}>Confederación: CONMEBOL</Text>
                <Text style={styles.texto}>Apodo: LA TRI</Text>
            </View>

            {/* Jugadores */}
            <View style={styles.seccion}>
                <Text style={styles.titulo}>Plantilla Mundial 2026</Text>
                {/* Encabezado tabla */}
                <View style={styles.filaHeader}>
                    <Text style={[styles.celHeader, { flex: 2.3 }]}>Nombre</Text>
                    <Text style={styles.celHeader}>Edad</Text>
                    <Text style={styles.celHeader}>Est</Text>
                    <Text style={styles.celHeader}>P</Text>
                </View>

                {/* Arqueros */}
                <Text style={styles.grupo}>Arqueros</Text>
                {[
                    { nombre: 'Hernán Galíndez', edad: 39, est: '1.88m', p: '83kg' },
                    { nombre: 'Moisés Ramírez', edad: 25, est: '1.85m', p: '82kg' },
                    { nombre: 'Gonzalo Valle', edad: 30, est: '1.85m', p: '86kg' },
                ].map((j, i) => (
                    <View key={i} style={[styles.fila, i % 2 === 0 && styles.filaAlterna]}>
                    <Text style={[styles.cel, { flex: 2.3 }]}>{j.nombre}</Text>
                    <Text style={styles.cel}>{j.edad}</Text>
                    <Text style={styles.cel}>{j.est}</Text>
                    <Text style={styles.cel}>{j.p}</Text>
                    </View>
                ))}

                {/* Defensas */}
                <Text style={styles.grupo}>Defensas</Text>
                {[
                    { nombre: 'Félix Torres',     edad: 29, est: '1.88m', p: '78kg' },
                    { nombre: 'Piero Hincapié',   edad: 24, est: '1.83m', p: '77kg' },
                    { nombre: 'Joel Ordóñez',     edad: 22, est: '1.88m', p: '76kg' },
                    { nombre: 'Willian Pacho',    edad: 24, est: '1.88m', p: '81kg' },
                    { nombre: 'Pervis Estupiñán', edad: 28, est: '1.75m', p: '73kg' },
                    { nombre: 'Ángelo Preciado',  edad: 28, est: '1.75m', p: '73kg' },
                    { nombre: 'Jackson Porozo',   edad: 25, est: '1.93m', p: '86kg' },
                    { nombre: 'Yaimar Medina',    edad: 21, est: '1.78m', p: '78kg' },
                ].map((j, i) => (
                    <View key={i} style={[styles.fila, i % 2 === 0 && styles.filaAlterna]}>
                    <Text style={[styles.cel, { flex: 2.3 }]}>{j.nombre}</Text>
                    <Text style={styles.cel}>{j.edad}</Text>
                    <Text style={styles.cel}>{j.est}</Text>
                    <Text style={styles.cel}>{j.p}</Text>
                    </View>
                ))}

                {/* Mediocampistas */}
                <Text style={styles.grupo}>Mediocampistas</Text>
                {[
                    { nombre: 'Jordy Alcivar',    edad: 26, est: '1.68m', p: '71kg' },
                    { nombre: 'Kendry Páez',      edad: 19, est: '1.78m', p: '71kg' },
                    { nombre: 'Pedro Vite',       edad: 24, est: '1.73m', p: '68kg' },
                    { nombre: 'Denil Castillo',   edad: 22, est: '1.88m', p: '76kg' },
                    { nombre: 'Alan Franco',      edad: 27, est: '1.75m', p: '76kg' },
                    { nombre: 'Moisés Caicedo',   edad: 24, est: '1.78m', p: '73kg' },
                ].map((j, i) => (
                    <View key={i} style={[styles.fila, i % 2 === 0 && styles.filaAlterna]}>
                    <Text style={[styles.cel, { flex: 2.3 }]}>{j.nombre}</Text>
                    <Text style={styles.cel}>{j.edad}</Text>
                    <Text style={styles.cel}>{j.est}</Text>
                    <Text style={styles.cel}>{j.p}</Text>
                    </View>
                ))}

                {/* Delanteros */}
                <Text style={styles.grupo}>Delanteros</Text>
                {[
                    { nombre: 'Anthony Valencia', edad: 22, est: '1.73m', p: '68kg' },
                    { nombre: 'John Yeboah',      edad: 25, est: '1.70m', p: '66kg' },
                    { nombre: 'Kevin Rodríguez',  edad: 26, est: '1.91m', p: '83kg' },
                    { nombre: 'Enner Valencia',   edad: 36, est: '1.78m', p: '73kg' },
                    { nombre: 'Alan Minda',       edad: 23, est: '1.75m', p: '59kg' },
                    { nombre: 'Jordy Caicedo',    edad: 28, est: '1.85m', p: '82kg' },
                    { nombre: 'Gonzalo Plata',    edad: 25, est: '1.78m', p: '76kg' },
                    { nombre: 'Nilson Angulo',    edad: 22, est: '1.83m', p: '68kg' },
                    { nombre: 'Jeremy Arévalo',   edad: 21, est: '1.83m', p: '87kg' },
                ].map((j, i) => (
                    <View key={i} style={[styles.fila, i % 2 === 0 && styles.filaAlterna]}>
                    <Text style={[styles.cel, { flex: 2.3 }]}>{j.nombre}</Text>
                    <Text style={styles.cel}>{j.edad}</Text>
                    <Text style={styles.cel}>{j.est}</Text>
                    <Text style={styles.cel}>{j.p}</Text>
                    </View>
                    
                ))}
            </View>
            <View style={styles.seccion}>
            <Text style={styles.titulo}>Formaciones</Text>

            {/* Botones para alternar */}
            <View style={{ flexDirection: 'row', gap: 10, marginBottom: 16 }}>
                <TouchableOpacity
                    style={[styles.btnFormacion, formacion === '433' && styles.btnActivo]}
                    onPress={() => setFormacion('433')}
                >
                <Text style={[styles.btnFormacionTexto, formacion === '433' && styles.btnActivoTexto]}>4-3-3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btnFormacion, formacion === '442' && styles.btnActivo]}
                    onPress={() => setFormacion('442')}
                >
                <Text style={[styles.btnFormacionTexto, formacion === '442' && styles.btnActivoTexto]}>4-4-2</Text>
                </TouchableOpacity>
            </View>

            {/* Campo de fútbol */}
            <View style={styles.campo}>

                {formacion === '433' && <>
                {/* Delanteros */}
                <View style={styles.linea}>
                    <Text style={styles.jugador}>Angulo</Text>
                    <Text style={styles.jugador}>E.Valencia</Text>
                    <Text style={styles.jugador}>Plata</Text>
                </View>
                {/* Mediocampistas */}
                <View style={styles.linea}>
                    <Text style={styles.jugador}>Páez</Text>
                    <Text style={styles.jugador}>M.Caicedo</Text>
                    <Text style={styles.jugador}>Alcivar</Text>
                </View>
                {/* Defensas */}
                <View style={styles.linea}>
                    <Text style={styles.jugador}>Estupiñán</Text>
                    <Text style={styles.jugador}>Pacho</Text>
                    <Text style={styles.jugador}>Hincapié</Text>
                    <Text style={styles.jugador}>Preciado</Text>
                </View>
                {/* Portero */}
                <View style={styles.linea}>
                    <Text style={styles.jugador}>Galíndez</Text>
                </View>
                </>}

                {formacion === '442' && <>
                {/* Delanteros */}
                <View style={styles.linea}>
                    <Text style={styles.jugador}>E.Valencia</Text>
                    <Text style={styles.jugador}>J.Caicedo</Text>
                </View>
                {/* Mediocampistas */}
                <View style={styles.linea}>
                    <Text style={styles.jugador}>Plata</Text>
                    <Text style={styles.jugador}>Páez</Text>
                    <Text style={styles.jugador}>M.Caicedo</Text>
                    <Text style={styles.jugador}>Angulo</Text>
                </View>
                {/* Defensas */}
                <View style={styles.linea}>
                    <Text style={styles.jugador}>Estupiñán</Text>
                    <Text style={styles.jugador}>Pacho</Text>
                    <Text style={styles.jugador}>Hincapié</Text>
                    <Text style={styles.jugador}>Preciado</Text>
                </View>
                {/* Portero */}
                <View style={styles.linea}>
                    <Text style={styles.jugador}>Galíndez</Text>
                </View>
                
                </>}

            </View>
        </View>
        <View>
            <Text style={styles.titulo}></Text>
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
        backgroundColor: '#F5F5F5',   
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTexto: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 10,
        color: '#000000',             
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
        marginTop: 4,
        marginBottom: 4,
    },
    texto: {
        fontSize: 14,
        color: '#444',
        lineHeight: 22,
    },
    bandera: {
        flexDirection: 'row',
        width: '100%',
        height: 8,
    },
    franja: {
        flex: 1,
        height: 8,
    },
    destacado: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#CE1126',
        marginTop: 14,
        textAlign: 'center',
    },
    filaHeader: {
        flexDirection: 'row',
        backgroundColor: '#003087',
        padding: 6,
        borderRadius: 6,
        marginBottom: 4,
    },
    celHeader: {
        flex: 1,
        color: '#FFD100',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    grupo: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#CE1126',
        marginTop: 10,
        marginBottom: 4,
    },
    fila: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 8,
    },
    filaAlterna: {
        backgroundColor: '#F0F4FF',
        borderRadius: 4,
    },
    cel: {
        flex: 1,
        fontSize: 12,
        color: '#333',
        textAlign: 'center',
    },
    campo: {
        backgroundColor: '#2d8a4e',
        borderRadius: 10,
        padding: 16,
        gap: 20,
        borderWidth: 2,
        borderColor: '#ffffff',
    },
    linea: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    jugador: {
        backgroundColor: '#FFD100',
        color: '#003087',
        fontSize: 11,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 20,
        textAlign: 'center',
        minWidth: 65,
    },
    btnFormacion: {
        flex: 1,
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#003087',
        alignItems: 'center',
    },
    btnActivo: {
        backgroundColor: '#003087',
    },
    btnFormacionTexto: {
        color: '#003087',
        fontWeight: 'bold',
    },
    btnActivoTexto: {
        color: '#FFD100',
    },
});
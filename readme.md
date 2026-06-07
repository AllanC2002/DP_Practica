# App Móvil

Aplicación móvil básica desarrollada con **React Native** y **Expo Go** como práctica de introducción al desarrollo móvil.

## Pantallas

- **Splash Screen** — Pantalla de bienvenida con los colores de Ecuador. Avanza automáticamente o con el botón "Entrar".
- **Home Screen** — Información del equipo: historia, datos, plantilla para el Mundial 2026 y formaciones.

## Tecnologías

- React Native
- Expo SDK 54
- React Navigation (Native Stack)

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/SeleccionEcuadorR.git
cd SeleccionEcuadorR

# Instalar dependencias
npm install

# Iniciar la app
npx expo start
```

Escanea el QR con la app **Expo Go** en tu celular, o presiona `w` para abrir en el navegador.

## Estructura del proyecto

```
SeleccionEcuadorR/
├── App.js                  # Navegación principal
├── screens/
│   ├── SplashScreen.js     # Pantalla de bienvenida
│   └── HomeScreen.js       # Pantalla de inicio
├── assets/                 # Imágenes e íconos
└── app.json                # Configuración de Expo
```
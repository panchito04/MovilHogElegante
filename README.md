# Hogar Elegante - Aplicación Móvil 📱

Este repositorio contiene la versión móvil dedicada de **Hogar Elegante**, un sistema boutique de administración minimalista cálido. Está empaquetada como una aplicación híbrida nativa de alto rendimiento utilizando **Capacitor**.

## ✨ Características Móviles
- **Acceso a Cámara Nativa**: Captura directa de imágenes de productos y joyería para el inventario utilizando la cámara nativa del celular.
- **Notificaciones Flotantes del Sistema**: Mensajería interactiva nativa mediante el sistema de Toasts del sistema operativo.
- **Optimización de Teclado**: Ajustes en inputs para evitar desplazamientos incorrectos del viewport al redactar.
- **Enrutamiento Inteligente**: Conexión automática a la puerta de enlace interna en emuladores Android (`10.0.2.2`).

## 🛠️ Compilación Automática (APK)
Este repositorio cuenta con **GitHub Actions** configurado para compilar el archivo `.apk` de instalación en la nube de forma automática en cada cambio.

### Cómo obtener el instalador APK:
1. Ve a la pestaña **Actions** en este repositorio de GitHub.
2. Selecciona la ejecución del flujo de trabajo más reciente (**Build Android APK**).
3. Desplázate hacia abajo hasta la sección **Artifacts** (Artefactos).
4. Descarga el archivo **app-debug-apk** comprimido en `.zip`.
5. Extrae el archivo `.apk` e instálalo en tu dispositivo móvil Android.

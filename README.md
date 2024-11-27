# Galería de Imágenes de Perros y Gatos 🐶🐱

Una aplicación web interactiva para explorar y descubrir imágenes de perros y gatos, buscar razas específicas y obtener información detallada sobre ellas.

## 🚀 Características

- **Galería dinámica:** Explora imágenes de perros y gatos con la opción de cargar más imágenes dinámicamente.
- **Interruptor de especies:** Cambia entre perros y gatos con un simple interruptor.
- **Búsqueda por razas:** Selecciona una raza y obtén imágenes relacionadas e información detallada (origen, temperamento, etc.).
- **Regeneración de imágenes:** Vuelve a cargar las imágenes mostradas en la galería.
- **Modo de vista ampliada:** Usa Fancybox para ver las imágenes en detalle.

---

## 📂 Estructura del Proyecto

### Principales archivos y carpetas:
- **`index.html`:** Página principal del proyecto.
- **`script.js`:** Contiene la lógica de la aplicación.
- **`css/`:** Estilos personalizados de la aplicación.
- **`package.json`:** Configuración del proyecto y dependencias.

---

🔑 Dependencias
Producción:

    @fancyapps/ui: Galería de imágenes interactiva.
    axios: Cliente HTTP para realizar solicitudes API.
    purecss: Framework CSS minimalista.

Desarrollo:

    parcel: Bundler para desarrollo rápido.
    buffer y process: Dependencias auxiliares para compatibilidad.

🌐 APIs Utilizadas

    The Cat API: Obtención de imágenes y datos de gatos.
    The Dog API: Obtención de imágenes y datos de perros.

Aquí tienes un ejemplo de cómo podría estructurarse el archivo README.md para tu proyecto:

# Galería de Imágenes de Perros y Gatos 🐶🐱

Una aplicación web interactiva para explorar y descubrir imágenes de perros y gatos, buscar razas específicas y obtener información detallada sobre ellas.

## 🚀 Características

- **Galería dinámica:** Explora imágenes de perros y gatos con la opción de cargar más imágenes dinámicamente.
- **Interruptor de especies:** Cambia entre perros y gatos con un simple interruptor.
- **Búsqueda por razas:** Selecciona una raza y obtén imágenes relacionadas e información detallada (origen, temperamento, etc.).
- **Regeneración de imágenes:** Vuelve a cargar las imágenes mostradas en la galería.
- **Modo de vista ampliada:** Usa Fancybox para ver las imágenes en detalle.

---

## 📂 Estructura del Proyecto

### Principales archivos y carpetas:
- **`index.html`:** Página principal del proyecto.
- **`script.js`:** Contiene la lógica de la aplicación.
- **`css/`:** Estilos personalizados de la aplicación.
- **`package.json`:** Configuración del proyecto y dependencias.

---

## 📦 Instalación

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git

    Instala las dependencias:

npm install

Inicia el servidor de desarrollo:

    npm start

    Abre en tu navegador: La aplicación estará disponible en http://localhost:1234.

🔑 Dependencias

Producción:

    @fancyapps/ui: Galería de imágenes interactiva.
    axios: Cliente HTTP para realizar solicitudes API.
    purecss: Framework CSS minimalista.

Desarrollo:

    parcel: Bundler para desarrollo rápido.
    buffer y process: Dependencias auxiliares para compatibilidad.

🌐 APIs Utilizadas

    The Cat API: Obtención de imágenes y datos de gatos.
    The Dog API: Obtención de imágenes y datos de perros.

Claves API

Es necesario reemplazar las claves API en script.js:

const api_key_cats = 'TU_CLAVE_API_GATOS';
const api_key_dogs = 'TU_CLAVE_API_PERROS';

📖 Uso de la Aplicación

    Galería: Navega entre imágenes de perros o gatos según la selección del interruptor.
    Carga de más imágenes: Haz clic en "Cargar más" para ver más resultados.
    Búsqueda por raza:
        Selecciona una raza desde el menú desplegable.
        Obtén información y una galería de imágenes específicas.

🛠 Desarrollo

Scripts disponibles:

    npm start: Inicia el servidor de desarrollo.
    npm run build: Genera una versión optimizada para producción.    

📜 Licencia

Este proyecto está licenciado bajo la MIT License.    

# Clon de Dev.to

Este proyecto es un clon del sitio web **[Dev.to](https://dev.to/)**, construido utilizando **React** **Next.js**  y **Tailwind CSS**. El objetivo es replicar algunas de las funcionalidades clave de Dev.to, ofreciendo un diseño responsivo y dinámico.

## Características

El sitio web cuenta con las siguientes funcionalidades:

- **Creación de usuarios**: Los nuevos usuarios pueden registrarse en el sitio.
- **Inicio de sesión**: Los usuarios registrados pueden iniciar sesión para acceder a sus cuentas.
- **Creación de post**: Los usuarios autenticados pueden crear nuevas publicaciones.
- **Renderizado dinámico de los post**: Los posts creados se muestran de manera dinámica en la interfaz.
- **Menú desplegable en el avatar del usuario**: Al hacer clic en el avatar del usuario en la barra de navegación, se despliega un menú con la opción de cerrar sesión.
- **Conteo dinámico de usuarios**: El número total de usuarios creados se actualiza automáticamente según los datos de la API.

## Características en Desarrollo

- **Implementación de ReCaptcha en formulario de creación de usuario**
- **Busqueda de contenido desde la navbar**
- **Creación de post (opciones de formato de texto)**:
- **Subir archivos de imagen (en lugar de URL)**: Los posts creados se muestran de manera dinámica en la interfaz.

## Tecnologías utilizadas

Este proyecto utiliza las siguientes tecnologías y dependencias:

### Frontend

- **React**: Librería para construir interfaces de usuario.
- **Next.js**: Framework basado en React para desarrollo de aplicaciones web.
- **Tailwind CSS**: Framework de CSS para estilos utilitarios.
- **clsx**: Utilidad para gestionar clases condicionales.
- **lucide-react**: Iconos para React.
- **react-hook-form**: Librería para gestionar formularios en React.
- **react-google-recaptcha**: Integración de Google reCAPTCHA para protección contra bots.
- **react-icons**: Paquete de iconos populares para React.
- **sonner**: Librería para mostrar notificaciones y alertas.

### Dependencias

```json
"dependencies": {
  "clsx": "^2.1.1",
  "lucide-react": "^0.441.0",
  "next": "14.2.9",
  "react": "^18",
  "react-dom": "^18",
  "react-google-recaptcha": "^3.1.0",
  "react-hook-form": "^7.53.0",
  "react-icons": "^5.3.0",
  "sonner": "^1.5.0"
}
```
## API

El proyecto se conecta con una API que maneja la autenticación de usuarios, creación de posts, y el conteo dinámico de usuarios.

- **Link de la API**: [https://bcknd-chal.onrender.com](https://bcknd-chal.onrender.com)
- **GitHub de la API**: [https://github.com/jairock88/bcknd-chal](https://github.com/jairock88/bcknd-chal)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
    ```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el proyecto en modo desarrollo:

```bash
npm run dev
```
## Test TITA-MEDIA
> A continuación los detalles de la prueba:
## Framework: React
_API_: Social Network -> https://dummyapi.io/
### ¿Qué debes hacer?
- Iniciar sesión utilizando un autenticador externo (Google, Facebook, entre otros).
- Ver posts en el home.
- Cada post debe mostrar: foto y nombre del usuario que hizo el post, imagen y texto del post, tags del post, cantidad de likes y comentarios.
- Se debe mostrar un modal con todos los comentarios.
- Se debe mostrar un modal con toda la información del usuario que hizo el post.
- Se deben poder filtrar los posts por tag.
>
La información del usuario autenticado debe ser mostrada en el header.
## Entregables:
- Repositorio git. ( No olvidar un buen README )
- Aplicación desplegada, puede ser en netlify, heroku, github pages o el de tu preferencia.

## Condiciones:
- No usar ningún framework de CSS.
- Se recomienda el uso de hooks, redux, atomic design.

## Observaciones:
- Uso de queries y mutations de GraphQL será valorado.

# _Solución_
1. [x] Implementar configuracion de firebase para el login de redes sociales.
2. [x] Crear pantalla de home con los post
3. [x] Crear pantalla de comentarios
4. [x] Generar modal de datos del usuario del post
5. [x] Implementar filtros
   1. [x] Generar listado de tags para filtrar

# Dirección del sitio

https://quenandres.github.io/tita-media-test/

# Tecnologías utilizadas

- HTML
- CSS
- React
- FireBase
- Axios
# Descripcion
Para ejecutar el proyecto es necesario seguir los pasos brindandos a continuación:

- Clonar repositorio:
```bash
git clone https://github.com/quenandres/tita-media-test
```
- Instalar dependencias:
```bash
npm install
```
- El proyecto se ejecutara en el puerto 5173
- Archivo .env
  - Es necesario tener un archivo .env con la variable de entorno llamada *VITE_API_KEY* con el api_key de dummyapi.


## Imagenes
>
### Pantalla de login con redes sociales
<img src="./src/assets/project/login.jpeg" >
>

### Pantalla de posts
<img src="./src/assets/project/posts.jpeg" >
>

### Pantalla de comentarios
<img src="./src/assets/project/comments.jpeg" >
>

### Pantalla de información del usuario
<img src="./src/assets/project/user.jpeg" >
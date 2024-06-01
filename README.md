# WEB-Lab-Server-Side-JS

## Link: http://3.129.191.211/api/22434/posts/

### -Objetivo del Laboratorio:

Practicar conceptos básicos de JavaScript del lado del servidor.
Configurar una base de datos para ser consumida por un cliente.
Construir y probar endpoints REST personalizados.
Crear código limpio y ordenado en JavaScript.

### -Requisitos:

GET /posts: Retorna un listado de todos los posts. Debe retornar un array y un status 200 si fue exitoso.
GET /posts/:postId: Retorna el detalle de un post con el id postId. Debe retornar un objeto y un status 200 si fue exitoso.
POST /posts: Permite crear un nuevo post. Debe retornar un objeto con el post creado y un status 200 si fue exitoso.
PUT /posts/:postId: Permite modificar un post. Debe retornar un objeto con el post editado y un status 200 si exitoso.
DELETE /posts/:postId: Borra un post. No debe retornar contenido y debe retornar status 204.
Archivos y Directorios Importantes
src/: Contiene el código JavaScript que ejecuta el servidor de Express.
schema.sql: Contiene el código SQL para configurar la base de datos.
Dockerfile: Configura y crea una base de datos MySQL.
package.json: Contiene scripts para iniciar el servidor con npm start.


### -Cómo ejecutar:

Para iniciar el servidor, asegúrate de tener Node.js y npm instalados, y ejecuta los siguientes comandos:

npm install  # Instala las dependencias del proyecto
npm start    # Inicia el servidor

### -Licencia:

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.


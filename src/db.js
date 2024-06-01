import conn from './conn.js';
import fs from 'fs';

export function writeToLog(endpoint, payload, response) {
    const logMessage = `Endpoint: ${endpoint}\nTime: ${new Date().toISOString()}\nPayload: ${JSON.stringify(payload)}\nResponse: ${JSON.stringify(response)}\n\n`;
    fs.appendFile('log.txt', logMessage, (err) => {
      if (err) {
        console.error('Error al escribir en el archivo de registro:', err);
      }
    });
  }
  
export async function getAllPosts() {
  try {
    const [rows] = await conn.query('SELECT * FROM posts');
    writeToLog('/getAllPosts', null, response);
    return rows;
  } catch (error) {
    console.error('Error al obtener posts:', error);
    throw new Error('Error interno del servidor');
  }
}

export async function getPostById(id) {
  try {
    const [rows] = await conn.query('SELECT * FROM posts WHERE id = ?', [id]);
    writeToLog(`/getPostById/${id}`, null, response);
    return rows[0]; // Retorna solo el primer resultado o undefined si no hay ninguno
  } catch (error) {
    console.error('Error al obtener el post:', error);
    throw new Error('Error interno del servidor');
  }
}

export async function deletePostById(id) {
  try {
    const result = await conn.query('DELETE FROM posts WHERE id = ?', [id]);
    writeToLog(`/deletePostById/${id}`, null, response);
    return result;
  } catch (error) {
    console.error('Error al eliminar el post:', error);
    throw new Error('Error interno del servidor');
  }
}

export async function updatePostById(id, {
  nombre, posicion, posicion2, numero, equipo, descripcion, imagen, supertecnica,
}) {
  try {
    const result = await conn.query('UPDATE posts SET nombre = ?, posicion = ?, posicion2 = ?, numero = ?, equipo = ?, descripcion = ?, imagen = ?, supertecnica = ? WHERE id = ?', [nombre, posicion, posicion2, numero, equipo, descripcion, imagen, supertecnica, id]);
    writeToLog(`/updatePostById/${id}`, {
        titulo, descripcion, imagen, autor,
      }, response);
    return result;
  } catch (error) {
    console.error('Error al actualizar el post:', error);
    throw new Error('Error interno del servidor');
  }
}

export async function addPost({
  nombre, posicion, posicion2, numero, equipo, descripcion, imagen, supertecnica,
}) {
  try {
    const result = await conn.query('INSERT INTO posts (nombre, posicion, posicion2, numero, equipo, descripcion, imagen, supertecnica) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [nombre, posicion, posicion2, numero, equipo, descripcion, imagen, supertecnica]);
    writeToLog('/addPost', {
        titulo, descripcion, imagen, autor,
      }, response);
    return result;
  } catch (error) {
    console.error('Error al añadir el post:', error);
    throw new Error('Error interno del servidor');
  }
}

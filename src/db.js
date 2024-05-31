import conn from './conn.js'

export async function getAllPosts() {
    const [rows] = await conn.query('SELECT * FROM posts')
    return rows
}

export async function getPostById(id) {
    const [rows] = await conn.query('SELECT * FROM posts WHERE id = ?', [id])
    return rows[0]
}

export async function createPost(nombre, posicion, posicion2, numero, equipo, descripcion, supertecnica) {
    const [result] = await conn.query(
        'INSERT INTO posts (nombre, posicion, posicion2, numero, equipo, descripcion, supertecnica) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [nombre, posicion, posicion2, numero, equipo, descripcion, supertecnica], );
    return result.insertId
}

export async function updatePostById(id, nombre, posicion, posicion2, numero, equipo, descripcion, supertecnica) {
    const [result] = await conn.query(
        'UPDATE posts SET nombre = ?, posicion = ?, posicion2 = ?, numero = ?, equipo = ?, descripcion = ?, supertecnica = ? WHERE id = ?',
        [nombre, posicion, posicion2, numero, equipo, descripcion, supertecnica, id], );
    return result.affectedRows
}

export async function deletePostById(id) {
    const [result] = await conn.query('DELETE FROM posts WHERE id = ?', [id])
    return result.affectedRows
}



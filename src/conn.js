import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'nelson',
    database: 'blog_nelson',
    password: 'admin',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default pool
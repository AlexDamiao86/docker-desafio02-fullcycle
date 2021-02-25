
async function connect() {
  const mysql = require("mysql2/promise");
  const config = { 
    host: 'db', 
    user: 'root', 
    password: 'root', 
    database: 'nodedb'
  }
  if(global.connection && global.connection.state !== 'disconnected')
      return global.connection;

  const connection = await mysql.createConnection(config);
  console.log("Conectou no MySQL!");
  global.connection = connection;
  return connection;
}

async function insertPerson(person){
  const conn = await connect();
  const sql = 'INSERT INTO people(name) VALUES (?);';
  const values = [person.name];
  return await conn.query(sql, values);
}

async function selectPeople(){
  const conn = await connect();
  const [rows] = await conn.query('SELECT * FROM people;');
  return rows;
}

module.exports = { selectPeople, insertPerson }
const express = require('express');
const db = require("./db");
const app = express();
const port = 3000;

app.get('/', async (req, res) => { 
  await db.insertPerson({name: "Alexandre"});
  const people = await db.selectPeople();
  res.send(
    `<h1>Full Cycle Rocks!</h1>  
    <ul>
    ${people.map(person => { return `<li>${person.name}</li>`;}).join('')}
    </ul>`
  );
})

app.listen(port, () => {
  console.log('Listening on port ' + port)
})
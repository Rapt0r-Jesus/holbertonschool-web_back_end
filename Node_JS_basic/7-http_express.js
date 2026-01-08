const express = require('express');
const fs = require('fs');

const app = express();
const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  fs.readFile(database, 'utf8', (err, data) => {
    if (err) {
      res.end('Cannot load the database');
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    res.write(`Number of students: ${students.length}\n`);

    const fields = {};

    students.forEach((line) => {
      const parts = line.split(',');
      const firstname = parts[0];
      const field = parts[3];

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
    });

    for (const field in fields) {
      res.write(
        `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`
      );
    }

    res.end();
  });
});

app.listen(1245);

module.exports = app;

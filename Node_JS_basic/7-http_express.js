const express = require('express');
const fs = require('fs');

const app = express();

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    const output = [];
    output.push(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    for (const [field, names] of Object.entries(fields)) {
      output.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

    resolve(output.join('\n'));
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = process.argv[2];

  countStudents(database)
    .then((studentData) => {
      res.set('Content-Type', 'text/plain');
      res.send(`This is the list of our students\n${studentData}`);
    })
    .catch(() => {
      res.set('Content-Type', 'text/plain');
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(1245);

module.exports = app;

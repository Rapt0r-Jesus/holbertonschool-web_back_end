import fs from 'fs';

/**
 * Reads the database file and returns students organized by field
 * @param {string} filePath - Path to the database CSV file
 * @returns {Promise<Object>} - Object with arrays of firstnames per field
 */
const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n');
    const students = {};

    // Skip the header line
    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i].trim();
      if (line) {
        const [firstname, , , field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      }
    }

    resolve(students);
  });
});

export default readDatabase;

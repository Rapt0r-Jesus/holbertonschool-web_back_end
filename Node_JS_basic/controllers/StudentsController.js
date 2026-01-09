import readDatabase from '../utils';

/**
 * StudentsController class
 */
class StudentsController {
  /**
   * Get all students organized by field
   * @param {Object} request - Express request object
   * @param {Object} response - Express response object
   */
  static getAllStudents(request, response) {
    const databasePath = process.argv[2];

    readDatabase(databasePath)
      .then((students) => {
        let output = 'This is the list of our students\n';
        
        // Sort fields alphabetically (case insensitive)
        const sortedFields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        
        sortedFields.forEach((field, index) => {
          const studentList = students[field].join(', ');
          output += `Number of students in ${field}: ${students[field].length}. List: ${studentList}`;
          if (index < sortedFields.length - 1) {
            output += '\n';
          }
        });

        response.status(200).send(output);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  /**
   * Get all students by major (CS or SWE)
   * @param {Object} request - Express request object
   * @param {Object} response - Express response object
   */
  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const databasePath = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databasePath)
      .then((students) => {
        const studentList = students[major] || [];
        response.status(200).send(`List: ${studentList.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;

export default function updateStudentGradeByCity(students, city, newGrade) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const updatedStudent = { ...student };
      const gradeEntry = newGrade.find((entry) => entry.studentId === student.id);
      updatedStudent.grade = gradeEntry ? gradeEntry.grade : 'N/A';
      return updatedStudent;
    });
}

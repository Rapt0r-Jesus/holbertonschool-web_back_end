import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = express.Router();

// Link route / to AppController
router.get('/', AppController.getHomepage);

// Link route /students to StudentsController
router.get('/students', StudentsController.getAllStudents);

// Link route /students/:major to StudentsController
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;

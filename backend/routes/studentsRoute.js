import express from 'express';
import { Student } from '../models/studentModel.js';

const router = express.Router();

// Route for Save a new Student
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.email ||
      !request.body.password
    ) {
      return response.status(400).send({
        message: 'Send all required fields: name, email, password',
      });
    }
    const newStudent = {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
    };

    const student = await Student.create(newStudent);

    return response.status(201).send(student);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Students from database
router.get('/', async (request, response) => {
  try {
    const students = await Student.find({});

    return response.status(200).json({
      count: students.length,
      data: students,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Student from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const student = await Student.findById(id);

    return response.status(200).json(student);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Student
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.email ||
      !request.body.password
    ) {
      return response.status(400).send({
        message: 'Send all required fields: name, email, password',
      });
    }

    const { id } = request.params;

    const result = await Student.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Student not found' });
    }

    return response.status(200).send({ message: 'Student updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a Student
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Student.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Student not found' });
    }

    return response.status(200).send({ message: 'Student deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;

import express from 'express';
import { Teacher } from '../models/teacherModel.js';

const router = express.Router();

// Route for Save a new Book
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
    const newTeacherr = {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
    };

    const teaccher = await Teacher.create(newTeacherr);

    return response.status(201).send(teaccher);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Teachers from database
router.get('/', async (request, response) => {
  try {
    const teachers = await Teacher.find({});

    return response.status(200).json({
      count: teachers.length,
      data: teachers,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Teacher from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const teacher = await Teacher.findById(id);

    return response.status(200).json(teacher);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Teacher
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

    const result = await Teacher.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Teacher not found' });
    }

    return response.status(200).send({ message: 'Teacher updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a Teacher
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Teacher.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Teacher not found' });
    }

    return response.status(200).send({ message: 'Teacher deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;

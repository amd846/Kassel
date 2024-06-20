import express from 'express';
import { Course } from '../models/courseModel.js';

const router = express.Router();

// Route for Save a new Course
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.description ||
      !request.body.startDate ||
      !request.body.endDate 
    ) {
      return response.status(400).send({
        message: 'Send all required fields: name, email, password',
      });
    }
    const newCourse = {
      name: request.body.name,
      description: request.body.description,
      startDate: request.body.startDate,
      endDate: request.body.endDate
      
    };

    const course = await Course.create(newCourse);

    return response.status(201).send(course);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Courses from database
router.get('/', async (request, response) => {
  try {
    const courses = await Course.find({});

    return response.status(200).json({
      count: courses.length,
      data: courses,
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

    const course = await Course.findById(id);

    return response.status(200).json(course);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

 
// Route for Update a Course
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.description ||
      !request.body.startDate ||
      !request.body.endDate 
    ) {
      return response.status(400).send({
        message: 'Send all required fields: name, description, startDate,and endDate',
      });
    }

    const { id } = request.params;

    const result = await Course.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Course not found' });
    }

    return response.status(200).send({ message: 'Course updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a Course
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Course.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Course not found' });
    }

    return response.status(200).send({ message: 'Course deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;

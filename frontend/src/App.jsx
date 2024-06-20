import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';


import HomeTeacher   from './pages/Teacher/HomeTeacher';
import CreateTeacher from './pages/Teacher/CreateTeacher';


import HomeCourse   from './pages/Course/HomeCourse';
import CreateCourse   from './pages/Course/CreateCourse';
import EditCourse   from './pages/Course/EditCourse';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      <Route path='/Teachers/create' element={<CreateTeacher />} /> 
      <Route path='/Teachers/' element={<HomeTeacher />} /> 

      <Route path='/Courses/' element={<HomeCourse />} /> 
      <Route path='/Courses/create' element={<CreateCourse />} /> 
      <Route path='/courses/edit/:id' element={<EditCourse />} />
     
     
    </Routes>
  );
};

export default App;

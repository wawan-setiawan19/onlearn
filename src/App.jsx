import React from 'react';
import { Route, Routes } from "react-router-dom"
import LandingPage from './pages/landingPage';
import Login from './pages/login';
import Navigasi from './components/navigasi';
import './index.scss'
import AddCourse from './pages/course/add';
import DashboardCourse from './pages/course/dashboard';
import EditCourse from './pages/course/edit';
import DashboardLulus from './pages/kelulusan/dashboard';
import AddLulus from './pages/kelulusan/add';
import EditLulus from './pages/kelulusan/edit';

function App() {
  return (
    <>
      <Navigasi/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/courses/' element={<DashboardCourse/>} />
        <Route path='/courses/add' element={<AddCourse/>} />
        <Route path='/courses/edit/:id' element={<EditCourse/>} />
        <Route path='/kelulusan/' element={<DashboardLulus/>} />
        <Route path='/kelulusan/add' element={<AddLulus/>} />
        <Route path='/kelulusan/edit/:id' element={<EditLulus/>} />
      </Routes>
    </>
  );
}

export default App;

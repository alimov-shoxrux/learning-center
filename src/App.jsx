import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Courses from './pages/Courses/Courses'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Careers from './pages/Careers/Careers'

function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/courses'} element={<Courses />} />
        <Route path={'/careers'} element={<Careers />} />
        <Route path={'/blog'} element={<Blog />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App

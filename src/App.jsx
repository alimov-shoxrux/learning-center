import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Courses from './pages/Courses/Courses'
import Home from './pages/Home/Home'
import Blog from './pages/Blogs/Blogs'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Careers from './pages/Careers/Careers'
import Search from './pages/Search/Search'
import Library from './pages/Library/Library'
import Check from './pages/Check/Check'
import Blogs from './pages/Blogs/Blogs'
import BlogsDetail from './pages/BlogsDetail/BlogsDetail'
import Footer from './components/Footer/Footer'

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
        <Route path={'/search'} element={<Search />} />
        <Route path={'/library'} element={<Library />} />
        <Route path={'/check'} element={<Check />} />
        <Route path={'/blogs'} element={<Blogs/>}/>
        <Route path={'/blogs-detail'} element={<BlogsDetail/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

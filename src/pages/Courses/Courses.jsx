import React from 'react'
import Cource from '../../components/Course/Course'
import Category from '../../components/Category/Category'
import CoursePrice from '../../components/CoursePrice/CoursePrice'

function Courses() {
  return (
    <div>
      <Cource/>
      <Category/>
      <CoursePrice/>
    </div>
  )
}

export default Courses
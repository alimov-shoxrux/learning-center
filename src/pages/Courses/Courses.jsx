import React from 'react'
import Cource from '../../components/Course/Course'
import Category from '../../components/Category/Category'
import CoursePrice from '../../components/CoursePrice/CoursePrice'
import Online from '../../components/Online/Online'
import Choise from '../../components/Choise/Choise'

function Courses() {
  return (
    <div>
      <Cource/>
      <Category/>
      <CoursePrice/>
      <Choise/>
      <Online/>
    </div>
  )
}

export default Courses
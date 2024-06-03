import React from 'react'
import CourseDetailcom from '../../components/CourseDetailcom/CourseDetailcom'
import Raiting from '../../components/Raiting/Raiting'
import Recom from '../../components/Recom/Recom'
import Class from '../../components/Class/Class'
import Instruct from '../../components/Instruct/Instruct'

function CourseDetail() {
  return (
    <div>
        <CourseDetailcom/>
        <Raiting/>
        <Recom/>
        <Class/>
        <Instruct/>

    </div>
  )
}

export default CourseDetail
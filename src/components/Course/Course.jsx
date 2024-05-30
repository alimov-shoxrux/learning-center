import React from 'react'
import { Link } from 'react-router-dom'
import './Course.css'
import imgone from '../../assets/img/course-imgone.svg'
import smallone from '../../assets/img/course-smallone.svg'
import imgtwo from '../../assets/img/course-imgtwo.svg'
import imgfour from '../../assets/img/course-imgfour.svg'
function Course() {
  return (
    <div className='Course'>
      <div className="container">
        <div className="course__container">
          <h1>Welcome back, ready for your next lesson?</h1>
          <Link>
            View hisotry
          </Link>
        </div>

        <div className="course__architect">
          {/* 1 */}
          <Link to={'/courses-detail'} className="acrchitect__div">
            <img className='imgone' src={imgone} alt="imgone" />
            <h5>AWS Certified Solutions Architect</h5>

            <div className="architect__accaunt">
              <img src={smallone} alt="" />
              <h6>Lina</h6>
            </div>

            <div className="architect__active">
            </div>
            <p className='architect__text'>Lesson 5 of 7</p>
          </Link>
          {/* 2 */}
          <Link to={'/courses-detail'} className="acrchitect__div">
            <img className='imgone' src={imgtwo} alt="imgone" />
            <h5>AWS Certified Solutions Architect</h5>

            <div className="architect__accaunt">
              <img src={smallone} alt="" />
              <h6>Lina</h6>
            </div>

            <div className="architect__active">
            </div>
            <p className='architect__text'>Lesson 5 of 7</p>
          </Link>
          {/* 3 */}
          <Link to={'/courses-detail'} className="acrchitect__div">
            <img className='imgone' src={imgfour} alt="imgone" />
            <h5>AWS Certified Solutions Architect</h5>

            <div className="architect__accaunt">
              <img src={smallone} alt="" />
              <h6>Lina</h6>
            </div>

            <div className="architect__active">
            </div>
            <p className='architect__text'>Lesson 5 of 7</p>
          </Link>
        </div>

        <div className="course__pagination">
          <button><i class="bi bi-arrow-left"></i></button>
          <button> <i class="bi bi-arrow-right"></i> </button>
        </div>
      </div>
    </div>
  )
}

export default Course
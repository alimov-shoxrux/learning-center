import React from 'react'
import './Blog__related.css'
import blog__teacher from '../../assets/img/blog__teacher.svg'
import blog__related_ava from '../../assets/img/blog__related_ava.svg'
import { Link } from 'react-router-dom'
function Blog__related() {
  return (
    <div className='blog__related'>
        <div className="container"> 
            <div className='title__related'>
                <h1>Related Blog </h1>
                <Link to='/blogs-detail'>see all</Link>
            </div>
            <div className="related">
                <Link  to='/blogs-detail' className='related__item'>
                <img className='related__img' src={blog__teacher} alt="" />
                <p className='related__text'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
                <div className='related__flex'>
                    <img src={blog__related_ava} alt="" />
                    <h6>Lina</h6>
                </div>

                <p className='related__desc'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>

                <div className="related__more">
                    <h6>Read more</h6>
                    <p>251,232</p>
                </div>
                </Link>
                <Link  to='/blogs-detail' className='related__item'>
                <img className='related__img' src={blog__teacher} alt="" />
                <p className='related__text'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
                <div className='related__flex'>
                    <img src={blog__related_ava} alt="" />
                    <h6>Lina</h6>
                </div>

                <p className='related__desc'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>

                <div className="related__more">
                    <h6>Read more</h6>
                    <p>251,232</p>
                </div>
                </Link>
            </div>
            <div className="related__pagination">
                <button></button>
                <button></button>
            </div>
        </div>
    </div>
  )
}

export default Blog__related

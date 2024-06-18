import React from 'react'
import './Blog__header.css'
import blog__header from '../../assets/img/blog__header.svg'
function Blog__header() {
    return (
        <div className='blog'>
            <div className="container">
                <div className="blog__header">
                    <div className="blog__header_left">
                        By Themadbrains in <span className='span'>inspiration</span>
                        <h1 className='blog__header_title'>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <button>Start learning now</button>
                    </div>
                    <div className="blog__header_right">
                        <img src={blog__header} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog__header

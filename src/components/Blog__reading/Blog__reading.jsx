import React from 'react'
import './Blog__reading.css'
import blog__ux from '../../assets/img/blog__ux.svg'
import blog__react from '../../assets/img/blog__react.svg'
import blog__php from '../../assets/img/blog__php.svg'
import blog__java from '../../assets/img/blog__java.svg'
import { Link } from 'react-router-dom'
function Blog__reading() {
    return (
        <div className="container">
            <div className="padd">
                <div className='blog__reading'>
                    <h1  >Reading blog list</h1>
                    <Link to='/blogs-detail'>see all</Link>
                </div>
                <div className="blog__reading_info">
                    <div className="ux"><img src={blog__ux} alt="" /><button className='btn_ux'>UX/UL</button></div>
                    <div className="ux"><img src={blog__react} alt="" /><button className='btn_ux'>React</button></div>
                    <div className="ux"> <img src={blog__php} alt="" /><button className='btn_ux'>PHP</button></div>
                    <div className="ux"> <img src={blog__java} alt="" /><button className='btn_ux'>JavaScript</button></div>
                </div>
            </div>
        </div>
    )
}

export default Blog__reading

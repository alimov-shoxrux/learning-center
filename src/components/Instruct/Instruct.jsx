import React from 'react'
import { Link } from 'react-router-dom'
import './Instruct.css'
import instruct from  '../../assets/img/instruct-img.svg'

function Instruct() {
    return (
        <div className='Instruct'>
            <div className="container">
                <div className="instruct__titles">
                    <h3>Top  Education offers and deals are listed here</h3>
                    <Link>
                        See All
                    </Link>
                </div>


                <div className="instruct__container">
                    <img src={instruct} alt="instruct" />
                    <img src={instruct} alt="instruct" />
                    <img src={instruct} alt="instruct" />
                </div>
            </div>

        </div>
    )
}

export default Instruct
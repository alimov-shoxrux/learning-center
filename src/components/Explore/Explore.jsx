import React from 'react'
import './Explore.css'
import exploreimg from '../../assets/img/exploreimg.svg'
import { Link } from 'react-router-dom'
import exploreimagetwo from '../../assets/img/explore-imagetwo.png'
import exploreimagethree from '../../assets/img/explore-image-three.png'

function Explore() {
    return (
        <div className='Explore'>
            <div className="container">

                {/* 1 */}

                <h1 className='explore__title'>Explore Course</h1>
                <p className='explore__text'>Ut sed eros finibus, placerat orci id, dapibus.</p>
                <img className='explore__imageone' src={exploreimg} alt="exploreimg" />

                {/* 2 */}

                <div className="explore__images">
                    <div className="explore__flex">
                        <h4 >Quisque a Consequat</h4>
                        <Link>
                            SEE ALL
                        </Link>
                    </div>
                    <img className='explore__image__two' src={exploreimagetwo} alt="exploreimagetwo" />
                </div>

                {/* 3 */}

                <div className="explore__images">
                    <div className="explore__flex">
                        <h4 >Quisque a Consequat</h4>
                        <Link>
                            SEE ALL
                        </Link>
                    </div>
                    <img className='explore__image__two' src={exploreimagethree} alt="exploreimagetwo" />
                </div>

            </div>
        </div>
    )
}

export default Explore
import React from 'react'
import { Link } from 'react-router-dom'
import './CoursePrice.css'
import recomimg from '../../assets/img/recom-img.svg'
import recomkubik from '../../assets/img/recom-kubik.png'
import recomclock from '../../assets/img/recom-clock.png'
import recomavatar from '../../assets/img/recom-avatar.png'
function CoursePrice() {
    return (
        <div className='CoursePrice'>
            <div className="container">
                <div className='recom__div'>
                    <h1>Recommended for you</h1>
                    <Link>
                        See all
                    </Link>
                </div>

                <div className="recom__flex">

                    {/* 1 */}

                    <div className="recom__item">
                        <img className='recom__img' src={recomimg} alt="" />

                        <div className="recom__item__div">
                            <div className="recom__item__divimg">
                                <img src={recomkubik} alt="" />
                                <p>Design</p>
                            </div>

                            <div className="recom__item__divimg">
                                <img src={recomclock} alt="" />
                                <p>3 Month</p>
                            </div>
                        </div>

                        <h3 className='recom__item__title'>AWS Certified solutions Architect</h3>
                        <p className='recom__item__text'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="recom__item__down">
                            <div className="recom__item__title">
                                <img src={recomavatar} alt="" />
                                <p>Lina</p>
                            </div>

                            <div className="recom__item__price">
                                <p className='recom__item__hundred'>$100</p>
                                <p className='recom__item__eighty'>$80</p>
                            </div>
                        </div>
                    </div>


                    {/* 1 */}

                    <div className="recom__item">
                        <img className='recom__img' src={recomimg} alt="" />

                        <div className="recom__item__div">
                            <div className="recom__item__divimg">
                                <img src={recomkubik} alt="" />
                                <p>Design</p>
                            </div>

                            <div className="recom__item__divimg">
                                <img src={recomclock} alt="" />
                                <p>3 Month</p>
                            </div>
                        </div>

                        <h3 className='recom__item__title'>AWS Certified solutions Architect</h3>
                        <p className='recom__item__text'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="recom__item__down">
                            <div className="recom__item__title">
                                <img src={recomavatar} alt="" />
                                <p>Lina</p>
                            </div>

                            <div className="recom__item__price">
                                <p className='recom__item__hundred'>$100</p>
                                <p className='recom__item__eighty'>$80</p>
                            </div>
                        </div>
                    </div>


                    {/* 1 */}

                    <div className="recom__item">
                        <img className='recom__img' src={recomimg} alt="" />

                        <div className="recom__item__div">
                            <div className="recom__item__divimg">
                                <img src={recomkubik} alt="" />
                                <p>Design</p>
                            </div>

                            <div className="recom__item__divimg">
                                <img src={recomclock} alt="" />
                                <p>3 Month</p>
                            </div>
                        </div>

                        <h3 className='recom__item__title'>AWS Certified solutions Architect</h3>
                        <p className='recom__item__text'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="recom__item__down">
                            <div className="recom__item__title">
                                <img src={recomavatar} alt="" />
                                <p>Lina</p>
                            </div>

                            <div className="recom__item__price">
                                <p className='recom__item__hundred'>$100</p>
                                <p className='recom__item__eighty'>$80</p>
                            </div>
                        </div>
                    </div>


                    {/* 1 */}

                    <div className="recom__item">
                        <img className='recom__img' src={recomimg} alt="" />

                        <div className="recom__item__div">
                            <div className="recom__item__divimg">
                                <img src={recomkubik} alt="" />
                                <p>Design</p>
                            </div>

                            <div className="recom__item__divimg">
                                <img src={recomclock} alt="" />
                                <p>3 Month</p>
                            </div>
                        </div>

                        <h3 className='recom__item__title'>AWS Certified solutions Architect</h3>
                        <p className='recom__item__text'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        <div className="recom__item__down">
                            <div className="recom__item__title">
                                <img src={recomavatar} alt="" />
                                <p>Lina</p>
                            </div>

                            <div className="recom__item__price">
                                <p className='recom__item__hundred'>$100</p>
                                <p className='recom__item__eighty'>$80</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="course__pagination">
                    <button><i class="bi bi-arrow-left"></i></button>
                    <button> <i class="bi bi-arrow-right"></i> </button>
                </div>
            </div>

        </div>
    )
}

export default CoursePrice
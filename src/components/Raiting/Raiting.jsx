import React from 'react'
import './Raiting.css'
import raitingstar from '../../assets/img/raiting-star.png'
import raitingavatar from '../../assets/img/header-avatar.svg'
import priceimg from '../../assets/img/price-img.svg'
import raitingmoney from '../../assets/img/raiting-money.png'
import raitingphoto from '../../assets/img/raiting-photo.png'
import raitingdocument from '../../assets/img/raiting-document.png'
import raitingtrade from '../../assets/img/raiting-trade.png'
import raitingtwitter from '../../assets/img/raiting-twitter.png'
import raitingfacebook from '../../assets/img/raiting-facebook.png'
import raitinginstagram from '../../assets/img/raiting-instagram.png'
import raitingtelegram from '../../assets/img/raiting-telegram.png'
import raitingwhatsup from '../../assets/img/raiting-whatsup.svg'



function Raiting() {
    return (
        <div className='Raiting'>
            <div className="container">
                <div className="raiting__container">
                    <div className="raiting__left">
                        <div className="raiting__navigate">
                            <button>Overview</button>
                            <button>Overview</button>
                            <button>Overview</button>
                            <button>Overview</button>
                        </div>

                        <div className="raiting__left__div">
                            <div className='raiting__item__flex'>
                                <div className="raiting__white__div">
                                    <h5>4 out of 5</h5>
                                    <img src={raitingstar} alt="" />
                                    <p>Top raiting</p>
                                </div>

                                <div className="raiting__right__div">
                                    <div className='rrd__right'>
                                        <div className="rrd__flex">
                                            <p>4 Starts</p>
                                            <div className='rrd__active'></div>
                                        </div>
                                        <div className='rrd__flex'>
                                            <p>3 Stars</p>
                                            <div className='rrd__active'></div>
                                        </div>
                                        <div className='rrd__flex'>
                                            <p>2 Stars</p>
                                            <div className='rrd__active'></div>
                                        </div>
                                        <div className='rrd__flex'>
                                            <p>1 Stars</p>
                                            <div className='rrd__active'></div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="raiting__img">
                                <img src={raitingavatar} alt="" />
                                <div>
                                    <p>Lina</p>
                                    <img src={raitingstar} alt="" />
                                </div>
                            </div>

                            <p className='rating__item__text'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                            <div className='rating__item__span'></div>

                            <div className="raiting__img">
                                <img src={raitingavatar} alt="" />
                                <div>
                                    <p>Lina</p>
                                </div>
                            </div>

                            <p className='rating__item__text'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        </div>

                    </div>

                    <div className="raiting__right">
                        <img className='priceimg' src={priceimg} alt="" />

                        <div className="raiting__price">
                            <h5>$49.65</h5>
                            <p className='raiting__price__ninety'> $99.99</p>
                            <p className='raiting__price__fifty'>50% Off</p>
                        </div>

                        <p className='raiting__hour'>11 hour left at this price</p>
                        <button className='raiting__buy__btn'>Buy Now</button>
                        <div className='raiting__div__span'></div>

                        <h4 className='raiting__right__title'>This Course included</h4>

                        <div className="raiting__right_div">
                            <img src={raitingmoney} alt="" />
                            <p>Money Back Guarantee</p>
                        </div>
                        <div className="raiting__right_div">
                            <img src={raitingphoto} alt="" />
                            <p>Access on all devices</p>
                        </div>
                        <div className="raiting__right_div">
                            <img src={raitingdocument} alt="" />
                            <p>Certification of completion</p>
                        </div>
                        <div className="raiting__right_div">
                            <img src={raitingtrade} alt="" />
                            <p>32 Moduls</p>
                        </div>

                        <div className='raiting__div__span'></div>

                        <h5 className='raiting__training'>Training 5 or more people</h5>
                        <p className='raiting__training__text'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>

                        <div className='raiting__div__span'></div>

                        <h5 className='raiting__training'>Share this course</h5>

                        {/* imgs */}
                        <div className="raiting__imgs">
                            <img src={raitingtwitter} alt="" />
                            <img src={raitingfacebook} alt="" />
                            <img src={raitinginstagram} alt="" />
                            <img src={raitingtelegram} alt="" />
                            <img src={raitingwhatsup} alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Raiting
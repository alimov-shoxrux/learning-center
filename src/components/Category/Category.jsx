import React from 'react'
import './Category.css'
import categoryone from '../../assets/img/category-one.png'
import categorytwo from '../../assets/img/category-two.png'
import categorythree from '../../assets/img/category-three.png'
import categoryfour from '../../assets/img/category-four.png'
import categoryfive from '../../assets/img/category-five.png'
import categorysix from '../../assets/img/category-six.png'
import categoryseven from '../../assets/img/category-seven.png'
import categoryeight from '../../assets/img/category-eight.png'

function Category() {
    return (
        <div className='Category'>
            <div className="container">
                <h1 className='course__category__title'>Choice favourite course from top category</h1>
                <div className="course__category__div">
                    <div className="course__category__item">
                        <div className='category__item categoryone'>
                        <img src={categoryone} alt="" />
                        </div>
                        <h4>Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                    </div>

                    <div className="course__category__item">
                        <div className='category__item categorytwo'>
                        <img src={categorytwo} alt="" />
                        </div>
                        <h4>Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                    </div>

                    <div className="course__category__item">
                        <div className='category__item categorythree'>
                        <img src={categorythree} alt="" />
                        </div>
                        <h4>Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                    </div>

                    <div className="course__category__item">
                        <div className='category__item categoryfour'>
                        <img src={categoryfour} alt="" />
                        </div>
                        <h4>Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                    </div>

                    <div className="course__category__item">
                        <div className='category__item categoryfive'>
                        <img src={categoryfive} alt="" />
                        </div>
                        <h4>Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                    </div>

                    <div className="course__category__item">
                        <div className='category__item categorysix'>
                        <img src={categorysix} alt="" />
                        </div>
                        <h4>Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                    </div>

                    <div className="course__category__item">
                        <div className='category__item categoryseven'>
                        <img src={categoryseven} alt="" />
                        </div>
                        <h4>Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                    </div>

                    <div className="course__category__item">
                        <div className='category__item categoryeight'>
                        <img src={categoryeight} alt="" />
                        </div>
                        <h4>Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
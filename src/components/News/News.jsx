import React from 'react'
import './News.css'
import cursor from '../../assets/img/newscursor.png'
import newsimg from '../../assets/img/news-img.svg'
import newsstar from '../../assets/img/news-star.png'

function News() {
  return (
    <div className='News'>
      <div className="container news__container">
        <div className="news__left">
          <p className='news__text'><span></span>TESTIMONIAL</p>
          <h1 className='news__title'>
            What They Say?
          </h1>
          <p className='news__texts'>TOTC has got more than 100k positive ratings from our users around the world. </p>
          <p className='news__texts'>Some of the students and teachers were greatly helped by the Skilline.</p>
          <p className='news__texts text__bottom'>Are you too? Please give your assessment</p>

          <div className="news__div">
            <h4>Write your assessment</h4>
            <button>
              <img src={cursor} alt="" />
            </button>
          </div>
        </div>

        <div className="news__right">
          <img className='news__right__img' src={newsimg} alt="newsimg" />

          <div className="newsright__div">
            <p className='newsright__text'>"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."</p>
            <img className='news__star' src={newsstar} alt="newsstar" />
            <div className="newsright__flex">
              <h5>Gloria Rose</h5>
              <p>12 reviews at Yelp</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default News
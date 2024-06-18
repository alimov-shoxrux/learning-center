import React from 'react'
import './Blog__marketing.css'
import { Link } from 'react-router-dom'
import recomimg from '../../assets/img/recom-img.svg'
import recomkubik from '../../assets/img/recom-kubik.png'
import recomclock from '../../assets/img/recom-clock.png'
import recomavatar from '../../assets/img/recom-avatar.png'
import recomcomputer from '../../assets/img/recom-computer.svg'
function Blog__marketing() {
  return (
    <div className='marketing'>
       <div className="container">
        <div className="marketing__title">
          <h1>Marketing Articles</h1>
          <a href="#">see all</a>
        </div>
      <div className="recom__flex">

        {/* 1 */}


        <Link to={'/courses-detail'} className="recom__item">
          <img className='recom__img' src={recomimg} alt="" />

          <div className="recom__item__div">
            <div className="recom__item__diving">
              <img src={recomkubik} alt="" />
              <p>Design</p>
            </div>

            <div className="recom__item__diving">
              <img src={recomclock} alt="" />
              <p>3 Month</p>
            </div>
          </div>

          <h5 className='recom__item__title'>AWS Certified solutions Architect</h5>
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
        </Link>


        {/* 2 */}

        <Link to={'/courses-detail'} className="recom__item">
          <img className='recom__img' src={recomcomputer} alt="" />

          <div className="recom__item__div">
            <div className="recom__item__diving">
              <img src={recomkubik} alt="" />
              <p>Design</p>
            </div>

            <div className="recom__item__diving">
              <img src={recomclock} alt="" />
              <p>3 Month</p>
            </div>
          </div>

          <h5 className='recom__item__title'>AWS Certified solutions Architect</h5>
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
        </Link>


        {/* 3 */}

        <Link to={'/courses-detail'} className="recom__item">
          <img className='recom__img' src={recomimg} alt="" />

          <div className="recom__item__div">
            <div className="recom__item__diving">
              <img src={recomkubik} alt="" />
              <p>Design</p>
            </div>

            <div className="recom__item__diving">
              <img src={recomclock} alt="" />
              <p>3 Month</p>
            </div>
          </div>

          <h5 className='recom__item__title'>AWS Certified solutions Architect</h5>
          <p className='recom__item__text'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
          <div className="recom__item__down">
            <div className="recom__item__title">
              <img src={recomavatar} alt="" />
              <p>Lina</p>
            </div>

            <div className="recom__item__price">
              <p className='recom__item__hundred'>$85</p>
              <p className='recom__item__eighty'>$80</p>
            </div>
          </div>
        </Link>


        {/* 4 */}

        <Link to={'/courses-detail'} className="recom__item">
          <img className='recom__img' src={recomcomputer} alt="" />

          <div className="recom__item__div">
            <div className="recom__item__diving">
              <img src={recomkubik} alt="" />
              <p>Design</p>
            </div>

            <div className="recom__item__diving">
              <img src={recomclock} alt="" />
              <p>3 Month</p>
            </div>
          </div>

          <h5 className='recom__item__title'>AWS Certified solutions Architect</h5>
          <p className='recom__item__text'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
          <div className="recom__item__down">
            <div className="recom__item__title">
              <img src={recomavatar} alt="" />
              <p>Lina</p>
            </div>

            <div className="recom__item__price">
              <p className='recom__item__hundred'>$99</p>
              <p className='recom__item__eighty'>$80</p>
            </div>
          </div>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Blog__marketing

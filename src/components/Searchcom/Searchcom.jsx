import React from 'react'
import './Searchcom.css'
import lissa from './img/lina.png'
import { subjects } from './Data/subjects'

function Searchcom({ item }) {
  return (
    <div className="search_page_1">
      <div className="search_content container">
        <div className="search-box">
          <div className="search-div df">
            <input className='search-div-inp' type="text" placeholder='Search your favourite course' />
            <button className='search-div-btn'>Search</button>
          </div>
          <div className="select-div df">
            <ul className="select-menu df">
              <li className="select-item">
                <select className="form-select sel1" aria-label="Default select example">
                  <option hidden >Subject</option>
                  <option value="1">Math</option>
                  <option value="2">Informatics</option>
                  <option value="3">Chemistry</option>
                </select>
              </li>
              <li className="select-item">
                <select className="form-select sel1" aria-label="Default select example">
                  <option hidden >Partner</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </li>
              <li className="select-item">
                <select className="form-select sel1" aria-label="Default select example">
                  <option hidden >Program</option>
                  <option value="1">SMM</option>
                  <option value="2">Design</option>
                  <option value="3">Web</option>
                </select>
              </li>
              <li className="select-item">
                <select className="form-select sel1" aria-label="Default select example">
                  <option hidden>Language</option>
                  <option value="1">English</option>
                  <option value="2">Russion</option>
                  <option value="3">Uzbek</option>
                </select>
              </li>
              <li className="select-item">
                <select className="form-select sel1" aria-label="Default select example">
                  <option hidden >Abaliability</option>
                  <option value="1">easy</option>
                  <option value="2">normal</option>
                  <option value="3">hard</option>
                </select>
              </li>
              <li className="select-item">
                <select className="form-select sel1" aria-label="Default select example">
                  <option hidden >Learning Type</option>
                  <option value="1">Online</option>
                  <option value="2">Inline</option>
                  <option value="3">Alone</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
        <div className="search-card">
          <ul className="search__list">
            <li className="search__item">
              {
                subjects.map((item) => (
                  <div className="search__card">
                    <img className='search_card_img' src={item.img} alt="" />
                    <span className='df span-1'>
                      <h3 className='search_h3_1'><i class="bi bi-grid-fill"></i>  Design</h3>
                      <h3 className='search_h3_1'><i class="bi bi-stopwatch"></i> 3 Month</h3>
                    </span>
                    <h3 className='search_h3_2'>AWS Certified solutions <br /> Architect</h3>
                    <p className='search_p'>Lorem ipsum dolor sit amet,<br /> consectetur adipising elit, sed do <br /> eiusmod tempor</p>
                    <div className="card-lisa df">
                      <span className='df span-2'>
                        <img className='lisa' src={lissa} alt="" />
                        <h6 className='lisa-h6'>Lisa</h6>
                      </span>
                      <span className='df span-3'>
                        <h6 className='del_h6'>100$</h6>
                        <h6 className='span-3_h6'>80$</h6>
                      </span>
                    </div>

                  </div>
                ))
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Searchcom
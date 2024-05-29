import React from 'react'
import './Hero.css'
import heroimg from '../../assets/img/heroimg.svg'
import herovideo from '../../assets/img/herovdpng.png'
import herogirl from '../../assets/img/herogirl.svg'
import { useState } from 'react';
import { Button, Modal } from 'antd';


function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='Hero'>
      <div className="container hero__container">
        <div className="hero__left">
          <h1 className='hero__title'><span>Studying</span> Online is now much easier</h1>
          <p className='hero__text'>TOTC is an interesting platform that will teach you in more an interactive way</p>

          <div className="hero__down">
            <button className='hero__down__button' >Join for free</button>
            <button className='hero__modal' onClick={showModal}>
              <img src={herovideo} alt="heroplay" />
            </button>

            {/* modal */} 
            <div className="modal">
              <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/ENJ806X3tM0?si=G9Bj9VR7KlynQnrK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </Modal>
            </div>

            <p>Watch how it works</p>
          </div>
        </div>

        <div className="hero__right">
          <img className='hero__right__img' src={heroimg} alt="" />
        </div>

      </div>

    </div>
  )
}

export default Hero
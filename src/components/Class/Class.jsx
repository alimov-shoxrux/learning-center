import React from 'react'
import './Class.css'
import classroom from '../../assets/img/classroom.svg'
import radius from '../../assets/img/radius.svg'
import smallradius from '../../assets/img/smallradius.svg'
import kvadrat from '../../assets/img/kvadrat.svg'
import kvadratgreen from '../../assets/img/kvadratgreen.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Button, Modal } from 'antd';
import herovideo from '../../assets/img/herovdpng.png'
function Class() {

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
        <div className="Class">
            <div className='container class__container'>
                <div className="class__left">
                    <img className='radius' src={radius} alt="radius" />
                    <img className='smallradius' src={smallradius} alt="" />
                    <h2>Everything you can do in a physical classroom, <span>you can do with TOTC</span></h2>
                    <p>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                    <Link>Learn more</Link>
                </div>

                <div className="class__right">
                    <img className='kvadrat' src={kvadrat} alt="kvadrat" />
                    <img src={classroom} alt="classroom" />
                    <button className='modal__btn' onClick={showModal}>
                        <img src={herovideo} alt="heroplay" />
                    </button>

                    <img className='kvadratgreen' src={kvadratgreen} alt="kvadratgreen" />
                </div>

                {/* modal */}
                <div className="modal">
                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/ENJ806X3tM0?si=G9Bj9VR7KlynQnrK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Class
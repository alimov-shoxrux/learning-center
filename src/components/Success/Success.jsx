import React from 'react'
import './Success.css'
import document from '../../assets/img/document.svg'
import calendar from '../../assets/img/calendar.svg'
import people from '../../assets/img/people.svg'
import totcteacher from '../../assets/img/totcteacher.svg'
import totcstudent from '../../assets/img/totcstudent.svg'
import classroom from '../../assets/img/classroom.svg'
import radius from '../../assets/img/radius.svg'
import smallradius from '../../assets/img/smallradius.svg'
import kvadrat from '../../assets/img/kvadrat.svg'
import kvadratgreen from '../../assets/img/kvadratgreen.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Button, Modal } from 'antd';
import herovideo from '../../assets/img/herovdpng.png'
import featureimg from '../../assets/img/featurebg.svg'
import menu from '../../assets/img/menu.svg'
import collapse from '../../assets/img/collapse.svg'
import team from '../../assets/img/teamm.svg'
import greenkub from '../../assets/img/greenkub.svg'
import bluekub from '../../assets/img/bluekub.svg'
import purplekub from '../../assets/img/purplekub.svg'
import teacher from '../../assets/img/teacher.svg'
import italy from '../../assets/img/italy.svg'
import book from '../../assets/img/book.svg'
import privateimg from '../../assets/img/private.svg'
import exploreimg from '../../assets/img/exploreimg.svg'


function Success() {

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
        <div className="Success">
            <div className="container">
                <h1 className='success__title'>Our Success</h1>
                <p className='success__text'>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>

                <div className="success__div">
                    <div className="success__item">
                        <h1>15K+</h1>
                        <p>Students</p>
                    </div>

                    <div className="success__item">
                        <h1>75 %</h1>
                        <p>Total success</p>
                    </div>

                    <div className="success__item">
                        <h1>35</h1>
                        <p>Main questions</p>
                    </div>

                    <div className="success__item">
                        <h1>26</h1>
                        <p>Chief experts</p>
                    </div>

                    <div className="success__item">
                        <h1>16</h1>
                        <p>Years of experience</p>
                    </div>
                </div>

                {/* software */}
                <h1 className='software__title'>All-In-One <span>Cloud Software.</span></h1>
                <p className='software__text'>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>

                <div className="software__div">
                    <div className="software__item">
                        <img src={document} alt="document" />
                        <h2>Online Billing <br /> Invoicing, & Contracts</h2>
                        <p>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                    </div>

                    <div className="software__item">
                        <img src={calendar} alt="calendar" />
                        <h2>Easy Scheduling & <br /> Attendance Tracking</h2>
                        <p>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
                    </div>

                    <div className="software__item">
                        <img src={people} alt="people" />
                        <h2>Customer Tracking  <br /> Attendance Tracking</h2>
                        <p>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
                    </div>
                </div>

                {/* totc */}
                <div className="totc">
                    <h1 className='totc__title'>What is <span>TOTC?</span></h1>
                    <p className='totc__text'>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>

                    <div className="totc__div">
                        <div className="totc__left">
                            <img src={totcteacher} alt="totcteacher" />
                            <div className="totc__absolute__left">
                                <h3>FOR INSTRUCTORS</h3>
                                <button>Start a class today</button>
                            </div>
                        </div>

                        <div className="totc__right">
                            <img src={totcstudent} alt="totcstudent" />
                            <div className="totc__absolute__right">
                                <h3>FOR INSTRUCTORS</h3>
                                <button>Start a class today</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="class">
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

                {/* feature */}
                <div className="feature">
                    <h1 className='feature__title'>Our <span>Features</span></h1>
                    <p className='feature__text'>This very extraordinary feature, can make learning activities more efficient</p>

                    <div className="feature__div">
                        <div className="feature__left">
                            <img className='greenkub' src={greenkub} alt="" />
                            <img className='bluekub' src={bluekub} alt="" />
                            <img src={featureimg} alt="featureimg" />
                            <img className='purplekub' src={purplekub} alt="purplekub" />
                        </div>

                        <div className="feature__right">
                            <h1 className='feature__right__title'>A <span>user interface</span> designed <br /> for the classroom</h1>

                            <div className="feature__right__div">
                                <img src={menu} alt="menu" />
                                <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                            </div>
                            <div className="feature__right__div">
                                <img src={collapse} alt="collapse" />
                                <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                            </div>
                            <div className="feature__right__div">
                                <img src={team} alt="team" />
                                <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* teacher */}
                <div className="teacher">
                    <div className="teacher__left">
                        <h1 className='teacher__title'><span>Tools</span> For Teachers And Learners</h1>
                        <p className='teacher__text'>Class has a dynamic set of teachinhg tools built to be deployed and used during class.Teachers can handout assignments in real-time for students to complete and submit.</p>
                    </div>

                    <div className="teacher__right">
                        <img src={teacher} alt="teacher" />
                    </div>


                </div>
                {/* italy */}
                <div className="italy">
                    <img src={italy} alt="italy" />

                    <div className="italy__right">
                        <h1>Assessments, <br /> <span>Quizzes,</span> Tests</h1>
                        <p>Easily launch live assignments, quizzes, and tests. <br /> Student results are automatically entered in the <br /> online gradebook.</p>
                    </div>
                </div>
                {/* book */}
                <div className="book">
                    <div className="book__left">
                        <h1><span>Class Management</span> <br /> Tools for Educators    </h1>
                        <p>Class provides tools to help run and manage the class  such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and  quizzes in real-time.</p>
                    </div>
                    <img src={book} alt="book" />
                </div>

                {/* private */}
                <div className="private">
                    <img src={privateimg} alt="" />

                    <div className="private__right">
                        <h1>One-on-One <br /> <span>Discussions</span></h1>
                        <p>Teachers and teacher assistants can talk with <br /> students privately without leaving the Zoom <br /> environment.</p>
                    </div>
                </div>
                <button className='last__btn'>See more features</button>
            </div>
        </div>
    )
}

export default Success
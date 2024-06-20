import React from 'react'
import './Blog__detail.css'
import ava__detail from '../../assets/img/ava__detail.svg'
function Blog__detail_info() {
    return (
        <div className='detail_info_title'>
            <div className="container">
                <div className="information">
                    <h1>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
                    <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                    <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                        TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                        TOTC is a platform
                    </p>
                    <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                        TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage
                    </p>
                    <div className="information__btn">
                        <button className='info_btn'>affordable </button>
                        <button className='info_btn'>Stunning</button>
                        <button className='info_btn'>making</button>
                        <button className='info_btn'>madbrawns</button>
                    </div>
                    <div className='line'></div>
                    <div className="end">
                        <div className="ava">
                            <img src={ava__detail} alt="" />
                            <div className="writen">Written by
                                <div className='lina'>Lina</div>
                            </div>
                        </div>
                        <div>
                            <button className="follow_btn">Follow</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog__detail_info

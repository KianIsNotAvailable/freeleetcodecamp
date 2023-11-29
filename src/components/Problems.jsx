import React, { useState } from 'react'
import './Problem.css'
import {Link} from 'react-router-dom'
export default function Problems() {

const [expand, setExpand] = useState(false)
const [courseTitle, setCourseTitle] = useState('Expand Course')
function clickHandler(){
    if (!expand){
        setExpand(true)
        setCourseTitle('Expand Course')
    } else {
        setExpand(false)
        setCourseTitle('Collapse Course')
    }
}



  return (
    <div className='block-ui '>
        <div className='block'>
            <div className='block-header'>
                <h3 className='big-block-title'>Fundamentals of TwoSum</h3>
            </div>
            <div className='block-description'>
                <p>TwoSum is one of the most popular questions on Leetcode.</p>
                <p>In this course, you'll learn the fundamental concepts required to solve TwoSum. You'll start with loops, then you'll move on to the enumerate method in Python and then Hashmaps before combining them to solve TwoSum!</p>
            </div>
            <button className='map-title' onClick={clickHandler}>
                <img src=''></img>
                <div className='course-title'>
                {courseTitle}
                </div>
                <div className='lessons-completed'>
                        0/5
                </div>
            </button>
            { expand ? <div></div> :
            <ul className='map-challenges'>
                <li className='challenge-title'><Link to="introduction"><span>Introduction</span></Link></li>
                <li className='challenge-title'><Link to="/loops"><span>Loops in Python</span></Link></li>
                <li className='challenge-title'><Link><span>The Enumerate() Function</span></Link></li>
                <li className='challenge-title'><Link><span>Creating a HashMap</span></Link></li>
                <li className='challenge-title'><Link><span>think of more challenges</span></Link></li>
            </ul>}
        </div>
    </div>
  )
}

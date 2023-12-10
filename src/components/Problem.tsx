import React, { useState } from 'react'
import './Problem.css'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateButtonState } from '../actions';
import { RootState } from '../types'
import Checkmark from '../assets/checkmark.png'
import { useChallenge } from './challengeContext';
import { useCompleted } from './completedContext';
export default function Problems() {
    const dispatch = useDispatch();
    const buttonState = useSelector((state: RootState) => state.buttonState);
    const { introductionComplete, loopsComplete, enumerateComplete, hashmapsComplete } = useChallenge();
    const checkedArray = [introductionComplete, loopsComplete, enumerateComplete, hashmapsComplete];
    const trueChecked = checkedArray.filter(state => state === true);
const [expand, setExpand] = useState(false);
const [courseTitle, setCourseTitle] = useState('Expand Course');
const {setCompleted} = useCompleted();
function clickHandler(){
    if (!expand){
        setExpand(true)
        setCourseTitle('Collapse Course')
    } else {
        setExpand(false)
        setCourseTitle('Expand Course')
    }
}



setCompleted(trueChecked.length)
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
                        {trueChecked.length}/4
                </div>
            </button>
            { !expand ? <div></div> :
            <ul className='map-challenges'>
                <li className='challenge-title' onClick={()=>{dispatch(updateButtonState(1))}}><Link to="introduction"><div className='flex flex-row'>{introductionComplete && <img className='h-4' src={Checkmark}/>}<span>Introduction</span></div></Link></li>
                <li className='challenge-title'onClick={()=>{dispatch(updateButtonState(2))}}><Link to="/loops"><div className='flex flex-row'>{loopsComplete && <img className='h-4' src={Checkmark}/>}<span>Loops in Python</span></div></Link></li>
                <li className='challenge-title'onClick={()=>{dispatch(updateButtonState(3))}}><Link to="/enumerate"><div className='flex flex-row'>{enumerateComplete && <img className='h-4' src={Checkmark}/>}<span>The enumerate() Function</span></div></Link></li>
                <li className='challenge-title'onClick={()=>{dispatch(updateButtonState(4))}}><Link to="/hashmap"><div className='flex flex-row'>{hashmapsComplete && <img className='h-4' src={Checkmark}/>}<span>Hashmaps</span></div></Link></li>
                
            </ul>}
        </div>
    </div>
  )
}

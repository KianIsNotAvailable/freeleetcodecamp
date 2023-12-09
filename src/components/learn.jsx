import React from 'react'
import Problems from './Problem.tsx'
import './learn.css'
export default function learn() {
  return (
    <div className=' bg-[#1b1b32] h-[100vh]'>
        <div className=''>
        <h1 className='title'>Leetcode's TwoSum with Python</h1>
        <p className='description'>In this tutorial, you will learn the fundamentals required to solve Leetcode's Twosum</p>
        </div>
        <Problems/>
    </div>
  )
}

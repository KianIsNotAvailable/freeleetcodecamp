import React from 'react'
 

type ProblemDescriptionProps = {};

const ProblemDescription: React.FC<ProblemDescriptionProps> = () => {
    return <div className=' h-screen'><h1 className='p-3'>Problem Description</h1>
    <div className=' text-left p-2'>
    <p>With loops, you can execute a sequence of instructions over and over again for a set pre-determined number of times until a specific condition is met.</p>
            <p className='py-3'>There are two types of loops in Python:</p>
            <code>for loops</code>
            <code>while loops</code>
            <p className='py-6'>To solve the LeetCode problem "TwoSum" you will need to use a for loop</p>
            <p>Here is a for loop in action</p>
            <code>Array = [2, 3, 4 ,5]</code>
            <code>for n in Array:</code>
            <code>      print(Array[n])</code>
            <p>The following will be printed to the console:</p>
            <code>2</code>
            <code>3</code>
            <code>4</code>
            <code>5</code>
            <p className=' border-t border-b border-[#282c34] py-5'>Write a for loop for the Array</p>
            <button className='run-btn bg-[#282c34] border border-gray-300 w-full hover:bg-gray-300 hover:text-black p-2'>Run the Code!</button>
    </div>
    </div>
}
export default ProblemDescription
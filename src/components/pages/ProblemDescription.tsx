import React from 'react';
import challengeAnswers from '../../object';
import { useSelector } from 'react-redux';
import { RootState } from '../../types'

type ProblemDescriptionProps = {};

const ProblemDescription: React.FC<ProblemDescriptionProps> = () => {
    
  
    const buttonState = useSelector((state: RootState) => state.buttonState);

    return <div className=' h-[100vh]'><h1 className='p-3'>Problem Description</h1>
    <div className=' text-left p-2'>
    {challengeAnswers[buttonState].description} //sets the problem description of whatever problem we are on
            
    </div>
    </div>
}
export default ProblemDescription
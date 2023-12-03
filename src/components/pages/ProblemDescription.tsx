import React from 'react';
import challengeAnswers from '../../object';
import { useSelector } from 'react-redux';
import { RootState } from '../../types'

type ProblemDescriptionProps = {};

const ProblemDescription: React.FC<ProblemDescriptionProps> = () => {
    
  
    const buttonState = useSelector((state: RootState) => state.buttonState);

    return <div className=' h-screen'><h1 className='p-3'>Problem Description</h1>
    <div className=' text-left p-2'>
    {challengeAnswers[buttonState].description}
            
    </div>
    </div>
}
export default ProblemDescription
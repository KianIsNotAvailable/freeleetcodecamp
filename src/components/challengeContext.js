import React, { createContext, useContext, useState } from 'react';

const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
  const [introductionComplete, setIntroductionComplete] = useState(false);
  const [loopsComplete, setLoopsComplete] = useState(false);
  const [enumerateComplete, setEnumerateComplete] = useState(false);
  const [hashmapsComplete, setHashmapsComplete] = useState(false);

  const introductionCheck = () => setIntroductionComplete(true); //when they are set as true the checkmark shows
  const loopsCheck = () => setLoopsComplete(true);
  const enumerateCheck = () => setEnumerateComplete(true);
  const hashmapCheck = () => setHashmapsComplete(true);
  

  return (
    <ChallengeContext.Provider value={{ introductionComplete, loopsComplete, enumerateCheck, enumerateComplete, hashmapsComplete, loopsCheck, hashmapCheck, introductionCheck }}>
      {children}
    </ChallengeContext.Provider>
  );
};

export const useChallenge = () => {
  return useContext(ChallengeContext);
};

import React, { createContext, useContext, useState } from 'react';

const CompletedContext = createContext();

export const CompletedProvider = ({ children }) => {
    const [completed, setCompleted] = useState(0);

    

  return (
    <CompletedContext.Provider value={{completed, setCompleted }}>
      {children}
    </CompletedContext.Provider>
  );
};

export const useCompleted = () => {
  return useContext(CompletedContext);
};

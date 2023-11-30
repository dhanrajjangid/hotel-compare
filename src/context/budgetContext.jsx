import React, { createContext, useState } from "react";

const BudgetContext = createContext({});

const BudgetContextProvider = ({ children }) => {
  const [budget, setBudget] = useState("low");

  const updateBudget = (newBudget) => {
    setBudget(newBudget);
  };

  return (
    <BudgetContext.Provider value={{ budget, updateBudget }}>
      {children}
    </BudgetContext.Provider>
  );
};

export { BudgetContext, BudgetContextProvider };

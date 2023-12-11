import { createContext, useState, useEffect } from "react";

const BasketContext = createContext(null);

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  useEffect(() => {
      const basketData = localStorage.getItem("basket")
        ? JSON.parse(localStorage.getItem("basket"))  
        : null;
    if(basketData) {
        localStorage.setItem('basket', JSON.stringify([...basketData, basket]));
    }

    console.log('Here is basket', basket, 'Here is basket Localstorag', basketData)
  }, [basket]);
  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContext;

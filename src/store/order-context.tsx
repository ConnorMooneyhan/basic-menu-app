import React, { useState } from 'react';

// interface OrderContextInterface {
//   cart: {
//     quantity: number,
//     price: number  
//   },
//   addItem: () => {}
// }

interface CartItemInfo {
  quantity: number,
  totalCost: number
}

interface OrderContextInterface {
  cart: {
    [index: string]: CartItemInfo
  }, 
  addItem: (name: string, itemInfo: CartItemInfo) => void
}

const OrderContext = React.createContext<OrderContextInterface>({
  cart: {

  },
  addItem: (name: string, itemInfo: CartItemInfo) => {}
});

export const OrderContextProvider: React.FC = (props) => {
  const [cart, setCart] = useState({});

  const addItem = (name: string, itemInfo: CartItemInfo) => {
    setCart((prev) => { return { ...prev, [name]: itemInfo } });
  };

  return (
    <OrderContext.Provider value={{ cart, addItem }} >{props.children}</OrderContext.Provider>
  );
}

export default OrderContext;
// import React, { useContext, useState, useEffect } from 'react'
// import { commerce } from './lib/commerce'


// const CartContext = React.createContext()

// export function useCart () {
//     return useContext(CartContext)
// }

// export function StateProvider({ children }) {
//     const [cart, setCart] = useState({});

//     const fetchCart = async () => {
//         const response = await commerce.cart.retrieve();
//         setCart(response)
//     }
//     useEffect(() => {
//         fetchCart()
//       }, [setCart])

//     return (
//         <CartContext.Provider value={cart}>
//             {children}
//         </CartContext.Provider>
//     )
// }


import React, { createContext, useContext, useReducer } from "react";

//Prepares the datalayer
export const StateContext = createContext();

//Wrap our app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
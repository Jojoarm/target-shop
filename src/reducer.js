export const initialState = {
    basket: [],
    user: null,
}

//Function to get the cart total amount instead of using for loop
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0); 

//A function to get the total quantity of items in the basket
export const getCartTotal = (basket) => basket?.reduce((amount,item) => item.quantity + amount, 0)



const reducer = (state, action) => {
    // console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //First we check if the item is in cart already
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.item.id
            )
           
            if (index > -1) {
                let newState = [...state.basket]
                newState[index].quantity += 1
                // console.log('basket now', state.basket)
                return { basket: [...newState]}
            }else{
                return {
                    ...state,
                    basket: [...state.basket, action.item]
                }
            }
            
        
        // case 'REMOVE_FROM_BASKET':
        //     const index = state.basket.findIndex(
        //         (basketItem) => basketItem.id === action.id
        //     )
        //     let newBasket = [...state.basket];

        //     if(index >= 0) {
        //         newBasket.splice(index, 1);
        //     }
        //     else {
        //         console.warn(`Cant remove product (id: ${action.id}) as it is not in the basket!`)
        //     }
        //     return {
        //         ...state,
        //         basket: newBasket
        //     }
        // case 'SET_USER':
        //     return {
        //         ...state, 
        //         user: action.user
        //     }
        // case 'EMPTY_BASKET':
        //     return {
        //         ...state, 
        //         basket: []
        //     }
        default:
            return state

    }
}

export default reducer;
export const initialState = {
    basket: [],
    user: null,
}


//Function to get the cart total amount instead of using for loop
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.quantity*parseInt(item.price.replace(/,/g, '')) + amount, 0); 

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

        case 'INCREASE_PRODUCT_QUANTITY':
            const increaseIndex = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let newCart = [...state.basket]
            newCart[increaseIndex ].quantity +=1
            return {basket: [...newCart]}
        
        case 'DECREASE_PRODUCT_QUANTITY':
            const decreaseIndex = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let decreasedCart = [...state.basket]
            if (decreasedCart[decreaseIndex].quantity <= 1){
                decreasedCart.splice(decreaseIndex, 1)
            } else {
                decreasedCart[decreaseIndex].quantity -= 1
            }
            return {basket: [...decreasedCart]}
                 
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];

            const itemIndex = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )

            if(itemIndex >= 0) {
                newBasket.splice(itemIndex, 1);
            }
            else {
                console.warn(`Cant remove product (id: ${action.id}) as it is not in the basket!`)
            }
            return {
                ...state,
                basket: newBasket
            }

        case 'EMPTY_CART':
            return {...state, basket: [] }
            
        // case 'SET_USER':
        //     return {
        //         ...state, 
        //         user: action.user
        //     }
        
        default:
            return state

    }
}

export default reducer;
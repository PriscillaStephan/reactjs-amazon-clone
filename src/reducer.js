 export const initialState = {
     basket: [],
 };

// Selector - reduce function
export const getBasketTotal = (basket) => 
    //the way this function work:
    //everytime i want the item price to add to the total amount,
    // and the initial total amount is gonna be  0
    basket?.reduce((amount, item) => item.price + amount, 0)

 const reducer = (state, action) => {
     console.log(action);
     switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.id)
            }
        
            default:
                return state;
     } 
 };

 export default reducer;

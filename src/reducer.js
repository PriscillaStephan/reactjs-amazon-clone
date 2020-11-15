 export const initialState = {
     basket: [],
     user: null
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
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0){
                //cut the index by one 
                newBasket.splice(index, 1)
            }else{
                console.warn(
                    'Cant remove product (id: ${action.id}) as its not in basket!'
                )
            }
        
            return{
                ...state,
                basket: newBasket
            }
            
            //the case to listen to the user (the listener in the app.js) 
            case "SET_USER":
                return {
                    ...state,
                    user: action.user
                }

            default:
                return state;
     } 
 };

 export default reducer;

import {createSelector} from 'reselect';

// input select that doesent use createSelector
//out select that uses create selector

//input selector, takes entire state and returns a slice of it 
const selectCart = state => state.cart;

//memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector (
    [selectCartItems],
    cartItems => cartItems.reduce((accumaltedQuantity,cartItem)=> accumaltedQuantity+cartItem.quantity,0)
    
)

export const selectCartTotal = createSelector (
    [selectCartItems],
    cartItems => cartItems.reduce((accumaltedPrice,cartItem) => accumaltedPrice+cartItem.quantity*cartItem.price,0)
)
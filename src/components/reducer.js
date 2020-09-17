export const initialState = {
    basket: [],
    user: null
}

// export const initialState = {
//     basket: [{
//         id:"12321341",
//         title: "The Leon startup",
//         price: "141.96",
//         rating: "5",
//         image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
//     }],
// }

const reducer = (state, action) => {
    console.log(action, state);
    switch (action.type) {
        case "ADD_TO_BASKET":
            //Login for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case "REMOVE_TO_BASKET":
            //Login for removing item from basket

            // we cloned the basket
            let newBasket = [...state.basket]

            //we check to see if product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                //item exists, remove it
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product {id:${action.id}} as its not in basket`
                )
            }
            return { ...state, basket: newBasket }

        default:
            return state;
    }
}

export default reducer
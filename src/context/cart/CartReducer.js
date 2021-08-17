import { TOGGLE_CART, ADD_TO_CART, REMOVE_FROM_CART } from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;

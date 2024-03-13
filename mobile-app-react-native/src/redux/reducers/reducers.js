import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionsType";

export const Reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      const updatedState = state.filter((item, index) => index !== action.payload);
      return updatedState;

    default:
      return state;
  }
};

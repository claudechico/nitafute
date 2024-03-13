
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actionsType";

export const Reducers2 = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];

    case REMOVE_FROM_WISHLIST:
      const updatedState = state.filter((item, index) => index !== action.payload);
      return updatedState;

    default:
      return state;
  }
};

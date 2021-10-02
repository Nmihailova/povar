import {SHOW_RECIPE} from '../actions';

const initialState = {
    currentRecipe: {},
  };
  
export const currentRecipe = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_RECIPE:
        return {
            ...state,
            currentRecipe: action.payload,
        };
  
      default:
        return state;
    }
};
  
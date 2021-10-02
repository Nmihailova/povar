import {ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE} from '../actions';

import {recipes} from '../data';

const initialState = {
    recipesList: recipes,
};
  

export const recipesList = (state = initialState, action) => {
    switch (action.type) {
    case ADD_RECIPE:
        return {
            ...state,
            recipesList: [...state.recipesList, action.payload],
        };

    case EDIT_RECIPE: {
        const {recipeIndex, updatedRecipe} = action.payload;
        const copyRecipesList = [...state.recipesList];

        copyRecipesList[recipeIndex] = updatedRecipe;

        return {
            ...state,
            recipesList: copyRecipesList,
        };
    }

    case DELETE_RECIPE: {
        const copyRecipesList = [...state.recipesList];

        copyRecipesList.splice(action.payload.indexForDelete, 1);

        return {
            ...state,
            recipesList: copyRecipesList,
        };
    }
  
      default:
        return state;
    }
};
  
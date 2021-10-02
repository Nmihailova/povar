import {combineReducers} from 'redux';

import {currentRecipe} from './currentRecipe';
import {recipesList} from './recipesList';


export default combineReducers({
    currentRecipe,
    recipesList,
});
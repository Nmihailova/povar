import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import combineReducers from '../reducers';

import {recipes} from '../data';


const initialState = {
    currentRecipe: {},
    recipesList: recipes,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers,
    initialState,
    composeEnhancers(
        applyMiddleware(thunk),
    )
);

export default store;

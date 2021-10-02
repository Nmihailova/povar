import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {getRecipesList} from '../store/getters';

import {showRecipe} from '../actions';

import './styles.css';

export const Menu = () => {
    const dispatch = useDispatch();

    const recipeList = useSelector(getRecipesList) || [];

    const onShowRecipe = recipe => dispatch(showRecipe(recipe));

    return (
        <aside>
            {recipeList.map((recipe, index) => (
                <div key={index} className="menuItem" onClick={() => onShowRecipe(recipe)}>
                    {recipe.title}
                </div>
            ))}
        </aside>
    );
};

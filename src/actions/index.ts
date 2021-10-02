// import axios from 'axios';

export const SHOW_RECIPE = 'SHOW_RECIPE';
export const ADD_RECIPE = 'ADD_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

export const showRecipe = (recipe) => {
    return {
        type: SHOW_RECIPE,
        payload: recipe,
    };
};

export const addRecipe = (recipe) => {
    return {
        type: ADD_RECIPE,
        payload: recipe,
    };
};

export const editRecipe = ({updatedRecipe, recipeIndex}) => {
    return {
        type: EDIT_RECIPE,
        payload: {updatedRecipe, recipeIndex},
    };
};

export const deleteRecipe = (indexForDelete) => {
    return {
        type: DELETE_RECIPE,
        payload: indexForDelete,
    };
};

// // вынести мидлвары куда то?
// //api middlewares
// export const requestMakeOrderApi = (data) => {
//     return (dispatch) => {
//         dispatch({
//             type: 'MAKE_ORDER_REQUEST',
//             payload: data,
//         });

//         axios
//             .post(`${HOST}/send`, data)
//             .then((res) => {
//                 dispatch({
//                     type: 'MAKE_ORDER_SUCCESS',
//                     payload: res.data,
//                 });
//             })
//             .catch((err) => {
//                 dispatch({
//                     type: 'MAKE_ORDER_FAIL',
//                     payload: err,
//                 });
//             });
//     };
// };

// export const requestLeaveFeedbackApi = (data) => {
//     return (dispatch) => {
//         dispatch({
//             type: 'LEAVE_FEEDBACK_REQUEST',
//             payload: data,
//         });

//         axios
//             .post(`${HOST}/leave-feedback`, data)
//             .then((res) => {
//                 dispatch({
//                     type: 'LEAVE_FEEDBACK_SUCCESS',
//                     payload: res.data,
//                 });
//             })
//             .catch((err) => {
//                 dispatch({
//                     type: 'LEAVE_FEEDBACK_FAIL',
//                     payload: err,
//                 });
//             });
//     };
// };

// export const requestGetFeedbacksApi = () => {
//     return (dispatch) => {
//         dispatch({
//             type: 'GET_FEEDBACK_LIST_REQUEST',
//         });

//         axios
//             .get(`${HOST}/get-feedbacks`)
//             .then((res) => {
//                 dispatch({
//                     type: 'GET_FEEDBACK_LIST_SUCCESS',
//                     payload: res.data,
//                 });
//             })
//             .catch((err) => {
//                 dispatch({
//                     type: 'GET_FEEDBACK_LIST_FAIL',
//                     payload: err,
//                 });
//             });
//     };
// };

import { ActionTypes } from "../contants/action_types";

export const setMovies = (movies) => {
    return {
        type: ActionTypes.SET_MOVIES,
        payload: movies,
    };
};

export const selectMovie = (movie) => {
    return {
        type: ActionTypes.SELECTED_MOVIE,
        payload: movie,
    };
};

export const removeSelectMovie = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_MOVIE,
    };
};
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovies } from "../redux/actions/movie";
import MovieComponent from "./MovieComponent";
import {imbdOptions, fetchData} from "../utils/fetchData";

const MovietList = () => {
    const dispatch = useDispatch();

    const fetchMovies = async () => {
        const response = await fetchData(
            "https://imdb-top-100-movies.p.rapidapi.com/",
            imbdOptions
        );
        dispatch(setMovies(response));
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className="ui grid container">
            <MovieComponent />
        </div>
    )
}

export default MovietList
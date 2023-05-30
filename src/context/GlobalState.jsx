import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext()

const initialState = {
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
    watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : []
}



export const GlobalProvider = (props) => {
    const [state,dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist) )
        localStorage.setItem("watched", JSON.stringify(state.watched) )
    }, [state])

    const addMovieToWatchlist = (movie) => { 
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie })
    }

    const removeMovieToWatchlist = (movie) => {
        dispatch({ type: "REMOVE_MOVIE_TO_WATCHLIST", payload: movie })
    }

    const moveToWatched = (movie) => {
        dispatch({ type: "MOVE_TO_WATCHED", payload: movie })
    }

    const removeMovieToWatched = (movie) => {
        dispatch({ type: "REMOVE_MOVIE_TO_WATCHED", payload: movie })
    }

    const moveToWatclist = (movie) => {
        dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie })
    }


    const value = {
        addMovieToWatchlist,
        watchlist: state.watchlist,
        removeMovieToWatchlist,
        moveToWatched,
        watched: state.watched,
        removeMovieToWatched,
        moveToWatclist
    }

    return (
        <GlobalContext.Provider value={value}>{props.children}</GlobalContext.Provider>
    )
}
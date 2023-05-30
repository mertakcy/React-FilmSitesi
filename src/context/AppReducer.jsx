export default (state,action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload]
            }
        
        case "REMOVE_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => 
                    movie.id !== action.payload.id
                )
            }
        
        case "MOVE_TO_WATCHED":
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => 
                    movie.id !== action.payload.id
                ),
                watched: [...state.watched, action.payload]
            }


        case "REMOVE_MOVIE_TO_WATCHED":
            return {
                ...state,
                watched: state.watched.filter(movie => 
                    movie.id !== action.payload.id
                )
            }

        
        case "MOVE_TO_WATCHLIST":
            return {
                ...state,
                watched: state.watched.filter(movie => 
                    movie.id !== action.payload.id
                ),
                watchlist: [...state.watchlist, action.payload]
            } 

            default:
                return state;
    }
}
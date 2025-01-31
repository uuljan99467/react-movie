

import { useState, createContext, useEffect } from "react"
import movieService from "../service/moviesServie"


export const GENRES_CONTEXT = createContext({})

const GenreContext = ({ children }) => {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        movieService.fetchMovieGeneralist()
            .then(res => setGenres(res.genres))
    }, [])

    const value = {
        genres // HomePage(UpComing), MovieDetail
    }
    return (
        <GENRES_CONTEXT.Provider value={value}>
            {children}
        </GENRES_CONTEXT.Provider>
    )
}

export default GenreContext
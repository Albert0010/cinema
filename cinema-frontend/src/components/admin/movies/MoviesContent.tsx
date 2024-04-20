"use client"
import { Fragment, useState } from "react";
import MoviesForm from "./MoviesForm";
import { TMovie } from "@/api/movies/type";
import Movie from "./Movie";

export default function MoviesContent({data}:{data:TMovie[]}) {
    const [movies,setMovies] = useState(data);

    return (
        <>
            <MoviesForm setMovies={setMovies} movies={movies}/>
            <div className="p-5">
                <h1 className="font-bold">Movies</h1>
                <div className="grid grid-cols-4 gap-2">
                    {movies.map((room) => (<Fragment key={room.id}>
                        <Movie {...room} setMovies={setMovies} movies={movies}/>
                    </Fragment>))}
                </div>
            </div>
        </>
    )
}
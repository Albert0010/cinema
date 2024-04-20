import { useState } from "react";
import { TMovie } from "@/api/movies/type";
import EditMoviesForm from "./EditMoviesForm";
import { deleteMovies, editMovies } from "@/api/admin/movies";

interface IMovieProps {
    id:number;
    name:string;
    setMovies:React.Dispatch<React.SetStateAction<TMovie[]>>;
    movies:TMovie[];
    genre:string;
    rating:string;
}

export default function Movie({id,name,setMovies,genre,rating,movies,...props}:IMovieProps) {
    const [isClicked, setIsClicked] = useState(false);
    const handleDelete = async (id:number) => {
        const {status} = await deleteMovies({id});
        if(status === 204){
            setMovies(movies.filter(room => room.id !== id));
        }
    }
    const handleSave = async (id:number,data:{name:string,genre:string; rating:string}) => {
        const {status,data:newData} = await editMovies({id},data);
        if(status === 201){
            setMovies(movies.map(room => room.id === id ? {...room,...newData} : room));
        }
        setIsClicked(false);
    }
    const handleEditClick = () => {
        setIsClicked(!isClicked);
    }
    return (
        <div  className='flex flex-col card border border-black gap-2 p-2'>
            <h1>{name}</h1>
            {!isClicked && <>
                <button className='border border-black p-2 bg-primary' onClick={()=>handleDelete(id)}>Delete</button>
                <button className='border border-black p-2 bg-primary' onClick={handleEditClick}>Edit</button>
            </>}
            {isClicked && <EditMoviesForm {...props} handleSave={handleSave} id={id} movies={movies} handleEditClick={handleEditClick}/>}
        </div>
    )
}

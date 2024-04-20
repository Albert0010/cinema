"use client"
import { createMovies } from "@/api/admin/movies";
import { TMovie } from "@/api/movies/type";
import CustomInput from "@/components/reusable/CustomInput";
import { handleChange } from "@/constants/constants";
import { Button } from "primereact/button";
import { Dispatch, SetStateAction, useState } from "react";
interface IMoviesFormProps {setMovies:Dispatch<SetStateAction<TMovie[]>>;movies:TMovie[]}
export default function MoviesForm ({setMovies,movies}:IMoviesFormProps){
    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [genre, setGenre] = useState("");


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        event.preventDefault();
        const isAllFieldsFilled = name && genre && rating;
        if(isAllFieldsFilled){
            const {data,status} = await createMovies({name, genre, rating });
            if(status === 201){
                setMovies([...movies,data]);
            }
        }   
    }
    return (
        <div className="flex flex-col mt-6 ml-2 gap-2 w-1/3">
            <h3 className="font-bold text-lg">Create Movies</h3>
            <CustomInput isButtonVisible={false} label="Name" className="border border-black p-2" value={name} onChange={handleChange(setName)} />
            <CustomInput isButtonVisible={false} label="Genre" className="border border-black p-2" value={genre} onChange={handleChange(setGenre)} />
            <CustomInput isButtonVisible={false} type="number" label="Rating" className="border border-black p-2" value={rating} onChange={handleChange(setRating)} />
            <Button onClick={handleSubmit} label="Submit" icon="pi pi-check" className="text-sm w-[100px] border border-black p-2 bg-primary"/>
        </div>
    );
};

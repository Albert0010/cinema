"use client"
import { TMovie } from "@/api/movies/type";
import CustomInput from "@/components/reusable/CustomInput";
import { handleChange } from "@/constants/constants";
import { Button } from "primereact/button";
import {  useState } from "react";

interface IEditFormProps {
    handleSave:(id:number,data:{name:string,genre:string; rating:string})=>void;
    movies:TMovie[];
    id:number;
    handleEditClick:()=>void;
}

export default function EditMoviesForm ({movies,id,handleEditClick,handleSave}:IEditFormProps){
    const [name, setName] = useState(movies.find((elem)=>elem.id === id)?.name ?? "");
    const [genre, setGenre] = useState(movies.find((elem)=>elem.id === id)?.genre ?? "");
    const [rating, setRating] = useState(movies.find((elem)=>elem.id === id)?.rating ?? "");


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        event.preventDefault();
        handleSave(id,{name, genre, rating});
    }
    return (
        <div className="flex flex-col mt-6 ml-2 gap-2">
            <h3 className="font-bold text-lg">Edit {name}</h3>
            <CustomInput isButtonVisible={false} label="Name" className="border border-black p-2" value={name} onChange={handleChange(setName)} />
            <CustomInput isButtonVisible={false} label="Genre" className="border border-black p-2" value={genre} onChange={handleChange(setGenre)} />
            <CustomInput isButtonVisible={false} type="number" label="Rating" className="border border-black p-2" value={rating} onChange={handleChange(setRating)} />
            <Button onClick={handleSubmit} label="Save" icon="pi pi-check" className="text-sm w-[100px] border border-black p-2 bg-primary"/>
            <Button onClick={handleEditClick} label="Cancel" icon="pi pi-check" className="text-sm w-[100px] border border-black p-2 bg-primary"/>
        </div>
    );
};

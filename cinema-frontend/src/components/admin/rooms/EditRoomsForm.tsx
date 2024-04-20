"use client"
import { TRoom } from "@/api/rooms/type";
import CustomInput from "@/components/reusable/CustomInput";
import { handleChange } from "@/constants/constants";
import { Button } from "primereact/button";
import { Dispatch, SetStateAction, useState } from "react";

interface IEditFormProps {
    handleSave:(id:number,data:{name:string,row_count:number; column_count:number})=>void;
     setRooms:Dispatch<SetStateAction<TRoom[]>>;
     rooms:TRoom[];
     id:number;
     handleEditClick:()=>void;
}

export default function EditRoomsForm ({rooms,id,handleEditClick,handleSave}:IEditFormProps){
    const [name, setName] = useState(rooms.find((elem)=>elem.id === id)?.name ?? "");
    const [rows, setRows] = useState(rooms.find((elem)=>elem.id === id)?.row_count ?? "");
    const [columns, setColumns] = useState(rooms.find((elem)=>elem.id === id)?.column_count ?? "");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        event.preventDefault();
        handleSave(id,{name, row_count: +(rows), column_count: +(columns)});
    }
    return (
        <div className="flex flex-col mt-6 ml-2 gap-2 w-1/3">
            <h3 className="font-bold text-lg">Edit {name}</h3>
            <CustomInput isButtonVisible={false} label="Name" className="border border-black p-2" value={name} onChange={handleChange(setName)} />
            <CustomInput isButtonVisible={false} type="number" label="Rows" className="border border-black p-2" value={rows} onChange={handleChange(setRows)} />
            <CustomInput isButtonVisible={false} type="number" label="Columns" className="border border-black p-2" value={columns} onChange={handleChange(setColumns)} />
            <Button onClick={handleSubmit} label="Save" icon="pi pi-check" className="text-sm w-[100px] border border-black p-2 bg-primary"/>
            <Button onClick={handleEditClick} label="Cancel" icon="pi pi-check" className="text-sm w-[100px] border border-black p-2 bg-primary"/>
        </div>
    );
};

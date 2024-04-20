"use client"
import { createRooms } from "@/api/admin/rooms";
import { TRoom } from "@/api/rooms/type";
import CustomInput from "@/components/reusable/CustomInput";
import { Button } from "primereact/button";
import { Dispatch, SetStateAction, useState } from "react";
export default function RoomsForm ({setRooms,rooms}:{setRooms:Dispatch<SetStateAction<TRoom[]>>;rooms:TRoom[]}){
    const [name, setName] = useState("");
    const [rows, setRows] = useState("");
    const [columns, setColumns] = useState("");

    const handleChange = (set:Dispatch<SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
        set(event.target.value);
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        event.preventDefault();
        const isAllFieldsFilled = name && rows && columns;
        if(isAllFieldsFilled){
            const {data,status} = await createRooms({name, row_count: +(rows), column_count: +(columns)});
            if(status === 201){
                setRooms([...rooms,data]);
            }
        }   
    }
    return (
        <div className="flex flex-col mt-6 ml-2 gap-2 w-1/3">
            <h3 className="font-bold text-lg">Create Rooms</h3>
            <CustomInput isButtonVisible={false} label="Name" className="border border-black p-2" value={name} onChange={handleChange(setName)} />
            <CustomInput isButtonVisible={false} type="number" label="Rows" className="border border-black p-2" value={rows} onChange={handleChange(setRows)} />
            <CustomInput isButtonVisible={false} type="number" label="Columns" className="border border-black p-2" value={columns} onChange={handleChange(setColumns)} />
            <Button onClick={handleSubmit} label="Submit" icon="pi pi-check" className="text-sm w-[100px] border border-black p-2 bg-primary"/>
        </div>
    );
};

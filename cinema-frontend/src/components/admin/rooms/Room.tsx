import { TRoom } from "@/api/rooms/type";
import EditForm from "./EditRoomsForm";
import { deleteRooms, editRooms } from "@/api/admin/rooms";
import { useState } from "react";

interface IRoomProps {
    id:number;
    name:string;
    setRooms:React.Dispatch<React.SetStateAction<TRoom[]>>;
    rooms:TRoom[];
    column_count:string;
    row_count:string;
}

export default function Room({id,name,setRooms,rooms,...props}:IRoomProps) {
    const [isClicked, setIsClicked] = useState(false);
    const handleDelete = async (id:number) => {
        const {status} = await deleteRooms({id});
        if(status === 204){
            setRooms(rooms.filter(room => room.id !== id));
        }
    }
    const handleSave = async (id:number,data:{name:string, row_count:number, column_count:number}) => {
        const {status,data:newData} = await editRooms({id},data);
        if(status === 201){
            setRooms(rooms.map(room => room.id === id ? {...room,...newData} : room));
        }
        setIsClicked(false);
    }
    const handleEditClick = () => {
        setIsClicked(!isClicked);
    }
    return (
        <div  className='flex flex-col card border border-black gap-2 p-2'>
            <h1>{id}</h1>
            <h1>{name}</h1>
            {!isClicked && <>
                <button className='border border-black p-2 bg-primary' onClick={()=>handleDelete(id)}>Delete</button>
                <button className='border border-black p-2 bg-primary' onClick={handleEditClick}>Edit</button>
            </>}
            {!!isClicked && <EditForm {...props} handleSave={handleSave} id={id} setRooms={setRooms} rooms={rooms} handleEditClick={handleEditClick}/>}
        </div>
    )
}
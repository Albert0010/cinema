"use client"
import { TRoom } from "@/api/rooms/type";
import RoomsForm from "./RoomsForm";
import { Fragment, useState } from "react";
import Room from "./Room";

export default function Content({data}:{data:TRoom[]}) {
    const [rooms,setRooms] = useState(data);

    return (
        <>
            <RoomsForm setRooms={setRooms} rooms={rooms}/>
            <div className="p-5">
                <h1 className="font-bold">Rooms</h1>
                <div className="grid grid-cols-4 gap-2">
                    {rooms.map((room) => (<Fragment key={room.id}>
                        <Room {...room} setRooms={setRooms} rooms={rooms}/>
                    </Fragment>))}
                </div>
            </div>
        </>
    )
}
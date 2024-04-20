"use client"
import {Menubar} from "primereact/menubar";
import useRooms from "@/hooks/useRooms";

export default function Header (){
    const {items} = useRooms();
    return (
        <Menubar model={items}/>
    );
};

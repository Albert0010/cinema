"use client"
import {useEffect, useState} from "react";
import {getRooms} from "@/api/rooms";
import {MenuItem} from "primereact/menuitem";
import {useRouter} from "next/navigation";

export default function useRooms(){
    const {push} = useRouter();
    const [items,setItems] = useState<MenuItem[]>([])
    useEffect(() => {
        getRooms().then(({data}) => {
            setItems([{
                label: 'Rooms',
                icon: 'pi pi-step-forward',
                items: [
                    ...data.map(({id,name}) => ({label: name, icon: 'pi pi-fw pi-file', command: ()=>{
                            push(`/rooms/${id}`)
                        }}))
                ],
            }])
        })
    }, [push])
    return {items};
}

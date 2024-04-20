import {Menubar} from "primereact/menubar";
import {getRooms} from "@/api/rooms";

export default async function Header (){
    const {data} = await getRooms();
    const items = [{
        label: 'Rooms',
        icon: 'pi pi-step-forward',
        items: [
            ...data.map(({id,name}) => ({label: name, icon: 'pi pi-fw pi-file', url: `/rooms/${id}`}))
        ],
    }]
    return (
        <Menubar model={items}/>
    );
};

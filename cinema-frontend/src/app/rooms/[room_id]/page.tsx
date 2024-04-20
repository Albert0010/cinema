import {getRoomSchedule} from "@/api/schedules";
import MoviesTimeLine from "@/components/reusable/Timeline";
import "@/assets/primereact/timelines.css"

type TPageProps = {
    params: {
        room_id: string;
    }
}

export default async function Page({ params:{room_id} }:TPageProps) {
    const {data} = await getRoomSchedule(room_id);
    return (
        <MoviesTimeLine events={[
            ...data.map(({id,start_time,movie:{poster,name}}) => ({
                status: name,
                date: `${start_time}`,
                icon: 'pi pi-step-forward',
                color: '#9C27B0',
                image: poster,
                schedule_id:id,
            }))
        ]}/>
    );
};

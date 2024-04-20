import { getSchedule } from '@/api/schedules';
import { getSeats } from '@/api/seats';
import BookSeatsForm from '@/components/seats/BookSeatsForm';
import SeatMap from '@/components/seats/SeatMap'
import { setSeats } from '@/constants/constants';

interface IProps {
  params:{
    schedule_id: string;
  }
}


export default async function Page({params:{schedule_id}}:IProps) {
  const {data:{room:{row_count,column_count}}} = await getSchedule(schedule_id);
  const {data} = await getSeats(schedule_id);
  const seats = setSeats([],row_count,column_count,data);

    return (
        <SeatMap seats={seats} row_count={row_count} column_count={column_count} schedule_id={schedule_id} />
    )
}

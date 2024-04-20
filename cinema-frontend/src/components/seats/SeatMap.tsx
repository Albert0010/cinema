"use client"
import { useState } from "react";
import { ISeat, THandleSeatClickArgs } from "../type";
import Seat from "./Seat";
import { addSeat, getSeats } from "@/api/seats";
import { setSeats } from "@/constants/constants";
import BookSeatsForm from "./BookSeatsForm";
import { addTicket } from "@/api/tickets";

interface ISeatMapProps {
    seats: Pick<ISeat, "id" | "available">[];
    column_count: string;
    row_count: string;
    schedule_id: string;
}

export default function SeatMap ({ seats:defaultSeats, column_count,schedule_id,row_count }:ISeatMapProps) {
  const [newSeats,setNewSeats] = useState(defaultSeats);
  const [valid,setValid] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSeatClick = async ({column_value,row_value}:THandleSeatClickArgs) => {

      await addSeat(+schedule_id,column_value,row_value);
      const {data} = await getSeats(schedule_id);

      const seats = setSeats([],row_count,column_count,data);
      setNewSeats(seats);
      const a = await addTicket(+schedule_id,name,email);
  }

    return (
      <div className="flex justify-between w-full p-6">
            <div className={`w-[500px] flex flex-wrap gap-2`}>
        {newSeats.map(({id,available},index) => (
          <div key={id} className="w-[32px] h-[32px]">
              <Seat
                {...{column_count,valid,available,id,handleSeatClick,column_value: Math.floor(index / +column_count),row_value: (index % +column_count)}}
              />
          </div>
        ))}

      </div>
      <BookSeatsForm email={email} name={name} setEmail={setEmail} setName={setName} setValid={setValid}/>
      </div>
    );
  };

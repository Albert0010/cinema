import { TSeat } from "@/api/seats/type";
import { ITemplateDemoProps } from "@/components/reusable/Timeline";
import { ISeat } from "@/components/type";
import { Dispatch, SetStateAction } from "react";


const setSeats = (seats:Pick<ISeat, "id" | "available">[],row_count:string,column_count:string,data:TSeat[]) => {
    for(let id = 0; id < (+row_count)*(+column_count); id++){
      seats.push({id,available:true});
    }
    for(const {column_value,row_value} of data){
      seats[(+column_count)*column_value + row_value].available = false;
    }
    return seats;
}

const sortEventsByEndDate = (events: ITemplateDemoProps[]): ITemplateDemoProps[] => {
  return events.sort((a, b) => {
    const endDateA = new Date(a.date || "");
    const endDateB = new Date(b.date || "");
    return endDateA.getTime() - endDateB.getTime();
  });
};
const handleChange = (set:Dispatch<SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
  set(event.target.value);
}

export {setSeats,sortEventsByEndDate,handleChange}

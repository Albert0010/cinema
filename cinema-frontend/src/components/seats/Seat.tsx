import { Tooltip } from "primereact/tooltip";
import { ISeat } from "../type";
  
export default  function Seat ({column_count,available,id,handleSeatClick,column_value,row_value,valid}:ISeat) {
    return (
      <>
      {!valid  && <Tooltip mouseTrack  target=".tooltip" />}
      <div
        data-pr-position="top"
        data-pr-tooltip="Please fill your name and email to book a seat."
        className={`tooltip w-1/${column_count} p-2 flex justify-center items-center seat rounded-full w-8 h-8 cursor-pointer ${available ? 'bg-green-500' : 'bg-gray-500'}`}
        onClick={() => valid && available && handleSeatClick({row_value,column_value})}
      >{id}</div>
      </>
    );
  };
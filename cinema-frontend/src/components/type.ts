interface ISeat {
    id: number;
    column_value: number;
    row_value: number;
    available: boolean;
    handleSeatClick: (args: THandleSeatClickArgs) => void;
    valid?:boolean;
    column_count:string;
}

type THandleSeatClickArgs = {
     column_value: number, row_value: number
};
export type {ISeat,THandleSeatClickArgs}

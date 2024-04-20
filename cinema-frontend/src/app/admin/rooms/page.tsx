import { getRooms } from '@/api/rooms';
import Content from '@/components/admin/rooms/RoomsContent';

export default async function Page (){
    const {data} = await getRooms();
    
    return (
        <div className='flex gap-5'>
            <Content data={data}/>  
        </div>
    );
};

import { getMovies } from "@/api/movies";
import MoviesContent from "@/components/admin/movies/MoviesContent";

export default async function Page (){
    const {data} = await getMovies();
    return (
        <div className='flex gap-5'>
        <MoviesContent data={data}/>  
    </div>
    );
};

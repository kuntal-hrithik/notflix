import React from 'react';
import { Movie } from '../../typings';
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Thumbnail from './Thumbnail';
interface Props{
    title:string 
    movies:Movie[]
}





export default function Row({title,movies}:Props) {
  return (
    <div className='h-40 space-y-0.5 md:space-y-2'>
      <h2 className='w-56 cursor pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl'>{title}</h2>
      <div>
        <HiArrowLeft></HiArrowLeft>
        <div className='flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 '>
          {movies.map((movie)=>(
            <Thumbnail key={movie.id} movie={movie}></Thumbnail>
          ))}
        </div>

        <HiArrowRight></HiArrowRight>
      </div>
    </div>
  );
}

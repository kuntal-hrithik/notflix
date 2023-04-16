import { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import { Movie } from '../../typings';
import { baseUrl } from '../../constants/movie';
import { FaPlay } from 'react-icons/fa'
import { BhuTuka_Expanded_One } from 'next/font/google';
interface Props {
    netflixOriginal: Movie[]
}

export default function Banner({ netflixOriginal }: Props) {

    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        setMovie(netflixOriginal[Math.floor(Math.random() * netflixOriginal.length)]);
    }, [netflixOriginal])
    console.log(movie);

    return (
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
            <div className=' absolute top-0 left-0 -z-10 h-[95vh]  w-screen'>
                <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                    layout="fill"
                    objectFit='cover'
                >
                </Image>
            </div>
            <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>{movie?.title || movie?.name}</h1>
            <p className='max-w-x5 text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
                {movie?.overview}
            </p>
            <div className='flex space-x-3'>
                <button className='bannerButton bg-white text-black'> 
                <FaPlay className='h-4 w-4 text-black md:h-7 md:w-7'></FaPlay> play
                </button>
                <button className='bannerButton bg-[gray]/70'>More Info</button>
                <button>hello</button>
            </div>
        </div >

    );
}

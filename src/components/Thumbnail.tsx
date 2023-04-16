import React from 'react';
import { Movie } from '../../typings';
import Image from 'next/legacy/image';

interface Props {
    movie: Movie
}

export default function Thumbnail({ movie }: Props) {
    return (
        <div>
            { <Image
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path }`}
                className="rounded-sm w-24 h-24 object-cover md:rounded"
                width={900}
                height={900}
                //layout="fill"

            /> }
            
        </div>
    );
}

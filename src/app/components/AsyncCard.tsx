"use client"
import { Calistoga } from "next/font/google";

import { useEffect, useState } from "react"
import Image from "next/image";

const calistoga = Calistoga({ subsets: ['latin'], weight: '400' })

export function AsyncCard() {

    const [data, setData] = useState<any>(null);

    const apikey = '4608e853ae2462dc9874d13bfc5505f5'
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=pt-BR&page=1`

    useEffect(() => {
        const requestAPI = async () => {
            try {
                const response = await fetch(url)
                const json = await response.json();
                setData(json);
                console.log(json)
            } catch (err) {
                console.error("Request falhou.", err);
            }
        }

        requestAPI();
    }, [])

    return (
        <div className="w-full lg:max-w-[1200px] xl:max-w-[1900px] flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4 p-4">
            {data && data.results && data.results.map((movie: any) => (
                <div
                    key={movie.id}
                    className="bg-zinc-800 p-4 flex flex-col justify-center items-center w-full h-[500px] md:w-2/5 xl:w-1/4 rounded-lg
             hover:shadow-xl shadow-zinc-700 transition-all duration-500 relative overflow-hidden hover:-translate-y-3 group"
                >
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt="Poster"
                        width={250}
                        height={300}
                        className="object-contain"
                        unoptimized={true}
                    />
                    <h1 className={`${calistoga.className} text-2xl uppercase font-bold z-10`}>{movie.title}</h1>
                    <p className="z-10">{movie.release_date}</p>
                    <p className="font-bold text-xl text-green-600 z-10">Nota: {movie.vote_average}</p>

                    <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm text-white p-4
               opacity-0 translate-y-full group-hover:opacity-90 group-hover:translate-y-0
               transition-all duration-500 flex flex-col justify-center items-start text-justify z-20"
                    >
                        <span className="font-bold text-lg mb-2">Sinopse:</span>
                        <p className="text-sm">{movie.overview}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
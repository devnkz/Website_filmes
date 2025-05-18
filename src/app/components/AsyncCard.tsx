"use client";
import { Calistoga } from "next/font/google";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const calistoga = Calistoga({ subsets: ["latin"], weight: "400" });

export function AsyncCard() {
    const [data, setData] = useState<any>(null);

    const apikey = "4608e853ae2462dc9874d13bfc5505f5";
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=pt-BR&page=1`;

    useEffect(() => {
        const requestAPI = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
                console.log(json);
            } catch (err) {
                console.error("Request falhou.", err);
            }
        };

        requestAPI();
    }, []);

    return (
        <div className="w-full lg:max-w-[1200px] xl:max-w-[1900px] flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4 p-4">
            {!data ? (
                <div className="flex flex-col items-center justify-center">
                    <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-red-500 mb-4"></div>
                    <h1>Carregando filmes aguarde um momento por favor...</h1>
                </div>
            ) : (
                data.results &&
                data.results.map((movie: any, index: number) => (
                    <motion.div
                        key={movie.id}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="bg-zinc-800 p-4 flex flex-col justify-center items-center w-full h-[500px] md:w-2/5 xl:w-1/4 rounded-lg
                            hover:shadow-xl shadow-zinc-900 transition-all duration-500 relative overflow-hidden hover:-translate-y-3 group"
                    >
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt="Poster"
                            width={250}
                            height={300}
                            className="object-contain"
                            unoptimized={true}
                        />
                        <h1 className={`${calistoga.className} text-2xl uppercase font-bold z-10`}>
                            {movie.title}
                        </h1>
                        <p className="z-10">{movie.release_date}</p>
                        <p className="font-bold text-xl text-green-600 z-10">
                            Nota: {movie.vote_average}
                        </p>

                        <div className="absolute inset-0 bg-black bg-opacity-100 backdrop-blur-sm text-white p-4
                            opacity-90 translate-y-0 md:opacity-0 md:translate-y-full md:group-hover:opacity-98 md:group-hover:translate-y-0
                            transition-all duration-500 flex flex-col justify-center items-start text-justify z-20"
                        >
                            <h2 className="font-bold text-lg mb-2">Nome: {movie.title}</h2>
                            <span className="font-bold text-lg mb-2">Sinopse:</span>
                            <p className="text-xs leading-relaxed">{movie.overview}</p>
                        </div>
                    </motion.div>
                ))
            )
            }
        </div >
    );
}

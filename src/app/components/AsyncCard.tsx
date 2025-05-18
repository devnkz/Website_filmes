import { useEffect, useState } from "react";
import Image from "next/image";

export function AsyncCard() {
    const [data, setData] = useState<any>(null);
    const [openCardId, setOpenCardId] = useState<number | null>(null); // controla o card aberto no mobile

    const apikey = '4608e853ae2462dc9874d13bfc5505f5';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=pt-BR&page=1`;

    useEffect(() => {
        const requestAPI = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (err) {
                console.error("Request falhou.", err);
            }
        };

        requestAPI();
    }, []);

    return (
        <div className="w-full lg:max-w-[1200px] flex flex-wrap gap-4 p-4">
            {data?.results?.map((movie: any) => {
                const isOpen = openCardId === movie.id;

                return (
                    <div
                        key={movie.id}
                        className="bg-zinc-800 p-4 flex flex-col justify-center items-center w-full h-[500px] md:w-2/5 xl:w-1/4 rounded-lg
              hover:shadow-xl shadow-zinc-700 transition-all duration-500 relative overflow-hidden 
              md:hover:-translate-y-3 group hidden md:block"
                        onClick={() => {
                            if (typeof window !== "undefined" && window.innerWidth < 768) {
                                setOpenCardId(prev => (prev === movie.id ? null : movie.id));
                            }
                        }}
                    >
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt="Poster"
                            width={250}
                            height={300}
                            className="object-contain"
                            unoptimized={true}
                        />
                        <h1 className="text-2xl uppercase font-bold z-10 text-white">{movie.title}</h1>
                        <p className="z-10 text-white">{movie.release_date}</p>
                        <p className="font-bold text-xl text-green-600 z-10">Nota: {movie.vote_average}</p>

                        <div className={`
  absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm text-white p-4
  flex flex-col justify-center items-start text-justify z-20 transition-all duration-500
  ${isOpen ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-full hidden'}
  md:group-hover:opacity-90 md:group-hover:translate-y-0 md:block
`}>
                            <span className="font-bold text-lg mb-2">Sinopse:</span>
                            <p className="text-sm">{movie.overview}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

import { Montserrat } from 'next/font/google'
import { AsyncCard } from '../components/AsyncCard'

const montserrat = Montserrat({ subsets: ['latin'], weight: '400' })

export default function TelaPrincipal() {
    return (
        <div className={`${montserrat.className} bg-zinc-900 flex flex-col justify-center items-center`}>
            <div
                className="relative w-full flex justify-center items-center"
                style={{
                    backgroundImage: "url(/imagem/fundo.webp)",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    height: "50vh",
                }}
            >
                <div
                    className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
                    style={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.8) 90%, rgba(0,0,0,0) 100%)",
                        backdropFilter: "blur(2px)",
                    }}>
                </div>
                <div className="w-full lg:max-w-[1200px] xl:max-w-[1900px] h-full flex flex-col justify-center items-center gap-4">
                    <h1 className="text-3xl md:text-6xl z-50">Últimos <span className='font-bold text-red-600'>Lançamentos</span></h1>
                    <p className='text-sm md:text-base z-50 w-3/4 text-justify'>Bem-vindo ao seu espaço para ficar por dentro dos filmes mais recentes! Este site foi feito para quem quer se atualizar de forma rápida e prática.
                        Aqui, você encontra apenas o que realmente importa: o nome do filme, sua nota/avaliação e uma sinopse breve para entender do que se trata.
                        Sem trailers, sem propagandas, sem distrações — apenas as informações essenciais para você escolher o próximo filme com facilidade.
                    </p>
                </div>
            </div>
            <main className='w-full lg:max-w-[1200px] xl:max-w-[1900px] flex flex-col justify-center items-center border-t-2 border-red-600'>
                <h2 className="text-center font-extrabold text-2xl md:text-4xl py-10 px-4 text-red-600 drop-shadow-lg">
                    Confira os Filmes Mais Recentes!
                </h2>
                <AsyncCard />
            </main>

            <footer className="w-full bg-zinc-950 text-zinc-300 py-8 mt-12 flex flex-col items-center border-t border-zinc-800">
                <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-6 px-4">
                    <div className="text-center md:text-left">
                        <span className="font-semibold text-lg">Desenvolvido por Nyckolas</span>
                    </div>
                    <div className="flex flex-col items-center md:items-end">
                        <span className="font-semibold mb-2">Minhas redes</span>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/devnkz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-red-500 transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://nyckz.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-red-500 transition-colors"
                            >
                                Portfólio
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nyckolas-undefined-853b08297/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-red-500 transition-colors"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    )
}
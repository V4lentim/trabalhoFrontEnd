import { Data } from "../../Data/Data";

export const Card = (props) => {

    return (
        <>
            <div className="group bg-[#1a1c22] border border-[#2d3038] rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:border-purple-500 w-full flex flex-col h-full hover:scale-[1.02] ">
                <div className="p-5 flex flex-col flex-grow transition-all duration-500 ease-in-out">
                    <h4 className="text-gray-100 text-xl font-bold truncate mb-2 uppercase tracking-wider shrink-0">{props.nome}</h4>
                </div>

                <div className="relative h-64 w-full shrink-0 overflow-hidden border-b border-[#2d3038]/50 flex items-center justify-center">
                    <img src={props.imagem} alt={props.nome} className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-110" />
                    <img src={props.imagem} alt={props.nome} className="relative max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 z-10" />
                    <div className="absolute inset-0 bg-[#111215]/50 z-0"></div>
                </div>
                <h2 className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-500 flex-grow">{props.descricao}</h2>

                <div className="mt-auto pt-4 border-t border-[#2d3038] flex flex-col gap-4">
                    <p className="bg-[#111215] text-purple-400 text-[10px] uppercase font-extrabold px-3 py-1.5 rounded-lg tracking-widest whitespace-nowrap shadow-inner">{props.tipo}</p>
                </div>

                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm py-2 rounded-lg font-bold transition-colors">ADQUIRIR AGORA</button>
            </div>
        </>
    )

}
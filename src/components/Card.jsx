export const Card = (props) => {
  return (
    <>
      <div className="bg-[#1a1c22] border border-[#2d3038] rounded-xl overflow-hidden shadow-lg w-full flex flex-col h-full hover:border-purple-500 transition-colors">
        
        <div className="p-5 flex flex-col h-full gap-4">
  
          <h4 className="text-gray-100 text-xl font-bold truncate uppercase tracking-wider">
            {props.nome}
          </h4>

          <div className="relative h-48 w-full overflow-hidden rounded-lg border border-[#2d3038]/50 flex items-center justify-center bg-[#111215]">
            <img 
              src={props.imagem} 
              alt={props.nome} 
              className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30" 
            />
            <img 
              src={props.imagem} 
              alt={props.nome} 
              className="relative max-w-full max-h-full object-contain z-10" 
            />
          </div>

          <div className="flex-grow">
            <h2 
              className="text-gray-400 text-sm leading-relaxed line-clamp-2 cursor-help"
              title={props.descricao} 
            >
              {props.descricao}
            </h2>
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <span className="bg-[#111215] text-purple-400 text-[10px] uppercase font-extrabold px-3 py-1.5 rounded-lg tracking-widest shadow-inner">
                    {props.tipo}
                </span>
            </div>
            
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs py-2.5 rounded-lg font-bold transition-colors">
                ADQUIRIR AGORA
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
};
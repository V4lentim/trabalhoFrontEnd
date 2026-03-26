import { useState } from "react";

export const Header2 = () => {

  return (
    <>
      <header className="fixed top-20 left-0 w-full z-50 flex items-center justify-between p-2 bg-[#1A1A1A] border-b border-purple-900/50">
        
        <button
          class="
            flex items-center gap-2
            bg-[#232836]
            text-gray-300
            px-4 py-2
            rounded-lg
            border border-[#2f3646]
            shadow-sm
            hover:bg-[#2c3446]
            hover:text-purple-400
            hover:border-purple-500
            active:scale-95
            transition-all duration-200"
        >
          ☰ <span className="font-medium">Categorias</span>
        </button>

        <button className=" 
            btn           
            flex items-center gap-2
            bg-[#232836]
            text-gray-300
            px-4 py-2
            rounded-lg
            border border-[#2f3646]
            shadow-sm
            hover:bg-[#2c3446]
            hover:text-purple-400
            hover:border-purple-500
            active:scale-95
            transition-all duration-200"
        >
          <span className="font-medium">Plataformas</span>
        </button>

        <button className="            
            btn           
            flex items-center gap-2
            bg-[#232836]
            text-gray-300
            px-4 py-2
            rounded-lg
            border border-[#2f3646]
            shadow-sm
            hover:bg-[#2c3446]
            hover:text-purple-400
            hover:border-purple-500
            active:scale-95
            transition-all duration-200"
        >
          <span className="font-medium">Novidades</span>
        </button>

        <button className="             
            btn           
            flex items-center gap-2
            bg-[#232836]
            text-gray-300
            px-4 py-2
            rounded-lg
            border border-[#2f3646]
            shadow-sm
            hover:bg-[#2c3446]
            hover:text-purple-400
            hover:border-purple-500
            active:scale-95
            transition-all duration-200"
        >
          <span className="font-medium">Suporte</span>
        </button>
      </header>
    </>
  );
};
import { useState } from "react";
import Data from "../../Data/Data";

export const BotaoCategoria = (props) => {
  const [open, setOpen] = useState(false);

  const genero = [
    "Todos",
    "Mundo Aberto",
    "Sandbox",
    "Survival Horror",
    "Life Simulator",
    "Ação",
    "Aventura",
    "Plataforma",
    "RPG",
    "JRPG",
    "Sobrevivência",
    "Key",
    "Exploração",
    "Hack 'n Slash",
    "Stealth Action",
    "Terror Psicológico",
    "J-Horror",
    "Action RPG",
    "Soulslike",
    "Ficção Científica",
  ];

  function handleGenero(generoClicado) {
    const itens = Data(); // seu Data é função

    if (generoClicado === "Todos") {
      props.setData(itens);
    } else {
      const categoriaFiltrada = itens.filter((item) =>
        item.tipo.some((tipo) =>
          tipo.toLowerCase() === generoClicado.toLowerCase()
        )
      );

      props.setData(categoriaFiltrada);
    }

    setOpen(false); // fecha menu
  }

  return (
    <>
      {/* BOTÃO ABRIR */}
      <button
        onClick={() => setOpen(!open)}
        className="text-white bg-purple-700 px-4 py-2 rounded"
      >
        ☰ Categorias
      </button>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1A1A1A] shadow-lg transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h2 className="text-white p-4 text-lg border-b border-purple-800">
          Categorias
        </h2>

        <div className="flex flex-col">
          {genero.map((gen) => (
            <button
              key={gen}
              onClick={() => handleGenero(gen)}
              className="text-white text-left px-4 py-3 hover:bg-purple-800 transition"
            >
              {gen}
            </button>
          ))}
        </div>
      </div>

      {/* OVERLAY (FUNDO ESCURO) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};
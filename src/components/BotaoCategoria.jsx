import { useState, useEffect } from "react";
import Data from "../../Data/Data";
import { Genero } from "./Genero";

export let gn = [];

export const BotaoCategoria = (props) => {
  const [open, setOpen] = useState(false);
  const [selecionados, setSelecionados] = useState([]);

  function handleCheckbox(gen) {
    let novosSelecionados;
    if (selecionados.includes(gen)) {
      novosSelecionados = selecionados.filter((g) => g !== gen);
    } else {
      novosSelecionados = [...selecionados, gen];
    }
    gn = novosSelecionados;
    setSelecionados(novosSelecionados);
  }

  function limparFiltros() {
    gn = [];
    setSelecionados([]);
  }

  useEffect(() => {
    const todosOsItens = Data();
    if (selecionados.length === 0) {
      props.setData(todosOsItens);
    } else {
      const filtrados = todosOsItens.filter((item) =>
        selecionados.every((gen) => item.tipo.includes(gen))
      );
      props.setData(filtrados);
    }
  }, [selecionados]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="text-white bg-purple-700 px-4 py-2 rounded transition-all duration-300 hover:bg-purple-800 hover:scale-105"
      >
        ☰ Categorias
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1A1A1A] shadow-lg transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h2 className="text-white p-4 text-lg border-b border-purple-800">
          Categorias
        </h2>

        <div className="p-4">
          <button
            onClick={limparFiltros}
            className="w-full text-white bg-purple-600 py-2 rounded transition-all duration-300 hover:bg-purple-700 hover:scale-[1.02]"
          >
            Limpar filtros
          </button>
        </div>

        <div className="flex flex-col overflow-y-auto max-h-[calc(100vh-140px)]">
          {Genero.map((gen) => (
            <label
              key={gen}
              className="flex items-center gap-2 text-white px-4 py-3 hover:bg-purple-800 transition cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selecionados.includes(gen)}
                onChange={() => handleCheckbox(gen)}
                className="accent-purple-600"
              />
              {gen}
            </label>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};
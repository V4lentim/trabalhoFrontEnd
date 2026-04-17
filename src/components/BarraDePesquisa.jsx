import { useState, useEffect } from "react";
import Data from "../../Data/Data";
import { gn } from "./BotaoCategoria";

export const BarraDePesquisa = (props) => {

    const [search, setSearch] = useState('');

    useEffect(() => {
        const items = Data();

        const results = items.filter((item) => {
            if (gn.length === 0) {
                return item.nome.toLowerCase().indexOf(search) !== -1;
            } else {
                return item.nome.toLowerCase().indexOf(search) !== -1 &&
                       gn.some((gen) => item.tipo.includes(gen));
            }
        });

        props.setData(results);
    }, [search]);

    function handleSearchChange(e) {
        setSearch(e.target.value.toLowerCase());
    }

    function handleOnSubmit(e) {
        e.preventDefault(); 
    }

    return (
        <>
            <div className="flex-1 mx-6">
                <form className="flex items-center" onSubmit={handleOnSubmit}>
                    <input
                        onChange={handleSearchChange}
                        type="text"
                        placeholder="Pesquisar..."
                        className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 font-bold border border-purple-900/50 rounded-r-md hover:bg-purple-900/50 transition-colors flex items-center justify-center"
                    >
                        🔍
                    </button>
                </form>
            </div>
        </>
    );
}
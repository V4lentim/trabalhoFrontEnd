import { useState, useEffect } from "react";
import Data from "../../Data/Data";
import { gn } from "./BotaoCategoria";


export const BarraDePesquisa = (props) => {

    const [search, setSearch] = useState('')

    useEffect(() => {

        const items = Data();
        const results = items.filter((item) => {
            if (gn == "Todos") {
                return item.nome.toLowerCase().indexOf(search) !== -1
            } else {
                return item.nome.toLowerCase().indexOf(search) !== -1 && item.tipo.includes(gn)
            }
        });
        props.setData(results);
    }, [search]);


    function handleSearchChange(e) {
        setSearch(e.target.value.toLowerCase())
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        setSearch(e.target.value.toLowerCase());
        const itens = Data();
        const results = itens.filter((item) => {
            if (gn == "Todos") {
                return item.nome.toLowerCase().indexOf(setSearch) !== -1
            } else {
                return item.nome.toLowerCase().indexOf(search) !== -1 && item.tipo.includes(gn)
            }

        });
        props.setData(results);
    }

    return (
        <>
            <div className="flex-1 mx-6">

                <div className="flex-1 mx-6">
                    <form className="flex items-center">
                        <input
                            onChange={handleSearchChange}
                            type="text"
                            placeholder="Pesquisar..."
                            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <button
                            onClick={handleOnSubmit}
                            type="submit"
                            className="px-4 py-2 font-bold border border-purple-900/50  rounded-r-md hover:bg-purple-900/50 transition-colors flex items-center justify-center">

                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="none" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6" />
                            </svg>
                        </button>
                    </form>
                </div>

            </div >
        </>
    );

}
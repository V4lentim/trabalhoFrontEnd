
import logo from "../assets/logo.png"
import { BarraDePesquisa } from "./BarraDePesquisa"

export const Header = (props) => {

     

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all flex items-center justify-between p-2 bg-[#1A1A1A] border-b border-purple-900/50 ">

            <button
                className="
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
                <span className="font-medium">☰</span>
            </button>

            <div className="flex items-center ">
                <img src={logo} alt="KeyDash-Logo" className="h-20 w-40" />
            </div>

            <BarraDePesquisa setData={props.setData} />

            <div className="flex gap-5   text-x1">
                <button>❤️</button>
                <button>🛒</button>
                <button>👤</button>
            </div>
        </header>
    )
}
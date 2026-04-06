
import logo from "../assets/logo.png"
import { BarraDePesquisa } from "./BarraDePesquisa"
import { BotaoCategoria } from "./BotaoCategoria"

export const Header = (props) => {

     

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all flex items-center justify-between p-2 bg-[#1A1A1A] border-b border-purple-900/50 ">

            <BotaoCategoria setData={props.setData}/>

            <div className="flex items-center ">
                <img src={logo} alt="KeyDash-Logo" className="h-20 w-40" />
            </div>

            <div className="flex gap-5   text-x1">
                <button>❤️</button>
                <button>🛒</button>
                <button>👤</button>
            </div>
        </header>
    )
}
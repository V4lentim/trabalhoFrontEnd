import logo from "../assets/logo.png"

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all flex items-center justify-between p-2 bg-[#1A1A1A] border-b border-purple-900/50">

            <div className="flex items-center ">
                <img src={logo} alt="KeyDash-Logo" className="h-20 w-40" />
            </div>

            <div class="flex-1 mx-6">
                <input 
                type="text"
                placeholder= "Buscar Jogos..."
                class="w-full bg-gray-800 text-white px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-500" 
                />
            </div>

            <div className="flex gap-5   text-x1">
                <button>❤️</button>
                <button>🛒</button>
                <button>👤</button>
            </div>
        </header>
    )
}
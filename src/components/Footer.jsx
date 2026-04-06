export const Footer = () => {
    return (
        <footer className="bg-[#111215] border-t border-[#2d3038] mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
                            KeyDash
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Sua jornada gamer começa aqui. Os melhores títulos, as melhores ofertas e entrega instantânea.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-gray-100 font-bold mb-4 uppercase text-xs tracking-widest">Ajuda</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-purple-400 transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Termos de Uso</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Privacidade</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Reembolso</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-100 font-bold mb-4 uppercase text-xs tracking-widest">Siga-nos</h3>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-[#1a1c22] border border-[#2d3038] rounded-lg flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition-all text-gray-400">
                                𝕏
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#1a1c22] border border-[#2d3038] rounded-lg flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition-all text-gray-400">
                                📷
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#1a1c22] border border-[#2d3038] rounded-lg flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition-all text-gray-400">
                                💬
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-[#2d3038]/50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs text-center md:text-left">
                        © 2026 KeyDash Store. Todos os direitos reservados. Desenvolvido por Erick e José.
                    </p>

                    <div className="flex gap-3 grayscale opacity-50">
                        <span className="text-[20px]">💳</span>
                        <span className="text-[20px]">🏦</span>
                        <span className="text-[20px]">💸</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
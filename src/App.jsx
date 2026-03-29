import { useState } from 'react'
import { Header } from './components/Header'
import { Header2 } from './components/Header2'
import { ListaJogos } from '../Data/ListaJogos'
import { Card } from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <div className='bg-[#111215] min-h-screen p-8'>
        <Header />
        <Header2 />

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
          {ListaJogos.map((jogo) => {
            return <>
              <Card key={jogo.id}
                titulo={jogo.nome}
                imagem={jogo.imagem}
                descricao={jogo.descricao}
                tipo={jogo.tipo}
              />
            </>
          })}
        </div>
      </div>
    </>
  )
}

export default App

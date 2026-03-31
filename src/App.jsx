import { useState } from 'react'
import { Header } from './components/Header'
import {Data} from '../Data/Data'
import { Card } from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <div className='bg-[#111215] min-h-screen p-8'>
        <Header />

        <br />
        <br />

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
          {Data.map((jogo) => {
            return <>
              <Card key={jogo.id}
                nome={jogo.nome}
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

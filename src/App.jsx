import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import Data from '../Data/Data'
import { Card } from './components/Card'
import './App.css'
import { Footer } from './components/Footer'
import { RenderizarCard } from './components/RenderizarCard'

function App() {

  const [data, setData] = useState([])



  useEffect(() => {
    setData(Data())
    document.title = "Keydash";
  }, [])

  return (
    <>
      <div className='bg-[#111215] min-h-screen'>
        <Header setData={setData} />

        <div className='p-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
           <RenderizarCard data={data} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App

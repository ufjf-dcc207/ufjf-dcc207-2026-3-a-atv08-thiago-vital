import './App.css'
import Pacote from './Pacote'
import type { PacoteType } from './types'
const data:Array<PacoteType> = [
  {
    id:'829d5f7a-b96d-457c-9c66-9b224b3e583e',
    largura: 20.0,
    altura: 30.0,
    profundidade: 40.0,
    peso: 2.34
  },
  {
    id:'8d0109d7-7d8f-4513-80dc-e69e86387566',
    largura: 40.0,
    altura: 20.0,
    profundidade: 30.0,
    peso: 3.42
  }
]

function App() {
  return (
    <section>
      <h2>Pacotes</h2>
      <div className='pacotes'>
        {data.map(p => <Pacote pacote={p} key={p.id}/>)}
      </div>
    </section>
  )
}

export default App

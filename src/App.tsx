import './App.css'
import ListagemDePacotes from './ListagemDePacotes'
import Pacote from './Pacote'
import type { PacoteType } from './types'
import { useState } from 'react'
const data:Array<PacoteType> = [
  {
    id:'829d5f7a-b96d-457c-9c66-9b224b3e583e',
    largura: 50.0,
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
  const [pacotes, setPacotes] = useState(data);

  function excluirPacote(id: string){
//    const novoPacotes = [];
//    for(let i = 0;i < pacotes.length; i++){
//      if (pacotes[i] !== pacote){
//        novoPacotes.push(pacotes[i])
//      }
//    }
//    setPacotes(novoPacotes);
  setPacotes(pacotes.filter(p=>p.id !== id));
  }

  return (
    <section>
      <h2>Pacotes</h2>
      <ListagemDePacotes />
    </section>
  )
}

export default App

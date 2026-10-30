import "./ListagemDePacotes.css";
import Pacote from "./Pacote";
import type { PacoteType } from "./types";
import { useState } from "react";

type ListagemDePacotesProps = {
    pacotes: Array<PacoteType>;
    acaoExcluir: (id: string)=>void;
}
export default function ListagemDePacotes({pacotes, acaoExcluir} : ListagemDePacotesProps){
    const [ordenacao, setOrdenacao] = useState("peso");

    function mudaOrdenacao(evento){
        setOrdenacao(evento.target.value);
    }
    return(
        <div>
            <div>Ordenar por: {ordenacao}
                <select onChange={mudaOrdenacao}>
                    <option value="altura">altura</option>
                    <option value="largura">largura</option>
                    <option value="peso">peso</option>
                    <option value="cubagem">cubagem</option>
                </select>
            </div>
            <dl>
                {pacotes
                .sort(x ,y) => {y[ordenacao] - x[ordenacao]
                .map(p => (<Pacote pacote={p} key={p.id} acaoExcluir={acaoExcluir}/>))}
                }
            </dl>
        </div>
    )
}
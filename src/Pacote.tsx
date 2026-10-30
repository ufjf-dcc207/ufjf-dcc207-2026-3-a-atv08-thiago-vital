import "./Pacote.css"
import type { PacoteType } from "./types";

type PacoteProps ={
    pacote: PacoteType;
    acaoExcluir: (id: string)=>void;
}
export default function Pacote({pacote, acaoExcluir}:PacoteProps){
    return(
        <div className = "pacote">
            <dt>id</dt>
            <dd title={pacote.id}>{pacote.id.substring(0,8)}</dd> {/*"title" mostra codigo completo com o mouse em cima*/}
            <dt>Largura</dt>
            <dd>{pacote.largura}</dd>
            <dt>Altura</dt>
            <dd>{pacote.altura}</dd>
            <dt>Profundidade</dt>
            <dd>{pacote.profundidade}</dd>
            <dt>Peso</dt>
            <dd>{pacote.peso}</dd>
            <dt>Cubagem</dt>
            <dd>{(400*pacote.altura/100*pacote.largura/100*pacote.profundidade/100)}</dd>
            <dd>
                <button onClick={()=>{acaoExcluir(pacote.id)}}>Excluir</button>
            </dd>
        </div>
    )
}
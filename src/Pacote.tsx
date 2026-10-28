import "./Pacote.css"
import type { PacoteType } from "./types";

type PacoteProps ={
    pacote: PacoteType;
}
export default function Pacote({pacote}:PacoteProps){
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
        </div>
    )
}
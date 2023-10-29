import styled from "styled-components"
import {Link } from "react-router-dom"

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

const Opcoes = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    min-width: 120px;
    font-size: 16;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((text) => (
                <Link to={`/${text.toLowerCase()}`}><Opcao><p>{text}</p></Opcao></Link>
            ))}
        </Opcoes>
    )
}
export default OpcoesHeader
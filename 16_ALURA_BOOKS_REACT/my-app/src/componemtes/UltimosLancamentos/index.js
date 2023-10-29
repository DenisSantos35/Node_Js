import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import { Titulo } from '../Titulo'
import Recomendacoes from '../CardRecomenda'
import livro2 from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #ebecee;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;

`


function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor='#eb9b00' tamanhoFonte="36px" alinhamento="center">ÚLTIMOS LANCAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map((livro) => (
                    <img src={livro.src}></img>
                ))}
            </NovosLivrosContainer>
            <Recomendacoes
            titulo="Talvez voce se interesse por..."
            subtitulo="Angular 11"
            descricao="Construindo uma aplicação com a plataforma Google"
            imagem={livro2}
            />
                
           
            
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos
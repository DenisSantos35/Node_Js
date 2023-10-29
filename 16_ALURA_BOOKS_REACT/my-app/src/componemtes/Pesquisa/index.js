import styled from "styled-components"
import Input from "../Input"
import { useEffect, useState } from "react"
import { getLivros } from "../../servicos/livros"

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002f52 35%, #326589 100%);
    color: #fff;
    text-align: center;
    padding: 85px 0;
    height: 130vh;
    width: 100%;
`
const Titulo = styled.h2`
    color: #fff;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3` 
    font-size: 16px; 
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p{
        width: 200px;
    }

    img{
        width: 100px;
    }

    &:hover{
        border: 1px solid white;
    }
`


function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([]) // busca dados no back end
    
    //chama funcao de busca  useEfect roda na inicialização da página
    useEffect(()=>{
        fetchLivros()
    }, [])//so sera preenchido quando a página entrar e ser montada

    async function fetchLivros(){
        const livroDaAPI = await getLivros()
        setLivros(livroDaAPI)
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input placeholder="Escreva sua próxima leitura"
                onBlur={(event) => {
                    const text = event.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(text))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            ></Input>
            {livrosPesquisados.map((livro) => (
                <Resultado>                    
                    <img src={livro.src}></img>
                    <p>{livro.nome}</p>
                </Resultado>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa
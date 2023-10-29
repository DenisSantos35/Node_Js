import axios from 'axios'

// cria uma conecção com backend
const livrosAPI = axios.create({
    baseURL:"http://localhost:8000/books"
})// conecta com a url e recupera a api

async function getLivros(){
    const response = await livrosAPI.get('/')
    return response.data
}

export {
    getLivros
}
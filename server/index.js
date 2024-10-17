import {createServer} from 'node:http'


const servidor = createServer((request, response) => {
    console.log('qualquer coisa')
    response.write('ta funcionando')

    return response.end()
})

servidor.listen(8000)

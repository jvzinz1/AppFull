import Express from "express";
import { criarTabelas } from "./db.js";
import cors from "cors"
import { rotas } from './roteamento/authRoute.js'
import { rotas_users } from './roteamento/rotasUsuarios.js'
import { rotas_artistas } from './roteamento/rotasArtistas.js'
import { rotas_albums } from "./roteamento/rotasAlbum.js";


const app = Express()
app.use(Express.json())
app.use(cors())


app.use('/autenticacao', rotas)
app.use('/user', rotas_users)
app.use('/artista', rotas_artistas)
app.use('/album', rotas_albums)


app.listen(5432)
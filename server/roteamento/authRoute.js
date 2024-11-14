import {login, registro} from "../Controlador/authControl.js"
import express from "express"

const rotas = express.Router()

rotas.post('./registro', registro)
rotas.post('./login', login)

export {rotas}

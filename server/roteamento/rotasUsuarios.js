import {rotas} from './authRoute'
import {controlUser} from '../Controlador/userControl'

const listaUsuarios = express.Router()
listaUsuarios.get('./controlUser', controlUser)

export {listaUsuarios}
import bcryptjs from "bcryptjs";
import {User} from "../db.js";
import jsonwebtoken from "jsonwebtoken"

const registro = async (req, res) => {
    const {nome, sobrenome,email, senha, dataNascimento} =req.body
    if(!nome || !sobrenome || !senha || !email || !dataNascimento){
        res.send('voce deve preencher todos os campos')
    }
        const userExiste = await User.findOne({where: {email:email}})
        if(userExiste){
            res.send('usuario ja existe')
            return
        }
        const senhaCriptografada = bcryptjs.hashSync(senha, 10)

        const usuarioCriado = await User.create({nome, sobrenome, email, senha : senhaCriptografada, dataNascimento})
    //verificar se o usuario no banco de dados
    //encriptar a senha do usuario
    //salvar usuario no banco de dados
        res.send('ok usuario criado')
}



const login = async (req, res) => {
    const {email, senha} =req.body
    if(!senha || !email){
        res.send('voce deve preencher todos os campos')
    }
    const userExiste= await User.findOne({where:{email:email}})
    if(!userExiste){
        res.send('Este usuario não existe')
        return
    }
    const senhaValida = bcryptjs.compareSync(senha, userExiste.senha)
    if(!senhaValida){
        res.send('senha inválida')
        return
    }
    const token = jsonwebtoken.sign(
        {"nome_completo": `${userExiste.nome} ${userExiste.sobrenome}`,
        "email":userExiste.email,
        "status":userExiste.status
    },
    'chavecriptografiajwt',
    {expiresIn: 1000*60*5}
    )
    //verificar se o usuario no banco de dados
    //encriptar a senha do usuario
    //salvar usuario no banco de dados
    console.log(token)
    res.send({
            msg:'voce logou com sucesso',
            tokenjsonwebtoken:token
        })
    }


export {registro, login}

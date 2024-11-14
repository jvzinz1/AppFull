import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, Image} from "react-native";
import {Link} from 'expo-router'
    
export default SinUp = () => {
    //const email = ''

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [senha, setSenha] = useState('')

    const registrarUsuario = async function () {
        if (!nome || !email || !senha || !sobrenome || !dataNascimento) {
            console.log('Todos os campos devem ser preenchidos')
            return
        }
        const resposta = await fetch('http://localhost:8002/registro',{
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
            body: JSON.stringify({ nome: nome, email: email, senha: senha, dataNascimento : dataNascimento , sobrenome: sobrenome})
        })
        
    if (!resposta) {
        console.log('erro')
    } else if (resposta.status == 200) {
        console.log('user criado com sucesso')
    } else {
        console.log('ocorreu um erro')
    }
}


return (
    <SafeAreaView style={style.body}>
         <View >
            <Image style={style.imageJayzer} source={require('./assets/Jayzer.png' )}/>
        </View>
        <View style={style.botaotexto}>
            <Text style={style.texto}>Registro</Text>
        </View>
        <View>  
        <TextInput
                style={style.input}
                onChangeText={(text) => setNome(text)}
                value={nome}
                placeholder="Digite seu Nome"
            />
            <TextInput
                style={style.input}
                onChangeText={(text) => setSobrenome(text)}
                value={sobrenome}
                placeholder="Seu sobrenome"
            />
            <TextInput
                style={style.input}
                onChangeText={(text) => setDataNascimento(text)}
                value={dataNascimento}
                placeholder="Data de Nascimento(dia/mês/ano)"
                keyboardType="numeric"
            />
            <TextInput
                style={style.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Digite seu email"
            />
            <TextInput
                style={style.input}
                onChangeText={(text) => setSenha(text)}
                value={senha}
                placeholder="Sua senha"
                secureTextEntry={true}
            />

           <View style={style.botao}>
           <Link href={'/Login'}>
                <Pressable onPress={registrarUsuario}>
                    <Text style={style.textoCadastro}>Cadastrar</Text>
                </Pressable>
            </Link>
            </View>
            <View style={style.botaoPossui}>
                <Link href={'/Login'}>
                <Pressable>
                    <Text style={style.JaPossui}>Já possui Cadastro</Text>
                </Pressable>
                </Link>
            </View>

        </View>
    </SafeAreaView>

)
}

const style = StyleSheet.create({
    input:{
        backgroundColor:'white',
        padding:'5px',
        margin:'10px',
        width:'300px',
        borderRadius:'30px',
        borderColor: 'aqua',
        borderWidth : '2px',
        justifyContent:'center',
        
    },
    body:{
        alignItems:'center',
        backgroundColor: 'black',
        flex:1,
        justifyContent:'center'
    },
    
    texto:{
        color:'white',
        textAlign:'center',
        textShadowColor:'aqua',
        textShadowRadius:'15px',
        fontSize:'30px',
        textAlign:'center',
    },
    botao:{
        padding:'15px',
        margin:'10px',
        width:'300px',
        borderRadius:'30px',
        borderColor: 'aqua',
        borderWidth : '2px',
        backgroundColor:'#1693a5',
        alignItems:'center',
    },
    textoCadastro:{
        color:"white",
        textAlign:'center',
        color:'white',
        textAlign:'center',
        textShadowColor:'aqua',
        textShadowRadius:'15px',
        fontSize:'20px',
        textAlign:'center',

    },
    imageJayzer:{
        alignItems:'center',
        height:'200px',
        width:'300px',
        padding :'5px',
    },
    JaPossui:{
        color:'white',
        fontSize:'15px',
        textAlign:'center',
        padding:'1px',
        textDecorationColor:'aqua',
        textDecorationStyle:'solid',
        textDecorationLine: 'underline',
    }

})
import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, Image } from "react-native";

    
export default Login = () => {
    //const email = ''

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const LoginUsuario = async function () {
        if (!email || !senha) {
            console.log('Todos os campos devem ser preenchidos')
            return
        }
        const resposta = await fetch('http://localhost:8002/login',{
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
            body: JSON.stringify({email: email, senha: senha})
        })
        
    if (!resposta) {
        console.log('erro')
    } else if (resposta.status == 200) {
        console.log('Voce logou com sucesso')
    } else {
        console.log('ocorreu um erro')
    }
}



return (
    <SafeAreaView style={style.body}>
        <View >
            <Image style={style.imageJayzer} source={require('../assets/Jayzer.png' )}/>
        </View>
        <View style={style.botaologin}>
            <Text style={style.texto}>Login</Text>
        </View>
        <View>  
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
           <View style={style.redefinirSenha}>
                <Pressable>
                    <Text style={style.esqueceuSenha}>Esqueceu a senha</Text>
                </Pressable>
            </View>

           <View style={style.botaoEntrar}>
                <Pressable onPress={LoginUsuario}>
                    <Text style={style.textoBotao}>Entrar</Text>
                </Pressable>
            </View>

        </View>
    </SafeAreaView>

)
}

const style = StyleSheet.create({
    input:{
        backgroundColor:'white',
        padding:'15px',
        margin:'20px',
        width:'300px',
        borderRadius:'30px',
        borderColor: 'aqua',
        borderWidth : '2px',
        
    },
    body:{
        alignItems:'center',
        backgroundColor: 'black',
        flex:1,
    },
    
    texto:{
        color:'white',
        textAlign:'center',
        textShadowColor:'aqua',
        textShadowRadius:'15px',
        fontSize:'30px',
        margin:'10px',
        textAlign:'center',
    },
    botaoEntrar:{
        padding:'15px',
        margin:'20px',
        width:'300px',
        borderRadius:'30px',
        borderColor: 'aqua',
        borderWidth : '2px',
        backgroundColor:'#1693a5'
    },
    textoBotao:{
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
    esqueceuSenha:{
        color:'white',
        fontSize:'15px',
        textAlign:'center',
        padding:'1px',
        textDecorationColor:'aqua',
        textDecorationStyle:'solid',
        textDecorationLine: 'underline',
    }

})
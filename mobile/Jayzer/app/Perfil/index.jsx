import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, Image } from "react-native";

export default function Perfil(){

     
return (
    <SafeAreaView style={style.body}>
        <View >
            <Image style={style.perfilfoto} source={require('../assets/perfilfoto.jpg' )}/>
        </View>
        <View>
            <Text style={style.NomeUsuario}>Jvzinz1</Text>
        </View>
        <View>
        <View style={style.botaoMudarSenha}>
            <Pressable>
                <Text style={style.formasPagamento}>Formas de pagamento</Text>
            </Pressable>
        </View>   
        <View style={style.botaoMudarSenha}>
            <Pressable>
                <Text style={style.mudarSenha}>Trocar a senha</Text>
            </Pressable>
        </View>
        </View>
        <View >
            <Image style={style.Jayzer} source={require('../assets/Jayzer.png' )}/>
        </View>
    </SafeAreaView>

)
}

const style = StyleSheet.create({
    body:{
        alignItems:'center',
        backgroundColor: 'black',
        flex:1,
    },
    perfilfoto:{
        alignItems:'center',
        height:'200px',
        width:'200px',
        padding :'5px',
        marginTop:'50px',
        borderRadius: 100,
        borderColor: 'aqua',
        borderWidth: 2,
    },
    mudarSenha:{
        color:'white',
        fontSize:'15px',
        textAlign:'center',
        padding:'1px',
        textDecorationColor:'aqua',
        textDecorationStyle:'solid',
        textDecorationLine: 'underline',
        backgroundColor:'#1693a5',
        borderRadius:'5px',
        width:'200px',
        margin : 10,
    },
    Jayzer:{
        alignItems:'center',
        height:'150px',
        width:'150px',
        padding :'5px',
    },
    NomeUsuario:{
        margin:'10px',
        color:'white',
        fontSize:'15px',
        textAlign:'center',
        borderRadius:'5px',
        width:'200px'
    },
    formasPagamento:{
        color:'white',
        fontSize:'15px',
        textAlign:'center',
        padding:'1px',
        textDecorationColor:'aqua',
        textDecorationStyle:'solid',
        textDecorationLine: 'underline',
        backgroundColor:'#1693a5',
        borderRadius:'5px',
        width:'200px',
        margin: 10,
    }

})

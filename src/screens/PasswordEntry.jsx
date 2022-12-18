import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import Estilos from "../constants/Styles";
import Colors from "../constants/Colors";
import SociablyButton from "../components/SociablyButton";


export default function InterestsScreen({navigation}) {

    const usuario = {
       usuario:"hola",
       contra: "adios" 
    }
    const [password, setPassword] = useState(null)

    function handleClick(){
        if(password==usuario.contra){
            alert('contraseña correcta')
        }
        else{
            alert('contraseña incorrecta')
        }
    }
   

    return (
        <View style={styles.container}>
            <View style = {styles.header}>
                <Text style={{...Estilos.Subtitle, fontWeight: 'bold', fontSize: '1.25em'}}> Password </Text>
            </View>
            <TextInput
                onChangeText={setPassword}
                value = {password}
                placeholder="Enter Password"
                secureTextEntry={true}
                placeholderTextColor={'#6b6b6b'}
                clearTextOnFocus={true}
                style={{ padding: 10,width: '90%',borderBottomWidth: 2, borderBottomColor: Colors.palette.primary, marginBottom: 20}}>

            </TextInput>
        
            <View style={{alignItems:'center',width:'100%'}}>
                <View style = {{...styles.container,width: '90%', height: 'auto', marginBottom: 20}}>
                    <Text style={{...Estilos.Subtitle, fontSize: '0.9'}}>
                        By continuing, you agree to Sociably's 
                        <Text style={{fontWeight:'bold'}}> Terms of Service</Text> and confirm that you have read Sociably's 
                        <Text style = {{fontWeight: 'bold'}}> Privacy Policy</Text>
                    </Text>
                </View>    
                <SociablyButton buttonType={'darkButton'} text={"Next"} style={{padding: 10, fontSize: 10, backgroundColor: Colors.palette.primary}} onPress={handleClick}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    header:{
        backgroundColor: "#ebebeb",
        width: '100%',
        height: 'auto', 
        alignItems: 'center',
        paddingVertical: '10px', 
        marginBottom: 40
    },

    interest: {
        backgroundColor: '#fff',
        borderWidth: 1.5,
        borderColor: Colors.palette.secondary,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    interestText:{
        fontSize: 21,
        fontFamily: "Space Grotesk",
        color: Colors.palette.secondary,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 5,
        paddingRight: 5,
    },
    flex:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        alignContent: "flex-start",
        gap: "0.9rem",
        height: "50vh"
    }
})

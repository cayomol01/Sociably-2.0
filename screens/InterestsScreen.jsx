import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Estilos from "../constants/Styles";
import Colors from "../constants/Colors";
import SociablyButton from "../components/SociablyButton";

const interests = ["Memes","Comedia","Entretenimiento","Deportes","Videojuegos","Bares","Teatro","Karaoke","Juegos de Mesa","Baile","Estudio","Conciertos"]

export default function InterestsScreen({navigation}) {

    const [tags,setTags] = useState([])

    function InterestButton(props){
        const texto = props.text
        const [toggle, setToggle] = useState(false)
        const toggleFunction = () => {
            setToggle(!toggle)
            let temp = tags
            temp.push(texto)
            setTags(temp)
        }
        return (
            <TouchableOpacity style={{...styles.interest,...toggle ? {borderColor: Colors.palette.primary}:{}}}>
                <Text style={{...styles.interestText,...toggle ? {color:Colors.palette.primary}:{}}} onPress={()=>{toggleFunction()}}>
                    {texto}
                </Text>
            </TouchableOpacity>
        )
    }

    function getTags(){
        let temp = tags
        let meme
        let res = []
        while (temp.length > 0){
            meme = temp.pop()
            if (temp.indexOf(meme) >= 0){
                temp.splice(temp.indexOf(meme),1)
            } else {
                res.push(meme)
            }
        }
        console.log(res);
        return res
    }


    return (
        <View style={styles.container}>
            <Image style={{width:"10rem", height:"8rem"}} source={require("../assets/icon.png")}/>
            <Text style={Estilos.Title}> Choose your interests </Text>
            <Text style={{...Estilos.Subtitle, marginBottom: 40}}> Personalize your feed </Text>
            <View style={styles.flex}>
                {interests.map((x) => (
                    <InterestButton text={x}/>
                ))}
            </View>
            <View style={{alignItems:'center',justifyContent:'center',width:'100%'}}>
                <SociablyButton buttonType={'lightButton'} text={"Skip"} onPress={()=>{console.log("Skiping")}}/>
                <SociablyButton buttonType={'darkButton'} text={"Next"} onPress={()=>{getTags()}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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

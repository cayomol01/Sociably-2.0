import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import Estilos from "../constants/Styles";

export default function SociablyButton(props){
    const styles = props.style
    const textStyles = props.styleText
    const buttonType = props.buttonType
    const texto = props.text
    const press = props.onPress
    return (
        <TouchableOpacity style={{...Estilos[buttonType],...styles}} onPress={press}>
            <Text style={{...Estilos[buttonType].text,...textStyles}}>
                {texto}
            </Text>
        </TouchableOpacity>
    )
}

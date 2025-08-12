import React from "react";
import {TouchableOpacity,Text} from 'react-native'
import { styles } from "./styles";

type ButtonProps ={
    name: string
}

export default function Button(props: ButtonProps){
    return(
        <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.textButton} >{props.name}</Text>
        </TouchableOpacity>
    )
}
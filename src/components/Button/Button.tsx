import React from "react";
import {TouchableOpacity,Text, View} from 'react-native'
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from "@expo/vector-icons";

// Removed invalid import

type ButtonProps ={
    name: string
    onPress: () => void | Promise<void>
    nameIcon : keyof typeof FontAwesome.glyphMap
    
}

export default function Button(props: ButtonProps){
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.btnStyle}>
            <View style={styles.buttonOrg}>
                <FontAwesome style={{marginRight: 8}} name={props.nameIcon} size={25} color="white" />
                <Text style={styles.textButton}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}
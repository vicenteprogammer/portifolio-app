import React from "react";
import {View, Text} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { FontAwesome } from "@expo/vector-icons";
 
type IconProps ={
    nameIcon : string
}

export default function SkillBox(props: IconProps){
    return(
        <View style={{marginBottom: 15}}>
            <Text> <FontAwesome5 name={props.nameIcon} size={24} color='#1E90FF' /> : <FontAwesome name="star" size={24} color='#1E90FF' />
            <FontAwesome name="star" size={24} color='#1E90FF' />
            <FontAwesome name="star" size={24} color='#1E90FF' />
            <FontAwesome name="star" size={24} color='#1E90FF' />
            <FontAwesome name="star" size={24} color='#1E90FF' />
             </Text>
        </View>
    )
}
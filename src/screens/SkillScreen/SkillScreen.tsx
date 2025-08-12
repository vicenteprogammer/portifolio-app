import React from "react";
import { View, Text } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import ImageView from "../../components/ImageView/ImageView";

export default function SkillScreen(){
    return(
        <View style={styles.container}>
           <StatusBar style="auto"/>
           <ImageView/>
        </View>
    )
}
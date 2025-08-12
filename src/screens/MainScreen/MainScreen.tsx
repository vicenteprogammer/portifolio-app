import React from "react";
import {View, Text} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles";
import ImageView from "../../components/ImageView/ImageView";
import Button from "../../components/Button/Button";

export default function MainScreen(){
    return(
        <View style={styles.container}>
            <Text style={{}}>Mobile Developer</Text>
            <StatusBar style="auto" />
            <View style={{flex: 1, marginTop: 160}} >
                <ImageView/>
            </View>
            <Text style={{marginBottom: 30, fontSize: 30, fontWeight: 'bold', color: '#1E90FF'}} >Vicente Junior</Text>
           <View style={styles.button} >
            <Button name="Likedin" />
            <Button name="GitHub" />
            <Button name="Email" />
           </View>
        </View>
    )
}
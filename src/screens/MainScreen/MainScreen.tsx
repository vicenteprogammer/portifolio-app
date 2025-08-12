import React from "react";
import {View, Text, Linking, Alert,} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles";
import ImageView from "../../components/ImageView/ImageView";
import Button from "../../components/Button/Button";

export default function MainScreen(){
    const abrirLikedin = async () =>{
        const url = 'https://www.linkedin.com/in/vicentejuniorprogammer/'
        const suportado = await Linking.canOpenURL(url);

      if (suportado) {
        await Linking.openURL(url);
      } else {
       Alert.alert(`Não foi possível abrir o link: ${url}`);
      }
    }

    const abrirGithub = async () =>{
        const url = 'https://github.com/vicenteprogammer'
        const suportado = await Linking.canOpenURL(url);

      if (suportado) {
        await Linking.openURL(url);
      } else {
       Alert.alert(`Não foi possível abrir o link: ${url}`);
      }
    }

    const abrirEmail = async () =>{
        const url = ' https://mail.google.com'
        const suportado = await Linking.canOpenURL(url);

      if (suportado) {
        await Linking.openURL(url);
      } else {
       Alert.alert(`Não foi possível abrir o link: ${url}`);
      }
    }


    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={{flex: 1, marginTop: 160}} >
                <ImageView/>
            </View>
            <Text style={{marginBottom: 30, fontSize: 30, fontWeight: 'bold', color: '#1E90FF'}} >Vicente Junior</Text>
           <View style={styles.button} >
            <Button onPress={abrirLikedin} nameIcon="linkedin" name="LikedIn" />
            <Button onPress={abrirGithub} nameIcon="github" name="GitHub" />
            <Button onPress={abrirEmail} nameIcon="envelope" name="Email" />
           </View>
        </View>
    )
}
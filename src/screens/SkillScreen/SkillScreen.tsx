import React from "react";
import { View, Text, Linking, Alert } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import ImageView from "../../components/ImageView/ImageView";
import SkillBox from "../../components/SkillBox/SkillBox";
import Button from "../../components/Button/Button";

export default function SkillScreen(){

    const talkMe = async () =>{
        const url = 'https://www.linkedin.com/in/vicentejuniorprogammer/'
         const suportado = await Linking.canOpenURL(url);
        
        if (suportado) {
            await Linking.openURL(url);
        } else {
               Alert.alert(`Não foi possível abrir o link: ${url}`);
        }
    }

    return(
        <View style={styles.container}>
           <StatusBar style="auto"/>
           <View style={{flex: 1, marginTop: 160}} >
                 <ImageView/>
            </View>
            <View style={styles.containerSkill} >
                <Text style={styles.textStyle} >Skills</Text>
                <SkillBox nameIcon="react" />
                <SkillBox nameIcon="js" />
                <SkillBox nameIcon="html5" />
                <SkillBox nameIcon="css3" />
                <SkillBox nameIcon="node" />
            </View>
            <View style={styles.btn}>
                <Button onPress={talkMe} nameIcon="linkedin" name="Talk Me" />
            </View>
            
        </View>
    )
}
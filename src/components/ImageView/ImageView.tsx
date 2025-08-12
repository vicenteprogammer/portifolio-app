import React from "react";
import { View, Image, Text } from "react-native";
import imageApp from '../../../assets/image.jpg'
import { styles } from "./styles";
export default function ImageView(){
    return(
        <View style={{marginBottom: 1000}} >
            <Image style={styles.imageStyle} source={imageApp}/>
        </View>
    )
}
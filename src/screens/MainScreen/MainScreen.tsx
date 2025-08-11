import React from "react";
import {View, Text} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles";

export default function MainScreen(){
    return(
        <View style={styles.container}>
            <Text>Main screen Works</Text>
            <StatusBar style="auto" />
        </View>
    )
}
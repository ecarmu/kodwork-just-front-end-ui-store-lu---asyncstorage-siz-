import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./ButtonStyle"

const Button = ({name, onPress}) => {

    return (
        <View style = {styles.container} >
            <TouchableOpacity onPress={onPress}>
                <Image />
                <Text>{name}</Text>
            </TouchableOpacity>
            
        </View>
    )
    
}

export default Button
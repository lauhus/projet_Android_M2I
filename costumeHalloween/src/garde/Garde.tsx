import {View , Text, Image, Button} from "react-native";
import React from 'react';
import styles from './style/garde.style';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";


export function Garde() {
    const navigation = useNavigation();
    return (<View style={styles.background}>
        <Image style={styles.image} source={require('../assets/logoGarde.png')} />
        <View style={styles.buttonBg}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('/accueil')}>
            <Text style={styles.texteGarde}>Me déguiser</Text>
        </TouchableOpacity>
        </View>
        <Image style={styles.deco} source={require('../assets/decoGarde.png')} />
    </View>);
}
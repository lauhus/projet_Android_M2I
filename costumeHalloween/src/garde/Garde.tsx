import {View , Text, Image, Button} from "react-native";
import React from 'react';
import styles from './style/garde.style';
import { TouchableOpacity } from "react-native-gesture-handler";

export function Garde() {

    return (<View style={styles.background}>
        <Image style={styles.image} source={require('../assets/logoGarde.png')} />
        <View style={styles.buttonBg}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.texteGarde}>Me déguiser</Text>
        </TouchableOpacity>
            {/* <Button
            // onPress={onPressLearnMore}
            title="Me déguiser"
            color="black"
            /> */}
        </View>
        <Image style={styles.deco} source={require('../assets/decoGarde.png')} />
    </View>);
}
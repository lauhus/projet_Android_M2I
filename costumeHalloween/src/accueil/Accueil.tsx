import {View , Text, TouchableOpacity} from "react-native";
import React from 'react';
import styles from './style/accueil.style';
import { RadioButton } from 'react-native-paper';


export function Accueil() {
    const [value, setValue] = React.useState('first');
    const [valueLicense, setValueLicense] = React.useState('firstLicense');
    return (
    <View style={styles.background}>
        <View style={styles.backgroundTitle}>
            <Text style={styles.title}>Accueil</Text>
        </View>
        <View style={styles.backgroundGenre}>
            <Text style={styles.genre}>Genre</Text>
        </View>
        <RadioButton.Group
        onValueChange={(newValue) => setValue(newValue)}
        value={value}>
            <TouchableOpacity style={styles.mainWrapper} onPress={()=>setValue('first')}>
                <RadioButton value="first" color="black"/>
                <Text style={styles.mainWrapperTexte}>Femme</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainWrapper} onPress={()=>setValue('second')}>
                <RadioButton value="second" color="black"/>
                <Text style={styles.mainWrapperTexte}>Homme</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainWrapper} onPress={()=>setValue('third')}>
                <RadioButton value="third" color="black"/>
                <Text style={styles.mainWrapperTexte}>Autre</Text>
            </TouchableOpacity>
        </RadioButton.Group>
        <View style={styles.backgroundLicense}>
            <Text style={styles.genre}>License</Text>
        </View>
        <RadioButton.Group
        onValueChange={(newValue) => setValueLicense(newValue)}
        value={valueLicense}>
            <TouchableOpacity style={styles.mainWrapper} onPress={()=>setValueLicense('firstLicense')}>
                <RadioButton value="firstLicense" color="black"/>
                <Text style={styles.mainWrapperTexte}>Harry Potter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainWrapper} onPress={()=>setValueLicense('secondLicense')}>
                <RadioButton value="secondLicense" color="black"/>
                <Text style={styles.mainWrapperTexte}>Game Of Thrones</Text>
            </TouchableOpacity>
        </RadioButton.Group>
    </View>);
}
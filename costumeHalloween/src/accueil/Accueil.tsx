import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, { useEffect } from 'react';
import styles from './style/accueil.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RadioButton } from 'react-native-paper';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";


export function Accueil() {
    const [value, setValue] = React.useState('');
    const [valueLicense, setValueLicense] = React.useState('');
    const navigation = useNavigation<StackNavigationProp<any>>();
    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('formulaire')
          if (jsonValue != null) {
              var result = JSON.parse(jsonValue)
              setValue(result.value)
              setValueLicense(result.valueLicense)
          }
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            console.log('error')
        }
    }
    const storeData = async (value: { value: string; valueLicense: string; }) => {
     try {
         const jsonValue = JSON.stringify(value)
         await AsyncStorage.setItem('formulaire', jsonValue)
     } catch (e) {
         console.log('error')
     }
     }
    useEffect(()=>{
        getData()
    }, [])
    if (value != '' && valueLicense != '') {
        storeData({value, valueLicense})
        navigation.navigate('/liste', {
          choice : valueLicense,
          gender : value  
        })
    }

    return (
    <View style={styles.background}>
      <View style={styles.backgroundTitle}>
        <Text style={styles.title}>Accueil</Text>
      </View>
      <View style={styles.backgroundGenre}>
        <Text style={styles.genre}>Genre</Text>
      </View>
      <RadioButton.Group
        onValueChange={newValue => setValue(newValue)}
        value={value}>
            <TouchableOpacity style={styles.mainWrapper} >
                <RadioButton value="female" color="black" />
                <Text style={styles.mainWrapperTexte}>Femme</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainWrapper} onPress={()=>setValue('male')}>
                <RadioButton value="male" color="black"/>
                <Text style={styles.mainWrapperTexte}>Homme</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainWrapper} onPress={()=>setValue('other')}>
                <RadioButton value='other' color="black"/>
                <Text style={styles.mainWrapperTexte}>Autre</Text>
            </TouchableOpacity>
        </RadioButton.Group>
        <View style={styles.backgroundLicense}>
            <Text style={styles.genre}>License</Text>
        </View>
        <RadioButton.Group
        onValueChange={newValue => setValueLicense(newValue)}
        value={valueLicense}>
            <TouchableOpacity style={styles.mainWrapper} onPress={()=>setValueLicense('')}>
                <RadioButton value="hp" color="black" />
                <Text style={styles.mainWrapperTexte}>Harry Potter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainWrapper} onPress={()=>setValueLicense('')}>
                <RadioButton value="got" color="black"/>
                <Text style={styles.mainWrapperTexte}>Game Of Thrones</Text>
            </TouchableOpacity>
        </RadioButton.Group>
    </View>);
}



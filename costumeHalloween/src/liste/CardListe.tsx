import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './styles/liste.style';
import {TCharac} from './store/listeStore';
import {useNavigation} from '@react-navigation/native';

type Props = {
  character: TCharac;
};

export function CardListe(props: Props) {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      onPress={() =>
        navigation.navigate('/detail', {character: props.character})
      }>
      <View>
        <Text style={styles.card}>{props.character.name}</Text>
      </View>
    </TouchableHighlight>
  );
}

import {StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';
import style from './styles/costume.style';
import {TCharac} from '../liste/store/listeStore';

type Props = {
  route: {params: {character: TCharac}};
};

export function Detail(props: Props) {
  const charac: TCharac = props.route.params.character;

  return (
    <View style={style.container}>
      {charac.image != '' ? (
        <Image style={style.monImage} source={{uri: charac.image}} />
      ) : (
        <Text> Aucune image disponible pour ce personnage </Text>
      )}
      <View style={style.topbarre}>
        <View style={style.roundButton}>
          <Image
            style={style.arrowLeft}
            source={require('../assets/arrowLeft.png')}
          />
        </View>
      </View>
      <View style={style.title}>
        <Text style={style.titleFont}>{charac.name}</Text>
      </View>

      <View style={style.containerText}>
        <Text style={style.description}>
          Genre : {charac.gender}
          Maison : {charac.house}
        </Text>
      </View>
    </View>
  );
}

import {StyleSheet, View , Text,Image} from "react-native";
import React from 'react';
import style from './styles/costume.style';

type Props = {};

export function Detail(props: Props) {

    return (<View style={style.container}>
                 <Image style={style.monImage} source={require('../assets/harry.jpg') }/>

                <View style={style.topbarre}>

                     <View style={style.roundButton}>

                         <Image style={style.arrowLeft} source={require('../assets/arrowLeft.png') }/>

                    </View>
                    
                </View>
                    <View style={style.title}>
                            <Text style={style.titleFont}>Harry Potter</Text>
                    </View>

                        <View style={style.containerText}>

                                <Text style={style.description}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Text>
                                
                        
                        </View>
                    
                
       
    </View>);
}


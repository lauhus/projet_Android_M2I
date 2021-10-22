import React from "react";

import { StyleSheet } from "react-native";



const  costume = StyleSheet.create({

  container: {
      backgroundColor: '#FEAE50',
      alignItems: 'center',
      flex: 1,
  },

  topbarre: {
      position: 'absolute',
      alignItems: 'center',
      width: '100%',
      height: 80,
      backgroundColor: '#7A7A7B',

  },

  title: {
      position: 'relative',
      top : 20,
  },
  titleFont: {
    fontFamily: 'Ribeye-Regular',
    color: 'white',
    fontSize: 24,
  },

  containerText: {
      backgroundColor: '#FFFFFF',
      width: '100%',
      position: 'absolute',
      height: 300,
      left: 0,
      top: 400,
      borderRadius: 15
  },
  description:
  {
      fontSize: 26,
      color: 'black',
      textAlign: 'justify',
      top: 15,
      marginHorizontal: 15,
      fontWeight: 'bold',
      fontFamily: 'Ribeye-Regular',
      
  },
  monImage:
  {
    position:'absolute',
    top: 90,
      width: 300,
      height: 280,
  },
  arrowLeft:
  {
    position:'absolute',
    width: 85,
    height: 85,
  },

  roundButton: {
      flex: 1,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      position: 'absolute',
      bottom:15,
      left:15
  }

});
export default costume;
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
      top: 15
  },
  titleFont: {
    fontFamily: 'Ribeye-Regular',
    color: 'white',
    fontSize: 25,
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
      fontSize: 15,
      fontFamily: 'cochin',
      color: 'black',
      textAlign: 'justify',
      top: 15,
      marginHorizontal: 15
      
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
    width: 80,
    height: 80
  },

  roundButton: {
      flex: 1,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: 'white',
      position: 'absolute',
      bottom:15,
      left:15
  }

});
export default costume;
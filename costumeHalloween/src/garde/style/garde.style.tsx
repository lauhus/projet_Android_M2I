import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    background : {
        flex : 1,
        backgroundColor : 'rgba(254, 174, 80, 1)'
    },
    image : {
        position: 'absolute',
        width: 350,
        height: 208,
        top : 112,
        left : -20
        
    },
    button : {
        width: 225,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 25,
        backgroundColor: 'black',
    },
    deco : {
        position: 'absolute',
        width: 445,
        height: 250,
        bottom: 0
    },
    buttonBg : {
        justifyContent: 'center',
        alignItems: 'center',
        top : 350
    },
    texteGarde : {
        fontFamily: 'Ribeye-Regular',
        color : 'white',
        fontSize: 26,
        fontWeight: "bold",
    }
})
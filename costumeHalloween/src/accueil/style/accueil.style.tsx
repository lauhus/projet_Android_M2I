import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    background : {
        flex : 1,
        backgroundColor : 'rgba(254, 174, 80, 1)'
    },
    backgroundTitle : {
        height : 75,
        backgroundColor : 'rgba(122, 122, 123, 1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundGenre : {
        height : 75,
        top:10,
        backgroundColor : 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundLicense : {
        height : 75,
        top:35,
        marginBottom : 25,
        backgroundColor : 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title : {
        color : 'white',
        fontSize: 36,
        fontFamily: "Ribeye"
    },
    genre : {
        color : 'rgba(122, 122, 123, 1)',
        fontSize: 36,
        fontFamily: "Ribeye",
        fontWeight: 'bold'
    },
    mainWrapper: {
        top : 20,
        left: 15,
        fontSize:36,
        flexDirection: 'row',
        alignItems: 'center',
    },
    mainWrapperTexte: {
        color: 'white',
        fontSize: 30,
        fontFamily: "Ribeye",
        left: 10,
    },
})
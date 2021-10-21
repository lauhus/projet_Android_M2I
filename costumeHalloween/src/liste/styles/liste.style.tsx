import { StyleSheet , Dimensions } from 'react-native'

export default StyleSheet.create({
    title: {
        width: '100%',
        backgroundColor: "rgb(122, 122, 123)",
        borderRadius: 1,
        fontFamily: 'Ribeye',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 36,
        lineHeight: 49,
        color: 'white',
        textAlign: 'center',
        padding: 5,
    },
    page: {
        backgroundColor:"rgb(254, 174, 80)"
    },
    card: {
        width: '100%',
        height: 62,
        left: 0,
        backgroundColor: 'white',
        borderRadius: 1,
        fontFamily: 'Ribeye',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 25,
        color: 'black',
        marginTop: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    loader: {
        textAlign: 'center',
        top : Dimensions.get('window').height/2,
        height: Dimensions.get('window').height,
    }
})
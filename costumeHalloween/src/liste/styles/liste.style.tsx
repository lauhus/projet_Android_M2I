import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  title: {
    width: '100%',
    height: 80,
    backgroundColor: 'rgb(122, 122, 123)',
    borderRadius: 1,
    padding: 5,
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Ribeye-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 36,
    lineHeight: 49,
    color: 'white',
    textAlignVertical: 'center',
  },
  image: {
    width: 92,
    height: 84,
    top: 0,
    position: 'absolute',
    left: 0,
  },
  page: {
    backgroundColor: 'rgb(254, 174, 80)',
  },
  card: {
    width: '100%',
    height: 62,
    left: 0,
    backgroundColor: 'white',
    borderRadius: 1,
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
    top: Dimensions.get('window').height / 2,
    height: Dimensions.get('window').height,
  },
});


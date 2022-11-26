import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';
import {font, fontFamily} from '../../constants/fonts';

export default StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontSize: font.FONT_16,
    fontFamily: fontFamily.SemiBold,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: -0.02,
    color: Colors.Black,
  },
  linearGradient: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.Snow,
    height: 30,
    width: 62,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: font.FONT_18,
    fontFamily: fontFamily.SemiBold,
    textAlign: 'center',
    margin: 10,
    color: Colors.White,
    backgroundColor: 'transparent',
  },
  btnCotainer: {
    marginHorizontal: 2,
    alignSelf: 'center',
  },
  image: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 30,
    height: 18,
  },
  joinedtext: {
    color: Colors.Black,
    fontWeight: '600',
  },
  btnMainContainer: {
    marginTop: '13%',
  },
});

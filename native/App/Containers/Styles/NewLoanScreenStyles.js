import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  mainContainer: {
    ...ApplicationStyles.screen.mainContainer,
    alignItems: 'center'
  },
  title: {
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.regular,
    textAlign: 'center',
    marginBottom: Metrics.baseMargin
  },
  logoThumb: {
    ...ApplicationStyles.screen.logoThumb
  },
  question: {
    textAlign: 'center',
    margin: Metrics.baseMargin
  },
  form: {
    width: '100%'
  },
  navigation: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '35%'
  },
  backButton: {
    backgroundColor: Colors.textPrimary,
    
  }
})

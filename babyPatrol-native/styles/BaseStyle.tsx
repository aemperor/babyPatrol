import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  input: {
    height: 40,
    width: 300,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    margin: 10,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  smallSeperator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    color: '#000000'
  },  
  header: {
    height: 100,
    backgroundColor: '#1CD1DD',
  },
  hamgburgerIcon: {
    marginBottom: 15,
    marginLeft: 10
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    backgroundColor: '#FFFFFF'
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  subHeadingStyle: {
    marginLeft: '5%'
  },
  headlineStyle: {
    marginLeft: '5%',
    marginTop: '15%'
  },
  textInput: {
    fontSize: 14,
    backgroundColor: '#FFFFFF',
    width: '90%',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: '5%'
  },
  button: {
    marginTop: 30,
    width: '50%',
    justifyContent: 'flex-start',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10%'
  },
  signUpImage: {
    marginTop: '8%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
});


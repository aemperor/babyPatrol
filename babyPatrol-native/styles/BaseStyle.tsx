import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight, 
    backgroundColor: '#FFFFFF',
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
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#1CD1DD',
    textAlign: 'center',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
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
});


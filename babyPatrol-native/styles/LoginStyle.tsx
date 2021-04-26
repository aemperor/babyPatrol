import { StyleSheet } from 'react-native';

export const loginStyle = StyleSheet.create({  
    color: {
        backgroundColor: '#FFFFFF',
    },
    button: {
        width: '90%',
        marginBottom: '10%',
    },
    sideBySide: {
        flexDirection:'row',
    },
    checkboxView: {
        alignItems:'baseline',
        justifyContent:"center",
        flex:1,    
    },
    checkboxText: {
        textAlign: "center",
        alignSelf:'center',
        alignContent:"flex-end",
    },
    buttonView: {
        flex:1,
        justifyContent:"center",
    },
    googleButton: {
        backgroundColor: '#4285F4',
        width: '60%',
        color: '#FFFFFF',
    },
    textInput: {
        fontSize: 14,
        backgroundColor: '#FFFFFF',
        width: '90%',
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    buttonCheckboxArea: {
        flexDirection:'row',
        backgroundColor: '#FFFFFF',
        marginTop:20,
    }

});


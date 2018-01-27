import EStyleSheet from 'react-native-extended-stylesheet';

export const LoginStyles = EStyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red"
    },
    topContainer:{
        flex:1,
        backgroundColor: 'powderblue'
    },
    bottomContainer:{
        flex:2,
        backgroundColor: 'skyblue',
        width:"100%",
        flexDirection: 'column',
 
    },
    loginInput:{
        width: "80%",
        height: 50,
        fontSize:'$small',
        paddingVertical:0,
        alignSelf: "center"
    },

    loginButton:{
        color:"#32a7f5",
    },

    loginButtonText:{
        fontSize:20,
        color: 'white'
    }
});
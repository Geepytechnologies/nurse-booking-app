import React from 'react'
import { View, Text, StyleSheet,TextInput, Pressable,Image, ImageBackground} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import icon from '../assets/lox-bg3.png';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';
import {Dimensions} from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
const sWidth = Dimensions.get('screen').width;
const sHeight = Dimensions.get('screen').height;

const Mycomponent = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.login}>Login</Text>
            <View style={styles.loginform}>
                    <Text>Email</Text>
                    <TextInput 
                        style={styles.text}
                        textContentType='emailAddress'
                        keyboardType='email-address'
                    />
                    <View style={styles.divider}></View>
                    <View style={{display:'flex',height:50, alignItems: 'flex-end', justifyContent: 'space-between', flexDirection: 'row', width:'100%' }}>
                    <TextInput 
                        style={styles.text}
                        keyboardType='default'
                        placeholder='Password'
                        secureTextEntry={true}
                    />
                    <Text style={{fontWeight:'700', color:'#000113'}}>Forgot?</Text>
                    </View>
                    <View style={styles.divider2}></View>
                    {/* login button */}
                    <View style={{width:'100%'}}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:'100%',marginTop: 15}}>
                        <Text style={{textAlign:'center', padding:15}}>Or continue with</Text>
                    </View>
                    <View style={{display:'flex',flexDirection:'row', justifyContent: 'space-between', width:'100%'}}>
                        <View style={{width:'45%'}}>
                        <TouchableOpacity style={styles.icon}>
                            <Image source={google} style={{width: 15, height:15,marginRight:10}}/>
                            <Text>Google</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{width:'45%'}}>
                        <TouchableOpacity style={styles.icon}>
                            <Image source={facebook} style={{width:20, height:20, marginRight:10}}/>
                            <Text>Facebook</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width:'100%',display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',marginTop:30}}>
                        <Text>Don't have account? </Text>
                        <TouchableOpacity>
                            <Text style={{color:'#000113', fontWeight: '700'}}>create now</Text>
                        </TouchableOpacity>
                    </View>
            </View>
      </View>
    )
}

export default function LoginScreen() {
  return (
    <ImageBackground source={icon} style={styles.image}>
        <Mycomponent />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: sHeight < 900 ? 150 : 0,
    },
    login: {
        color: '#1e293b',
        fontSize: 30,
        fontWeight: '700',
    },
    loginform: {
        width: '80%',
        display: 'flex',
        alignItems: 'flex-start',
    },
    divider: {
        height: 1,
        width: '100%',
        marginTop: 10,
        backgroundColor: 'black',
    },
    divider2: {
        height: 1,
        width: '100%',
        marginTop: 10,
        backgroundColor: 'black',
    },
    text:{
        // borderWidth: 0,
        fontWeight: '600',
        /* marginTop: 30,
        marginBottom: 10 */
    },
    button:{
        backgroundColor: '#000113',
        borderRadius: 5,
        width: '100%',
        padding: 10,
        marginTop: 30,
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    icon:{
        width:'100%', 
        backgroundColor:'#f1f5f9',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
    }
})
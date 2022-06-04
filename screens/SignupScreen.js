import React from 'react'
import { View, Text, StyleSheet,TextInput, Pressable,Image, ImageBackground } from 'react-native'
import icon from '../assets/lox-bg3.png';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';
import {Dimensions} from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
const sWidth = Dimensions.get('screen').width;
const sHeight = Dimensions.get('screen').height;

export default function SignupScreen() {
  return (
    <ImageBackground source={icon} style={styles.image}>
        <View style={styles.container}>
            <Text style={styles.login}>Sign Up</Text>
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
                    {/* <Text style={{fontWeight:'700', color:'#000113'}}>Forgot?</Text> */}
                    </View>
                    <View style={styles.divider2}></View>
                    {/* login button */}
                    <Pressable style={{width:'100%'}}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </View>
                    </Pressable>
                    <View style={{width:'100%',marginTop: 15}}>
                        <Text style={{textAlign:'center', padding:15}}>Or continue with</Text>
                    </View>
                    <View style={{display:'flex',flexDirection:'row', justifyContent: 'space-between', width:'100%'}}>
                        <Pressable style={styles.icon}>
                            <Image source={google} style={{width: 15, height:15,marginRight:10}}/>
                            <Text>Google</Text>
                        </Pressable>
                        <Pressable style={styles.icon}>
                            <Image source={facebook} style={{width: 20, height: 20, marginRight:10}}/>
                            <Text>Facebook</Text>
                        </Pressable>
                    </View>
                    <View style={{width:'100%',display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',marginTop:30}}>
                        <Text>Already have account? </Text>
                        <Pressable>
                            <Text style={{color:'#000113', fontWeight: '700'}}>Log In</Text>
                        </Pressable>
                    </View>
            </View>
      </View>
    </ImageBackground>
  )
};

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
        marginTop: sHeight < 700 ? 150 : 0,
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
        borderWidth: 0,
        fontWeight: '600',
        /* marginTop: 30,
        marginBottom: 10 */
    },
    button:{
        backgroundColor: '#000113',
        borderRadius: 5,
        width: '100%',
        padding: 10,
        textAlign: 'center',
        marginTop: 30,
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    icon:{
        width:'45%', 
        backgroundColor:'#f1f5f9',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
    }
})
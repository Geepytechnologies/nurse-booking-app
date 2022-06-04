import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView , Image} from 'react-native'


export default function ProfilelistScreen() {
  return (    
    <View style={styles.container}>
    <ImageBackground source={require('../assets/nurse.jpg')} style={styles.image}>
        <View style={styles.overlay}></View>
    </ImageBackground>
    <View>
        <Text>Hire a nurse</Text>
       <ScrollView>
           <View style={{alignItems:'center', marginTop:20}}>
           <View style={{display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'space-around', width:'90%', paddingHorizontal:10}}>
               <View>
                   <Image source={require('../assets/nurse.jpg')} style={styles.image2} />
               </View>
               <View style={{flex:2}}>
                   <Text style={styles.nurses1}>Seun Olumide</Text>
                   <Text style={styles.nurses}>Gbagada</Text>
               </View>
               <Text style={{color:'#ff7482', fontWeight:'600'}}>$250</Text>
           </View>
           </View>
       </ScrollView>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image:{
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        marginTop: 30,
        // flex: 1,
    },
    image2:{
        width: 35,
        height: 35,
        borderRadius: 5,
    },
    overlay:{
        flex: 1,
        backgroundColor: '#567acb',
        opacity: 0.5,
    },
    nurses:{
        paddingLeft: 10,
        
    },
    nurses1:{
        paddingLeft: 10,
        fontWeight: '700',
    }
})
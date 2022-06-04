import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Topbar = () => {
    return(
        <View style={styles.topbar}>
            <FontAwesome name="angle-left" size={24} color="#6d8de0" />
            <Text>Profile</Text>
        <Ionicons name="mail" size={24} color="#1648ce" />
    </View>
    )
}

const ProfileInfo = () => {
    return(
        <View style={styles.profilecon}>
           <View style={styles.profiledata}>
              <Image source={require('../assets/nurse.jpg')} style={styles.image} />
              <View>
                  <Text style={{fontWeight:'600'}}>Seun Olumide</Text>
                  <Text>Nurse</Text>
                  <View style={{display:'flex',flexDirection:'row', width:'100%', alignItems:'center'}}>
                     <View style={{backgroundColor:'#f5faff', alignItems:'center', justifyContent:'center', width:25,height:25, borderRadius:50}}><Ionicons name="md-people" size={20} color="#1648ce" /></View>
                     <View>
                         <Text>Patients</Text>
                         <Text style={{fontWeight: '700'}}>345+</Text>
                     </View>
                  </View>
              </View>
           </View>
        </View>
    )
}

const Follow = () => {
    return(
        <View style={styles.followcon}>
            <View style={{width:'90%', alignItems:'center',justifyContent:'center'}}>
                <View style={styles.numbers}>
                    <View>
                        <Text style={styles.textalign}>275</Text>
                        <Text>Articles</Text>
                    </View>
                    <View>
                        <Text style={styles.textalign}>234</Text>
                        <Text>Following</Text>
                    </View>
                    <View>
                        <Text style={styles.textalign}>123</Text>
                        <Text>Followers</Text>
                    </View>
                </View>
                {/* follow and message button */}
                <View style={{flexDirection:'row', width:'100%', alignItems:'center', justifyContent:'space-around'}}>
                    <TouchableOpacity style={{width:'40%'}}>
                       <View style={{backgroundColor:'#1648ce',padding:6, borderRadius:15}}><Text style={{color:'white',textAlign:'center'}}>Follow</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'40%'}}>
                       <View style={{padding:6, borderRadius:15, borderColor:'#89a2e6',borderWidth:1}}><Text style={{textAlign:'center',color:'#89a2e6', fontWeight:'600'}}>Message</Text></View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const Rating = () => {
    return(
        <View style={{alignItems:'center',justifyContent:'center', flex:1}}>
            <View style={styles.ratingcon}>
            <View style={styles.rating}>
               <Ionicons name="star" size={20} color="#ef802f" />
               <View>
                   <Text>Rating</Text>
                   <Text style={{fontWeight:'600'}}>4.78 out of 5</Text>
               </View>
            </View>
            <TouchableOpacity style={{width:'40%', alignItems:'center',justifyContent:'center'}}>
                <View style={styles.seeall}>
                   <Text style={{color:'white', marginRight:10}}>See all</Text>
                   <FontAwesome name="angle-right" size={20} color="white" />
                </View>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const Feedback = () => {
    return(
        <View style={{justifyContent:'center', marginTop:20, marginLeft:20, flex:1}}>
            <View style={{display:'flex',flexDirection:'row'}}>
                {/* profile image */}
                <Image source={require('../assets/nurse.jpg')} style={{width:30, height:30, borderRadius:50, marginRight: 20}} />
                {/* comments */}
                <View style={styles.commentcon}>
                    <Text style={{fontWeight:'600'}}>Anonymous Feedback</Text>
                    <Text>Very competent specialist</Text>
                </View>
            </View>
        </View>
    )
}

const Appointment = () => {
    return(
       <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
        <TouchableOpacity style={styles.appointmentbtn}>
           <AntDesign name="calendar" size={17} color="white" style={{marginRight:10}} />
           <Text style={{color:'white'}}>Make an appointment</Text>
        </TouchableOpacity>
        </View>
    )
}

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
        <Topbar />
        <ProfileInfo />
        <Follow />
        <Rating />
        <Feedback />
        <Appointment />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topbar:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        flex:1,
    },
    image:{
        borderRadius: 10,
        width:60,
        height: 60,
        marginHorizontal: 10,
        resizeMode: 'cover'    
    },
    profiledata:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    profilecon:{
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
    },
    numbers:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10
    },
    followcon:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    textalign:{
        textAlign: 'center',
        fontWeight: '700'
    },
    rating:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    seeall:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        padding: 5,
        width: '65%',
        borderRadius: 15,
        backgroundColor: '#1648ce',
    },
    ratingcon:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20
    },
    appointmentbtn:{display:'flex',flexDirection:"row", backgroundColor:'#1648ce',
    width: '90%',
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    borderRadius:15,
}
})
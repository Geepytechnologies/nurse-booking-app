import { View, Text, StyleSheet,TouchableOpacity, ScrollView, Image} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const ReminderCard = () => {
   return(
       <View style={{display:'flex', flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
           <View style={{}}>
               <Text style={{fontWeight:'700',fontSize: 18}}>Seun Olumide</Text>
               <Text>Nurse</Text>
               <View style={styles.rating}>
                <Ionicons name="star" size={20} color="#ef802f" />
                <View>
                    <Text>Rating</Text>
                    <Text style={{fontWeight:'600'}}>4.78 out of 5</Text>
                </View>
               </View>
           </View>
           <Image source={require('../assets/nurse.jpg')} style={styles.image} />
       </View>
   )
}

const ReminderDate = () => {
    return(
        <View style={{alignItems:'center', justifyContent:'center'}}>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'80%',padding:5}}>
            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
               <AntDesign name="calendar" size={17} color="#1648ce" style={{marginRight:10}} />
               <Text>Monday, Dec 23</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
               <AntDesign name="clockcircle" size={17} color="#1648ce" style={{marginRight:10}} />
               <Text>12:00 - 13:00</Text>
            </View>
        </View>
        </View>
    )
}

const Schedulebtn = () => {
    return(
        <View style={{alignItems:'center', justifyContent:'center'}}>
            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',width:'80%'}}>
            <TouchableOpacity style={{backgroundColor:'#1648ce',width:'40%', padding:10, borderRadius:15}}>
                <Text style={{textAlign:'center',color:'white'}}>Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:10,width:'40%', borderColor:'#1648ce',borderWidth:1, borderRadius:15}}>
                <Text style={{textAlign:'center',color:'#1648ce'}}>Cancel</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default function Appointment() {
  return (
    <View style={styles.container}>
        <View style={styles.topbar}>
            <View>
                <Text>Apr 08,2022</Text>
                <Text style={{fontWeight:'700', fontSize: 20}}>Today</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.add}>
                  <AntDesign name="plus" size={20} color="white" style={{marginRight: 5}} />
                  <Text style={{color:'white'}}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
        {/* date */}
        <ScrollView>
            <View>
                <Text style={{fontWeight:'700', fontSize:20}}>1</Text>
                <Text>Sun</Text>
            </View>
        </ScrollView>
        {/* schedule today */}
        <View>
            <Text style={{fontWeight:'700',fontSize:18}}>Schedule Today</Text>
        </View>
        {/* Reminder */}
         <Text style={{fontSize:18, fontWeight:'700'}}>Reminder</Text>
         <Text>Don't forget schedule for upcoming appointment</Text>
         <ReminderCard />
         <ReminderDate />
         <Schedulebtn />
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
        flex:1,
    },
    add:{
        backgroundColor: '#1648ce',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingVertical: 5,
    },
    image:{
        width:70,
        height: 70,
        borderRadius: 10,
    },
    rating:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
})
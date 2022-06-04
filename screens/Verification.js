import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Verification() {
  return (
    <View style={styles.container}>
    <AntDesign name="arrowleft" size={24} color="black" />
        <Ionicons name="checkmark-circle" size={150} color="#04c389" />
        <Text style={{fontWeight:'700',fontSize:25}}>Done</Text>
        <View style={{borderRadius:5,borderWidth:2,borderStyle:'dotted', padding:10, marginTop:20}}>
          <Text style={{fontWeight:'600',textAlign:'center'}}>View Appointments</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
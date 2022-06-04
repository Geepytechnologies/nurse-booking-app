import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Payment() {
  return (
    <View style={styles.container}>
      <AntDesign name="arrowleft" size={24} color="black" />
      <Text style={{fontWeight:'700'}}>Payment Method</Text>
      <View style={{alignItems:'center', justifyContent:'center'}}>
      <View style={styles.card}>
         <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
            <AntDesign name="creditcard" size={24} color="black" style={{marginRight:10}} />
            <Text>Credit/Debit Card</Text>
         </View>
         <AntDesign name="down" size={24} color="black" />    
      </View>
      </View>
      {/* order */}
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <Text style={{fontWeight:'700'}}>Order</Text>
          <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}><Entypo name="edit" size={24} color="#1648ce" /><Text style={{color:'#1648ce'}}>Edit</Text></View>
      </View>
      {/* nurse & quantity */}
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',marginTop:5}}>
          <Text>Nurse</Text>
          <Text>Quantity</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderTopColor:'#e8e8e8',borderTopWidth:2, paddingTop:4,marginTop:10}}>
          <View>
             <Text>Seun Olumide</Text>
             <Text>$250</Text>
          </View>
          <Text>1</Text>
      </View>
      {/* total */}
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderTopColor:'#e8e8e8',borderTopWidth:2, paddingTop:4, marginTop:20}}>
          <Text style={{fontWeight:'700'}}>Total</Text>
          <Text style={{fontWeight:'700'}}>$250.00</Text>
      </View>
      {/* discount code */}
      <View style={{borderRadius:5,borderWidth:2,borderStyle:'dotted', padding:10, marginTop:20}}>
          <Text style={{fontWeight:'600',textAlign:'center'}}>Discount Code</Text>
      </View>
      {/* pay button */}
      <TouchableOpacity>
            <View style={{backgroundColor:'#1648ce', padding:13, borderRadius:5, marginTop:20}}>
                <Text style={{color:'white',textAlign:'center'}}>PAY</Text>
            </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    card:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        padding: 10,
        borderRadius: 10,
        backgroundColor:'#dfdedd'
    }
})
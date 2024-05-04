import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Test() {



  return (
    <ScrollView>
    <View style={styles.vijay}>

      <Text>Test</Text>
      <TouchableOpacity style={{width:'90%',height:50,backgroundColor:'yellow',borderRadius:20,marginBottom:300}}>

      </TouchableOpacity>

      <Text>Test</Text>
      <TouchableOpacity style={{width:'90%',height:50,backgroundColor:'yellow',borderRadius:20,marginBottom:300}}>

      </TouchableOpacity>

      <Text>Test</Text>
      <TouchableOpacity style={{width:'90%',height:50,backgroundColor:'yellow',borderRadius:20,marginBottom:300}}>

      </TouchableOpacity>

      <Text>Test</Text>
      <TouchableOpacity style={{width:'90%',height:50,backgroundColor:'yellow',borderRadius:20,marginBottom:300}}>

      </TouchableOpacity>

    </View>
    </ScrollView>
  )




}

const styles = StyleSheet.create({
    vijay: {
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    }
})
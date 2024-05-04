import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'


export default function Story({navigation}) {

  const [tex,setTex] = useState("");
  const delimiter = /[,.\n]+/;

  const handlenarrate = () => {
    const text = tex;

    const sptext = text.split(delimiter);
    navigation.navigate("Narration",{data:sptext})
  }



  return (
    <View style={{flex:1,alignItems:'center'}}>
        <Image source={require("../images/Story/bg.png")} style={{width:"100%",height:'100%',position:'absolute'}} />
            <View style={{width:'90%',height:60,backgroundColor:'#8C18C295',borderRadius:20,flexDirection:'row',alignItems:'center',marginTop:StatusBar.currentHeight}}>

<TouchableOpacity style={{height:'100%',aspectRatio:1/1,marginLeft:20,alignItems:'center',justifyContent:'center'}} onPress={()=>navigation.goBack()}>
<Ionicons name='md-home' size={40} color='white' />
</TouchableOpacity>

<Text style={{fontSize:28,fontWeight:'bold',textAlign:'right',position:'absolute',right:20,color:'white'}}>Enter Story</Text>

</View>


<View style={{width:'100%',lineHeight:100}}>
<ScrollView showsVerticalScrollIndicator={false} >
  <TouchableOpacity style={{width:160,height:30,backgroundColor:'green',position:'absolute',right:30,zIndex:1000,top:25,borderRadius:10,flexDirection:"row",alignItems:"center",justifyContent:'space-evenly'}}>
    <Ionicons name='camera' size={20} color={"white"} />
    <Text style={{color:"white"}}>Scan Using Camera</Text>
  </TouchableOpacity>

<TextInput style={{width:'95%',backgroundColor:'#FFFFFF',marginTop:20,borderRadius:10,padding:10,lineHeight:100,borderBottomWidth:5,borderBottomColor:"#00000070",alignSelf:'center',paddingTop:30}} multiline placeholder='Start Typing Here' onChangeText={text=>setTex(text)}>
</TextInput>

</ScrollView>
</View>

<TouchableOpacity style={{width:'95%',backgroundColor:'#42FF0090',marginTop:20,borderRadius:10,padding:10,lineHeight:30,position:'absolute',bottom:10,borderWidth:3,borderColor:"#00000060"}} onPress={handlenarrate} >
        <Text style={{fontSize:24,fontWeight:'bold',alignSelf:'center'}}>Start Narration</Text>
</TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({})
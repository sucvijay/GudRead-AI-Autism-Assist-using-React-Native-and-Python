import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios';


export default function Naration({route,navigation}) {


    const data = route.params.data;



    const Each = (props) => {

        const [imgs,setimgs] = useState("")

        const imagegen = async() => {
            const data = await axios.post("http://192.168.0.190:8000/imggen",{
                img:props.titl+" Cartoon style"
              })
            setimgs("data:image/png;base64,"+data.data.img)
        }

        useEffect(()=>{
            imagegen();
        },[])

        return(
            <View style={{width:'95%',backgroundColor:'#FFFFFF90',aspectRatio:1/1,borderRadius:15,borderWidth:2,overflow:'hidden',marginBottom:20}}>
                <Image source={{uri:imgs==""?"https://m.media-amazon.com/images/I/71dfWaaFBXL.jpg":imgs}} style={{flex:1}} />
                
            <View style={{position:'absolute',bottom:0,width:"100%",backgroundColor:'#FFFFFF90',height:70,flexDirection:"row",paddingLeft:10,alignItems:'center'}}>
                <Text style={{fontSize:20,marginLeft:10,fontWeight:'bold'}}>{props.titl}</Text>
                <TouchableOpacity style={{position:'absolute',right:5,zIndex:1000,borderRadius:50,alignItems:"center",bottom:5,justifyContent:'space-evenly'}}>
                        <Ionicons name="mic-circle-outline" size={60} color={"black"} />
                </TouchableOpacity>
            </View>
            </View>
        )
    }


  return (
    <>
            <Image source={require("../images/Story/bg.png")} style={{width:"100%",height:'100%',position:'absolute'}} />
    <ScrollView>
    <View style={{flex:1,alignItems:'center'}}>


            <View style={{width:'90%',height:60,backgroundColor:'#8C18C295',borderRadius:20,flexDirection:'row',alignItems:'center',marginTop:StatusBar.currentHeight}}>

<TouchableOpacity style={{height:'100%',aspectRatio:1/1,marginLeft:20,alignItems:'center',justifyContent:'center'}} onPress={()=>navigation.goBack()}>
<Ionicons name='md-home' size={40} color='white' />
</TouchableOpacity>

<Text style={{fontSize:28,fontWeight:'bold',textAlign:'right',position:'absolute',right:20,color:'white'}}>Enter Story</Text>

</View>
<TouchableOpacity style={{width:'95%',backgroundColor:'#42FF0090',marginTop:20,borderRadius:10,padding:5,borderWidth:3,borderColor:"#00000060"}} >
        <Text style={{fontSize:24,fontWeight:'bold',alignSelf:'center'}}>Change Story</Text>
</TouchableOpacity>

<TouchableOpacity style={{width:'95%',backgroundColor:'#FF000090',marginTop:20,borderRadius:10,padding:5,borderWidth:3,borderColor:"#00000060"}} >
        <Text style={{fontSize:24,fontWeight:'bold',alignSelf:'center',color:"white"}}>Start Narration</Text>
</TouchableOpacity>


<Text style={{fontSize:30,fontWeight:"bold",marginVertical:20,alignSelf:'flex-start',marginLeft:40}}>STORY</Text>

    {
        data.map((val,ind)=>(
        <Each key={ind} titl={val}/>
        ))
    }



    </View>
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({})
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import axios from 'axios';
import * as Speech from 'expo-speech';

export default function Learn({navigation}) {
  const speak = () => {
    const thingToSay = prompt;
    Speech.speak(thingToSay);
  };

  const [prompt,setprompt] = useState("")

  const [img,setimg] = useState("")

  const post = async() => {

    const data = await axios.post("http://192.168.0.190:8000/imggen",{
      img:prompt+" Cartoon style"
    })
  setimg(data.data.img)
  }


  const Blank = () => {

    return(
      <>
      <Image source={require("../images/Learn/pngegg.png")} style={{height:"70%",width:'100%'}} resizeMode="contain" />

      <View style={styles.maintext}>
        <Text style={{color:'black',fontWeight:'bold'}}>Type Anything below to Generate the Image</Text>
        <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>For Example:</Text>
        <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>A Kid Eating IceCream</Text>
      </View>
      </>
    )
  }

  const Display = () => {
    return(
    <>
    <Image source={{uri:"data:image/png;base64,"+img}} style={{height:"100%",width:"100%",backgroundColor:'black'}} resizeMode="contain" />

    <View style={styles.sound}>
      <TouchableOpacity onPress={speak}>
        <AntDesign name='sound' size={30} color={"white"}/>
      </TouchableOpacity>
    </View>
    </>)
  }


  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name='home' size={32} color='white' />
        </TouchableOpacity>
        <Text style={{fontSize:20,color:'white',textAlignVertical:"center"}}>Generate Image Through Text</Text>
      </View>

      <View style={styles.main}>

        {
          img==""?<Blank />:<Display />
        }
      </View>



      <View style={styles.bottom}>
        <TextInput style={{width:"80%",height:'70%',backgroundColor:"white",paddingLeft:10,borderRadius:10}} placeholder='Type Here...' onChangeText={text=>setprompt(text)}></TextInput>
        <TouchableOpacity onPress={post}>
          <AntDesign name='check' size={40} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0C6A1',
    alignItems:'center',
  },
  header:{
    backgroundColor: "#843260",
    width:"90%",
    height:50,
    marginTop:30,
    borderRadius:10,
    elevation:10,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:"space-evenly",
  },
  main:{
    backgroundColor: "#843260",
    width:"90%",
    height:"70%",
    marginTop:30,
    borderRadius:10,
    overflow:'hidden',
    borderWidth:3,
    borderColor:'#843260',
    alignItems:"center",
  },
  maintext:{
    backgroundColor: "#ffffff50",
    width:"90%",
    height:140,
    borderRadius:10,
    opacity:0.5,
    justifyContent:'space-evenly',
    paddingLeft:15,
  },
  sound:{
    backgroundColor:"#843260",
    borderRadius:50,
    padding:7,
    position:'absolute',
    bottom:5,
    right:5,
  },
  bottom:{
    backgroundColor: "#843260",
    width:"90%",
    height:70,
    marginTop:35,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    position:'absolute',
    bottom:10
  }
});
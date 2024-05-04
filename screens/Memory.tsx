import { Button, Image, Modal, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Memory({navigation}) {

    const data = {
        img:["https://i.pinimg.com/564x/2b/2d/60/2b2d605747861574fb1a2dc79d8426ad.jpg","https://i.pinimg.com/564x/a0/88/2d/a0882d20a193e6d58cbe8bd8ffa14e73.jpg","https://i.pinimg.com/564x/d4/8d/07/d48d074f8c9ec8448612822295686754.jpg","https://i.pinimg.com/564x/43/4e/f8/434ef855bf4775182ab47914b91bceca.jpg"]
    }

    const [show,setshow] = useState(false);

    const ans = Math.floor(Math.random() * (3 - 0 + 1)) + 0;


    const crt = () =>{

        setshow(true);

        setTimeout(() => {
            setshow(false);
        }, 2000);
    }

    const wrng = () => {

    }


  return (
    <View style={{flex:1,alignItems:'center'}}>


        <Modal visible={show} animationType="fade" >
        <View style={{flex:1,backgroundColor:'lightgreen',alignItems:'center',justifyContent:'center'}}>
            <Image source={require("../assets/boyjump.gif")} />
            <Text style={{fontSize:34,fontWeight:'bold'}}>Correct</Text>
            </View>
        </Modal>





    <View style={{width:'90%',height:60,backgroundColor:'#9f86c0',borderRadius:20,flexDirection:'row',alignItems:'center',marginTop:StatusBar.currentHeight}}>

<TouchableOpacity style={{height:'100%',aspectRatio:1/1,marginLeft:20,alignItems:'center',justifyContent:'center'}} onPress={()=>navigation.goBack()}>
<Ionicons name='md-home' size={40} color='white' />
</TouchableOpacity>

<Text style={{fontSize:28,fontWeight:'bold',textAlign:'right',position:'absolute',right:20,color:'white'}}>Memory Test</Text>

</View>

    <View style={{flex:1,alignItems:'center',width:'100%',justifyContent:'space-evenly'}}>

    <View style={{width:'60%',aspectRatio:1/1,backgroundColor:'green',marginVertical:10,borderRadius:20}}>
    <Image source={{uri:data.img[ans]}} style={{flex:1}} />

    </View>


    <View style={{width:'95%',height:"40%",flexWrap:'wrap',alignItems:'center',justifyContent:'space-evenly'}}>

        {
            data.img.map((val,ind)=>(
                <View style={{width:'45%',height:'45%',backgroundColor:'white',marginRight:'5%',borderRadius:10}} key={ind}> 
                <TouchableOpacity style={{flex:1}} onPress={
                    ()=>{console.log(ind);
                        if(ind==ans) crt(); else wrng();
                    }
                    }>
                <Image source={{uri:val}} style={{flex:1,borderRadius:10}} resizeMode="cover" />
                </TouchableOpacity>
                </View>
            ))
        }

    </View>

    </View>
    </View>
  )
}

const styles = StyleSheet.create({})
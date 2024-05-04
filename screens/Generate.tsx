import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from "react-native";
import Signature from "react-native-signature-canvas";
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from "axios";
export default function Generate({navigation}){
  const [signature, setSign] = useState(null);
  const ref = useRef();

  const onsta = () => {
    ref.current.changePenSize(3,3)
  }

  const [txt,settxt] = useState("");

  const handleimagegen= async() =>{

    if(txt.length<3){
      alert("Write Some More")
    }else{

      const data = await axios.post("http://192.168.0.190:8000/imggen",{
        img:txt
      })
  
      setSign("data:image/png;base64,"+data.data.img)

    }



    
  }

  const handleOK = async(signature) => {
    // console.log(signature);
    const data = await axios.post("http://192.168.0.190:8000/handwriting",{
      img:signature
    })
    settxt(data.data.txt)
  };

  const handleData = (data) => {
    console.log(data.dataURL);
  };

  const handleEnd = async(sign) =>{
    ref.current.readSignature()

    // const data = await axios.post("http://192.168.0.190:8000/handwriting",{
    //   img:signature
    // })
    
  }

  const handleEmpty = () => {
    console.log("Empty");
  };

  const style = `.m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
    }`;


    const Empty = () => {

      return(
        <TouchableOpacity onPress={handleimagegen}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Image source={require("../images/Generate/write.png")} style={{width:300,height:"80%"}} />
        <Text style={{fontSize:16,fontWeight:'bold',color:'gray',textAlign:'center'}}>Write Anything Below and Click Me</Text>
      </View>
      </TouchableOpacity>
      )
    }




  return (
    <View style={{ flex: 1,alignItems:'center' }}>

      <View style={{width:'90%',height:60,backgroundColor:'lightgray',borderRadius:20,marginTop:StatusBar.currentHeight,flexDirection:'row',alignItems:'center'}}>

          <TouchableOpacity style={{height:'100%',aspectRatio:1/1,marginLeft:20,alignItems:'center',justifyContent:'center'}} onPress={()=>navigation.goBack()}>
          <Ionicons name='md-home' size={40} color='black' />
          </TouchableOpacity>

          <Text style={{fontSize:28,fontWeight:'bold',textAlign:'right',position:'absolute',right:20}}>Scribble Mode</Text>

      </View>

      <View style={styles.preview}>


        {signature ? (
          <TouchableOpacity onPress={handleimagegen} style={{backgroundColor:'grey',flex:1,width:'100%',alignItems:'center',justifyContent:'center',overflow:"hidden"}}>
          <Image
            resizeMode={"contain"}
            style={{ width: '100%', height: "100%" }}
            source={{ uri: signature }}
          />
          </TouchableOpacity>
        ) : <Empty />}



      </View>
      <Text>{txt}</Text>
      <Signature
      ref={ref}
      onEnd={handleEnd}
      onBegin={onsta}
      onGetData={handleData}
        onOK={handleOK}
        backgroundColor="white"
        onEmpty={handleEmpty}
        descriptionText="Sign"
        clearText="Clear"
        confirmText="Save"
        webStyle={style}
        style={{backgroundColor:"blue",position:'absolute',width:'100%',height:'100%',bottom:-430,borderTopWidth:1,borderTopColor:"gray"}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  preview: {
    width: "80%",
    aspectRatio:1/1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    borderRadius:20,

  },
  previewText: {
    color: "#FFF",
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#69B2FF",
    width: 120,
    textAlign: "center",
    marginTop: 10,
  },
});

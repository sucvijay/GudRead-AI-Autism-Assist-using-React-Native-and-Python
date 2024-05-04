
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { statmar } from '../dev';
import { StatusBar } from 'expo-status-bar';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import * as Speech from 'expo-speech';


SplashScreen.preventAutoHideAsync();

export default function Home({navigation}) {

  const [isLoaded] = useFonts({
    'merianda': require("../assets/font/merienda-one.ttf"),
  });

  const check = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  
  return (
    <View style={styles.container} onLayout={check}>
      <Image style={styles.bg}  source={require("../images/_.png")} />

      <View style={styles.header}>


      <Image source={require("../images/home/autLogo.jpg")} style={{width:'30%',height:'100%'}} resizeMode='contain' />



      <View style={{width:'70%',height:'100%',alignItems:"flex-end",paddingRight:10,justifyContent:'center'}} >
      {/* <Text style={{fontSize:25,fontWeight:'bold',fontFamily:"merianda"}}>Learn and Grow</Text> */}
      <Image source={require("../images/home/lgtext.png")} />
      <Text style={{fontWeight:"bold",}}>Autism Assist</Text>

      </View>


      </View>


    {/* buttons for action */}

    <View style={styles.actionbuttoncont}>

    <View style={[styles.actionbutton,{backgroundColor:"gray"}]}>
    <TouchableOpacity onPress={()=>{Speech.speak("Hungry");}}>
    <Image source={require("../images/home/hungry.webp")} style={styles.btnimg} />
    <View style={styles.btmimgTextCont}>
      <Text style={styles.btmimgTxt}>Hungry</Text>
    </View>
    </TouchableOpacity>
    </View>



    <View style={styles.actionbutton}>
    <TouchableOpacity onPress={()=>{Speech.speak("Need Water");}}>
    <Image source={require("../images/home/needWater.png")} style={styles.btnimg} />
    <View style={styles.btmimgTextCont}>
      <Text style={styles.btmimgTxt}>Need Water</Text>
    </View>
    </TouchableOpacity>
</View>



<View style={styles.actionbutton}>
  <TouchableOpacity onPress={()=>{Speech.speak("Rest Room");}}>
<Image source={require("../images/home/RestRoom.png")} style={styles.btnimg} />
<View style={styles.btmimgTextCont}>
      <Text style={styles.btmimgTxt}>Restroom</Text>
    </View>
    </TouchableOpacity>
</View>
<View style={styles.actionbutton}>
<View style={styles.btmimgTextCont}>
      <Text style={styles.btmimgTxt}>Play Music</Text>
    </View>
</View>


    </View>

    {/* end of action tile */}


    {/* start of nav buttns */}

    <TouchableOpacity style={[styles.navBtn,{backgroundColor:"#42A3FC"}]} onPress={()=>navigation.navigate("Learn")} >
    <Image source={require("../images/home/1.png")} style={styles.navimg} />
    <Text style={styles.actText}>
     Learn
    </Text>
      </TouchableOpacity>

    <TouchableOpacity style={[styles.navBtn,{backgroundColor:"#FFB342"}]} onPress={()=>navigation.navigate("Story")}>
      <Image source={require("../images/home/2.png")} style={styles.navimg} />
    <Text style={styles.actText}>
     Story
    </Text>
      </TouchableOpacity>

    <TouchableOpacity style={[styles.navBtn,{backgroundColor:"#FD6767"}]} onPress={()=>navigation.navigate('Gen')} >
    <Image source={require("../images/home/3.png")} style={styles.navimg} />
    <Text style={styles.actText}>
     Writing Practice
    </Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.navBtn,{backgroundColor:"#9f86c0"}]} onPress={()=>navigation.navigate('Memory')} >
    <Image source={{uri:"https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/memory-icon-11.jpg.png"}} style={styles.navimg} />
    <Text style={styles.actText}>
     Memory Game
    </Text>
      </TouchableOpacity>
{/* end of nav buttons */}

    <View style={{width:'100%',height:40,position:'absolute',bottom:20}}>

      <TouchableOpacity style={{width:"50%",height:'100%',backgroundColor:'#00000080',marginLeft:20,borderRadius:15,alignItems:'center',justifyContent:'space-evenly'}}>
    <Text style={{
    fontWeight:'bold',
    color:'white'
  }}>
      Lock Screen
    </Text>
      </TouchableOpacity>

    </View>



      <StatusBar style='auto' ></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  bg: {
    height:"100%",
    resizeMode:"contain",
    position:'absolute'
  },
  header:{
    width:"90%",
    height:80,
    backgroundColor: "#ffffff90",
    borderRadius:20,
    marginTop:40,
    flexDirection:'row',
    overflow:'hidden'
  },
  actionbuttoncont:{
    width:"100%",
    height:"40%",
    flexDirection:"row",
    flexWrap:'wrap',
    justifyContent:"space-evenly",
    alignItems:'center',
    rowGap:20,
    marginTop:30,
    marginBottom:20
  },

  actionbutton:{
    width:"40%",
    aspectRatio:1/1,
    backgroundColor:'green',
    alignSelf:'center',
    borderRadius:15,
    borderWidth:3,
    borderColor:"#00000050",
    overflow:'hidden'
  },

  navBtn:{
    width:'90%',
    height:50,
    backgroundColor:'grey',
    borderRadius:15,
    marginBottom:10,
    borderWidth:3,
    borderColor:"#ffffff50",
    justifyContent:'center',
    flexDirection:'row',
    paddingHorizontal:20,
    alignItems:"center"
  },
  actText:{
    fontWeight:'bold',
    fontSize:24,
    verticalAlign:'middle',

  },
  btnimg:{
    width:'100%',
    height:"100%",
    resizeMode:'cover',
  },
  btmimgTextCont:{
    position:"absolute",
    bottom:0,
    width:'100%',
    alignItems:'center',
    backgroundColor:"#ffffff"
  },
  btmimgTxt:{
    fontWeight:'bold'
  },
  navimg:{
    width:40,
    height:40,
    position:'absolute',
    left:10
  }
});

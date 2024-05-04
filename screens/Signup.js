import { Alert, Image, Keyboard, Modal, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
// import { dHeight,dWidth } from '../components/exp'

// import DateTimePicker from '@react-native-community/datetimepicker';


export default function SignUp({navigation}) {

    const [name,setName] = useState("");
    const [ref,setRef] = useState("");
    const [ph,setPh] = useState("");
    const [Pass,setPass] = useState("");
    const [ConfPass,setConfPass] = useState("");
    const [DOB,setDOB] = useState("Select DOB");
    const [date, setDate] = useState(new Date());
    const [showDate,setShowDate] = useState(false)
  

    ///Functions

/////
    const addUser = async() => {

        Keyboard.dismiss()

        if(ph.length<10) {
            alert("Phone Number must be 10 Characters");
            return;
        }else if(Pass.length<8){
            alert("Password must be greater than 8 Characters");
            return;
        } else if(!Pass==ConfPass){
            alert("Password Mismatch");
            return;
        }

        setLoading(true)



        const data ={
            "name" : name,
            "phone" : ph,
            "password" : Pass,
            "ref" : ref.toUpperCase(),
            "DOB" : DOB
        }


        try {
            const send = await axios.post(url+"/Users/new",data);
            
        } catch (error) {

            if(error.response.status==400){
                alert("Account Already Exists with Mobile Number")
            }
            console.log(error.response.status)
            return
        }

        alert("Account Created Successfully. Please Login")
        navigation.navigate("Home");







    }
///

const [loading,setLoading] = useState(false)

  return (
<>
<Image source={require("../images/Signup/_.jpeg")} resizeMode='cover' style={styles.imgbg} />

    <View style={styles.container}>

        <View style={{height:100,width:"90%",marginTop:50,borderRadius:20}}>

            <Image source={require("../images/Signup/tl.png")} style={{width:'100%',height:'100%',borderRadius:20,opacity:0.8}} resizeMode="contain" />

        </View>



    <View style={styles.loginCont}>



        <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'flex-start',marginLeft:'6%',color:"#313131",marginTop:'3%'}}>Create Account..</Text>
        <View style={styles.linecont}>
            <Text style={styles.linetxt}>Name</Text>
            <TextInput placeholder='Name' style={styles.lineinput} value={name} onChangeText={text=>setName(text)}/>
        </View>

        <View style={styles.linecont}>
            <Text style={styles.linetxt}>Phone</Text>
            <TextInput keyboardType='number-pad' placeholder='Enter Phone Number' style={styles.lineinput} 
            value={ph} onChangeText={text=>setPh(text)}/>
        </View>



        <View style={styles.linecont}>
            <Text style={styles.linetxt}>Password</Text>
            <TextInput placeholder='Enter Password' style={styles.lineinput} secureTextEntry
            value={Pass} onChangeText={text=>setPass(text)}/>
        </View>

        <View style={styles.linecont}>
            <TextInput placeholder='Confirm Password' style={styles.lineinput} secureTextEntry
            value={ConfPass} onChangeText={text=>setConfPass(text)}/>
        </View>


           {
            loading?(
                <TouchableOpacity style={[styles.signupbtn,{height:50,width:50}]}>
                    <Image resizeMode='contain' source={require("../assets/load.gif")} style={{height:'100%',width:'100%'}} />
                </TouchableOpacity>
            ):(
                <TouchableOpacity style={styles.signupbtn} onPress={addUser}>
                <Text style={styles.signuptxt}>SignUp</Text>
                </TouchableOpacity>
            )
           }





        <View style={styles.optioncont}>
            <Text style={{color:"grey",fontWeight:'bold',height:'70%',textAlignVertical:'center'}}>Already have an account </Text>
        <TouchableOpacity style={styles.option} onPress={()=>navigation.goBack()}>
        <Text style={{color:'white',fontWeight :'bold'}}> Login</Text>
        </TouchableOpacity>
        </View>

    </View>






    </View>


    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
       // marginTop:StatusBar.currentHeight
    },
    imgbg:{
        width:'100%',
        height:"100%",
        position:'absolute'
    },

    loginCont:{
        width:'90%',
        maxHeight:'100%',
        borderRadius:20,
        alignItems:'center',
       // padding:10,
        backgroundColor:'rgba(255,255,255,0.9)',
        elevation:5,
        justifyContent:'space-evenly',
        marginTop:80
        
    },
    linecont:{
        width:"93%",
        height:48,
        marginTop:9,
        justifyContent:'center',
        padding:5,
        marginVertical:'2%',

        
    },
    linetxt:{
        fontSize:10,
        fontWeight:'700',
        backgroundColor:'#ffffff',
        width:'20%',
        textAlign:'center',
        marginLeft:'5%',
        top:5,
        zIndex:10,
        borderRadius:20
    },
lineinput:{
    borderWidth:2,
    width:'100%',
    height:'98%',
    borderRadius:10,
    fontSize:14,
    fontWeight:'bold',
    paddingHorizontal:10,
    borderColor:'#AF8AFE',

    
},
signupbtn:{
    width:120,
    height:40,
    backgroundColor:'#ffc23a',
    borderRadius:50,
    marginTop:15,
    justifyContent:'center',
    alignItems:'center'
},
signuptxt:{
    fontSize:18,
    fontWeight:'bold',
    color:"#023047",
    textAlign:'center'
},    
optioncont:{
    width:'90%',
    height:"8%",
    marginTop:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:5
},
option:{
    width:80,
    height:35,
    backgroundColor:'#fb8500',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:'5%'
}
    

})
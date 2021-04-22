import React, { useState,useEffect } from 'react';
import { View, StyleSheet, TextInput, Text,Alert } from 'react-native'
import { Button } from 'react-native-elements'
import { auth,database } from "../config/firebase";

export default function CompanyLoginForm({navigation}) {

 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")
 const [company,setCompany]=useState([])


 useEffect(()=>{      
     database.ref("/Companies").on("value", snapshot=>{
     setCompany( Object.values(snapshot.val()))
         })
        },[])
 
 const handleLogin=()=>{
   auth.signInWithEmailAndPassword(email,password)
   .then(auth =>{
    company.map(users=>{
      if(users.uid===auth.user.uid){
     navigation.navigate("CompanyDashboard")
     setPassword("");
     setEmail("");
      }
      else{
       Alert.alert("Restriction only Companies are eligible")
     }
    })
 
   
  })
   .catch((error)=>{
    Alert.alert(error.message)
   })
  
 }

 const onhandleregister=()=>{
   navigation.navigate('CompanyRegister')
 }
  return (
    <View style={styles.container}>
    <View style={styles.main}>
      <Text style={styles.login}>Login Form</Text>
      <TextInput
        style={{ width: 300, borderWidth: 2, padding: 5, borderRadius: 10 }}
        textContentType="emailAddress"
        placeholder="Enter Your Email"
        onChangeText={emails => setEmail(emails)}
        value={email}
      />
      <TextInput
        style={{ width: 300, borderWidth: 2, padding: 5, marginTop: 40, borderRadius: 10 }}
        secureTextEntry={true}

        textContentType="password"
        placeholder="Enter Your Password"
        onChangeText={passwords => setPassword(passwords)}
        value={password}
      />
      <Button
        buttonStyle={{ borderRadius: 10, marginTop: 25, paddingLeft: 30, paddingRight: 30 }}
        title="Login"
        onPress={handleLogin}
      />
      <Text style={styles.choice}>OR</Text>
      <Button
        buttonStyle={{ borderRadius: 10, marginBottom: 10, paddingLeft: 30, paddingRight: 30, backgroundColor: "green" }}
        title="Register"
        onPress={onhandleregister}
      />
</View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:	"#ADD8E6",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  login: {
    paddingBottom: 30,
    textAlign: "center",
    fontSize: 30,
    textDecorationLine:"underline"
  },
  choice: {
    textAlign: "center",
    paddingBottom: 12,
    paddingTop: 12,
    color: "grey"
  }
});
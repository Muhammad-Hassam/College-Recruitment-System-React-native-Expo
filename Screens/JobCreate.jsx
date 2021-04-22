import React,{useEffect,useState} from 'react';
import { Alert } from 'react-native';
import { View, StyleSheet, TextInput, Text } from 'react-native'
import { Button } from 'react-native-elements';
import { database } from "../config/firebase";


export default function JobCreate({navigation}) {

    const [post,setPost]=useState("");
    const [skill,setSkill]=useState("");
    const [experience,setExperience]=useState("");
    const [telephone,setTelephone]=useState("");
    const [company, setComppany]=useState("");

  
    
    const createJob=async()=>{
      if(post===""||skill===""||experience===""||telephone===""||company===""){
        Alert.alert("Kindly fill all the fields")
      }
      else{
        const date=new Date()
        const jobkey=date.getTime();
        await database.ref("/Jobs").child(jobkey).set({
             key:jobkey,
             company:company,
             post:post,
             skill:skill,
             experience:experience,
            telephone:telephone,
     })
     navigation.navigate('CompanyDashboard')
    }
     
    }
    return (
        <View style={styles.container}>

        <View style={styles.main}>

            <Text style={styles.login}>Create Job Form</Text>
            <TextInput
                style={{ width: 300, borderWidth: 2, padding: 5, borderRadius: 10, marginTop: 40 }}
                textContentType="none"
                placeholder="Enter Company Name"
              onChangeText={companies => setComppany(companies)}
              value={company}
            />
            <TextInput
                style={{ width: 300, borderWidth: 2, padding: 5, borderRadius: 10, marginTop: 40 }}
                textContentType="none"
                placeholder="Enter Post for Job"
              onChangeText={posts => setPost(posts)}
              value={post}
            />
            <TextInput
                style={{ width: 300, borderWidth: 2, padding: 5, borderRadius: 10, marginTop: 40 }}
                textContentType="none"
                placeholder="Enter Required Skills"
              onChangeText={skills => setSkill(skills)}
              value={skill}
            />

            <TextInput
                style={{ width: 300, borderWidth: 2, padding: 5, borderRadius: 10, marginTop: 40 }}
                textContentType="none"
                placeholder="Enter Required Experience"
              onChangeText={exp => setExperience(exp)}
              value={experience}
            />
            <TextInput
                style={{ width: 300, borderWidth: 2, padding: 5, borderRadius: 10, marginTop: 40 }}
                textContentType="telephoneNumber"
                placeholder="Enter Contact No."
              onChangeText={num => setTelephone(num)}
              value={telephone}
            />
            <Button
                buttonStyle={{ borderRadius: 10, marginTop: 20, paddingLeft: 30, paddingRight: 30, backgroundColor: "green" }}
                title="Job Create"
                onPress={createJob}
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
        marginBottom: 20,
        marginTop: 40,
    },
    login: {
        paddingBottom: 10,
        textAlign: "center",
        fontSize: 30,
        textDecorationLine: "underline"
    },
});
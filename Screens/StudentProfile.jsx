import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text} from 'react-native'
import { auth,database } from "../config/firebase";
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
export default function StudentProfile() {

    const [students,setStudents]=useState([])


useEffect(()=>{      
    database.ref("/Students").child(auth.currentUser.uid).on("value", snapshot=>{
    setStudents(Object.values(snapshot.val()))
        })
      },[])

      console.log(students);     

    return (
        
        <View style={styles.container}>
        
    <View style={styles.main}>
    <Text style={styles.login}>Student's Profile</Text>
    <Card>
        <Card.Image style={{ marginBottom: 25, marginLeft:20, width: 200, height: 200, borderRadius: 400/ 2}} source={{uri: students[2]}} />
        <Card.Divider></Card.Divider>
          <Text style={styles.details}>Details</Text>
          <Text style={{ marginBottom: 10 }}>
            <Text style={styles.detail}>Name : </Text><Text>{students[4]}</Text>
        </Text> 
        <Text style={{ marginBottom: 10 }}>
            <Text style={styles.detail}>Depart : </Text><Text>{students[0]}</Text>
        </Text>
        <Text style={{ marginBottom: 10 }}>
            <Text style={styles.detail}>CGPA : </Text><Text>{students[1]}</Text>
        </Text>
        <Text style={{ marginBottom: 10 }}>
            <Text style={styles.detail}>Skills : </Text><Text>{students[3]}</Text>
        </Text>
    </Card>
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
        marginTop: 150,
        alignItems: 'center',
    justifyContent: 'center',
    },
    login: {
        paddingBottom: 10,
        textAlign: "center",
        fontSize: 30,
        textDecorationLine: "underline"
    },
    detail:{
        fontWeight:"bold"
    },
    details:{
      textAlign:"center",
      fontWeight:"bold",
      fontSize:20,
      textDecorationLine:"underline",
      marginBottom:20,
    }
});
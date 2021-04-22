import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text} from 'react-native'
import { database } from "../config/firebase";
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
export default function Student() {

    const [student,setStudents]=useState([])


useEffect(()=>{      
    database.ref("/Students").on("value", snap=>{
     setStudents(Object.values(snap.val()))
        })
      },[])

         

    return (
        
        <View style={styles.container}>
            <ScrollView>
       {student.map((user,index)=>{
           return(
              <View style={styles.main} key={index}>
              <Text style={styles.login}>Student's Profile</Text>
              <Card>
                  <Card.Image style={{ marginBottom: 25, marginLeft:20, width: 200, height: 200, borderRadius: 400/ 2}} source={{uri: user.imageURL}} />
                  <Card.Divider></Card.Divider>
                    <Text style={styles.details}>Details</Text>
                    <Text style={{ marginBottom: 10 }}>
                      <Text style={styles.detail}>Name : </Text><Text>{user.userName}</Text>
                  </Text> 
                  <Text style={{ marginBottom: 10 }}>
                      <Text style={styles.detail}>Depart : </Text><Text>{user.depart}</Text>
                  </Text>
                  <Text style={{ marginBottom: 10 }}>
                      <Text style={styles.detail}>CGPA : </Text><Text>{user.gpa}</Text>
                  </Text>
                  <Text style={{ marginBottom: 10 }}>
                      <Text style={styles.detail}>Skills : </Text><Text>{user.skills}</Text>
                  </Text>
              </Card>
              </View>
           )
       })}
          </ScrollView>
        

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:	"#ADD8E6",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:50,
      },
    main: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
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
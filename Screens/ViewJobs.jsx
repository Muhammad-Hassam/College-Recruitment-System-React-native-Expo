import React, {useState,useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Card  } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { auth,database } from "../config/firebase";
export default function ViewJobs() {

    const [job,setJob]=useState([])

    useEffect( ()=>{      
        database.ref("/Jobs").on("value", snapshot=>{
             setJob(Object.values(snapshot.val()))
            })
           console.log(job.post);     
          },[])


   if(job.length<1){
       return(<Text>Sorry we are unable to find any jobs</Text>)
   }
   else{
    return (
        <View style={styles.container}>
            <ScrollView>
            {job.map((user,index)=>{
                return(
                    <View style={styles.main} key={index}>
                    <Text style={styles.login}>Job Details</Text>
                    <Card>
                    <Text style={{ marginBottom: 10 }}>
                            <Text style={styles.detail}>Company Name : </Text><Text>{user.company}</Text>
                        </Text>
                        <Text style={{ marginBottom: 10 }}>
                            <Text style={styles.detail}>Post : </Text><Text>{user.post}</Text>
                        </Text>
                        <Text style={{ marginBottom: 10 }}>
                            <Text style={styles.detail}>Skill : </Text><Text>{user.skill}</Text>
                        </Text>
                        <Text style={{ marginBottom: 10 }}>
                            <Text style={styles.detail}>Experience : </Text><Text>{user.experience}</Text>
                        </Text>
                        <Text style={{ marginBottom: 10 }}>
                            <Text style={styles.detail}>Contact NO : </Text><Text>{user.telephone}</Text>
                        </Text>
                    </Card>
                    </View>
                )
            })}
            </ScrollView>
        </View>
    )
   }


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
        padding: 10,
        paddingTop: 10,
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 10,
        paddingBottom:50,
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
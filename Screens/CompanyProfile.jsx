import React, {useState,useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Card  } from 'react-native-elements';
import { auth,database } from "../config/firebase";
export default function CompanyProfile() {

    const [company,setCompany]=useState([])


    useEffect(()=>{      
        database.ref("/Companies").child(auth.currentUser.uid).on("value", snapshot=>{
        setCompany(Object.values(snapshot.val()))
            })
          },[])
          console.log(company);     



    return (
        <View style={styles.container}>
            
               
                    <View style={styles.main}>
                    <Text style={styles.login}>Company Profile</Text>
                    <Card>
                        <Card.Title></Card.Title>
                        <Card.Image style={{ marginBottom: 25, marginLeft:20, width: 200, height: 200, borderRadius: 400/ 2}} source={{uri: company[0]}} />
                         <Card.Divider></Card.Divider>
                          <Text style={styles.details}>Details</Text>
                          <Text style={{ marginBottom: 10 }}>
                            <Text style={styles.detail}>Company Name : </Text><Text>{company[4]}</Text>
                        </Text>
                        <Text style={{ marginBottom: 10 }}>
                            <Text style={styles.detail}>Status : </Text><Text>{company[2]}</Text>
                        </Text>
                        <Text style={{ marginBottom: 10 }}>
                            <Text style={styles.detail}>Website : </Text><Text>{company[5]}</Text>
                        </Text>
                        <Text style={{ marginBottom: 10 }}>
                            <Text style={styles.detail}>Services : </Text><Text>{company[1]}</Text>
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
        padding: 10,
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
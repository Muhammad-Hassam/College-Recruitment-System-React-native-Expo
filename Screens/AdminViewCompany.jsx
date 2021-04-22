import React, {useState,useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Card ,Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { database } from "../config/firebase";

export default function AdminCompany() {

    const [company,setCompany]=useState([])


    useEffect(()=>{      
        database.ref("/Companies").on("value", snapshot=>{
        setCompany(Object.values(snapshot.val()))
            })
          },[])
          console.log(company);     

          const onhandleDelete=(uid)=>{
            database.ref("/Companies").child(uid).remove();
        }


    return (
        <View style={styles.container}>
                <ScrollView>

            {company.map((user,index)=>{
                return(
                    <View style={styles.main} key={index}>
                    <Text style={styles.login}>Company Profile</Text>
                    <Card>
                        <Card.Title></Card.Title>
                        <Card.Image style={{ marginBottom: 25, marginLeft:20, width: 200, height: 200, borderRadius: 400/ 2}} source={{uri: user.imageURL}} />
                         <Card.Divider></Card.Divider>
                          <Text style={styles.details}>Details</Text>
                          <Text style={{ marginBottom: 10 }}>
                            <Text style={styles.detail}>Company Name : </Text><Text>{user.userName}</Text>
                        </Text>
                        <Text style={{ marginBottom: 10 }}>
                            <Text style={styles.detail}>Status : </Text><Text>{user.status}</Text>
                        </Text>
                        <Text style={{ marginBottom: 10 }}>
                            <Text style={styles.detail}>Website : </Text><Text>{user.website}</Text>
                        </Text>
                        <Text style={{ marginBottom: 10 }}>
                            <Text style={styles.detail}>Services : </Text><Text>{user.services}</Text>
                        </Text>
                        <Card.Divider></Card.Divider>
                            <Button
                                buttonStyle={{ borderRadius: 10, marginBottom: 10, paddingLeft: 30, paddingRight: 30, backgroundColor: '#FF0000' }}
                                title="Delete"
                                onPress={()=>onhandleDelete(user.userid)}
                            />
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
        backgroundColor:"#ADD8E6",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:50,
      },
    main: {
        backgroundColor: "#fff",
        padding: 10,
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
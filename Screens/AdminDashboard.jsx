import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { auth } from "../config/firebase";

export default function AdminDashboard({navigation}) {


    const onhandleStdRegister=()=>{
        navigation.navigate('StudentRegister')
      }

    const onhandleCompRegister=()=>{
        navigation.navigate('CompanyRegister')
      }

    const onhandleCompany=()=>{
        navigation.navigate('AdminCompany')
    }

    const onhandleStudents=()=>{
        navigation.navigate('AdminStudents')
    }
    
    const onhandleJobs=()=>{
        navigation.navigate('AdminJobs')
    }

    const signOut= async()=>{
        console.log(auth.currentUser.uid);
        await auth.signOut().then(() => {
            navigation.navigate("AdminLogin")
    
          }).catch((error) => {
            console.log(error)
          });
        }
    const onhandleCreateJobs=()=>{
        navigation.navigate('JobCreate');
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.main}>
                    <Text style={styles.head}>Admin Dashboard</Text>
                    <Card containerStyle={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 10, paddingRight: 10, borderRadius: 30 }} >
                        <Card.Title>Student's Profile</Card.Title>
                        <Card.Divider ></Card.Divider>
                        <Card.Image style={{ borderRadius: 50, width: 200, height: 135, marginBottom:20, }} source={require('../images/profile.png')}></Card.Image>
                        <Card.Divider ></Card.Divider>
                        <Button
                            buttonStyle={{ borderRadius: 10 }}
                            title='Create Profile'
                            onPress={onhandleStdRegister}
                            />
                        <Button
                            buttonStyle={{ borderRadius: 10, marginTop: 10 }}
                            title='View Profiles' 
                            onPress={onhandleStudents}
                            />
                    </Card>
                    <Card
containerStyle={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 10, paddingRight: 10, borderRadius: 30 }} >
                        <Card.Title>Company Profile</Card.Title>
                        <Card.Divider></Card.Divider>
                        <Card.Image style={{ borderRadius: 50, width: 200, height: 135,marginBottom:20, }} source={require('../images/profile.png')}></Card.Image>
                        <Card.Divider ></Card.Divider>
                        <Button
                            buttonStyle={{ borderRadius: 10}}
                            title='Create Profile' 
                            onPress={onhandleCompRegister}
                            />
                        <Button
                            buttonStyle={{ borderRadius: 10, marginTop: 10 }}
                            title='View Profiles' 
                            onPress={onhandleCompany}
                            />
                    </Card>

                    <Card containerStyle={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 10, paddingRight: 10, borderRadius: 30 }} >
                        <Card.Title>Jobs</Card.Title>
                        <Card.Divider></Card.Divider>
                        <Card.Image style={{ borderRadius: 50, width: 200, height: 140,marginBottom:20 }} source={require('../images/jobs.png')}></Card.Image>
                        <Card.Divider ></Card.Divider>
                        <Button
                            buttonStyle={{ borderRadius: 10 }}
                            title='View Jobs' 
                            onPress={onhandleJobs}
                            />
                            <Button
                            buttonStyle={{ borderRadius: 10, marginTop: 10 }}
                            title='Create Jobs' 
                            onPress={onhandleCreateJobs}
                            />
                    </Card>
                    <Button
                    buttonStyle={{ borderRadius: 10, marginTop: 10, backgroundColor:'#FF0000'}}
                    title='Sign Out'
                    onPress={signOut} />
                </View>
                
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ADD8E6",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        marginTop: 50,
        marginBottom: 20,
        marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    head: {
        fontSize: 25,
        textDecorationLine: 'underline',
        marginBottom: 10,

    }

});
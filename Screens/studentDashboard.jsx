import React from 'react';
import { View, StyleSheet,Text } from 'react-native'
import { Card, Button} from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { auth} from "../config/firebase";


export default function StudentDashboard({navigation}) {

const handleProfile=()=>{
    navigation.navigate("StudentProfile")
}

const handleJobs=()=>{
    navigation.navigate("ViewJobs")
}

const signOut= async()=>{
    console.log(auth.currentUser.uid);
    await auth.signOut().then(() => {
        navigation.navigate("Login")

      }).catch((error) => {
        console.log(error)
      });
   

}
      
    return (
        <View style={styles.container}>
            <ScrollView>
        <View style={styles.main}>
          <Text style={styles.head}>Student Dashboard</Text>
    
            <Card 
            containerStyle={{ paddingTop:20, paddingBottom:20, paddingLeft: 10, paddingRight:10,borderRadius:30 }} >
                <Card.Title>Profile</Card.Title>
                <Card.Divider />
                <Card.Image style={{ borderRadius: 50, width: 200 }} source={require('../images/profile.png')}></Card.Image>
                <Button
                    buttonStyle={{ borderRadius: 10, marginTop: 10 }}
                    title='View Profile'
                    onPress={handleProfile} />
            </Card>
         
            <Card 
             containerStyle={{ paddingTop:20, paddingBottom:20, paddingLeft: 10, paddingRight:10,borderRadius:30 }} >
                <Card.Title>Jobs</Card.Title>
                <Card.Divider />
                <Card.Image style={{ borderRadius: 50, width: 200 }} source={require('../images/jobs.png')}></Card.Image>
                <Button
                    buttonStyle={{ borderRadius: 10, marginTop: 10  }}
                    title='View Jobs' 
                    onPress={handleJobs}
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
        backgroundColor:"#ADD8E6",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
      marginTop:30,
      marginBottom: 10,
     alignItems: 'center',
    justifyContent: 'center',
    },
    head:{
        fontSize:25,
        textDecorationLine: 'underline',
    }
   
});
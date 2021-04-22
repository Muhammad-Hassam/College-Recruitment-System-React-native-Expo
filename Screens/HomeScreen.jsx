import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Card, Button} from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { auth } from "../config/firebase";

export default function Home({navigation}) {
 

    const handleStudent = () => {
        if (auth===true){
        navigation.navigate('StudentDashboard')
        }
        else{
        navigation.navigate('Login')
        }
    } 
    const handleComapny = () => {
            navigation.navigate('CompanyLoginForm')
    }
    const handleAdmin= () => {
            navigation.navigate('AdminLogin')
    }


    return (
        <View style={styles.container}>
            <ScrollView>
        <View style={styles.main}>
          
            <Card 
            containerStyle={{ paddingTop:20, paddingBottom:20, paddingLeft: 10, paddingRight:10,borderRadius:30 }} >
                <Card.Title>Student Area</Card.Title>
                <Card.Divider />
                <Card.Image style={{ borderRadius: 50, width: 200 }} source={require('../images/students.png')}></Card.Image>
                <Button
                    buttonStyle={{ borderRadius: 10, marginTop: 10 }}
                    title='Student'
                    onPress={handleStudent} />
            </Card>
         
            <Card 
             containerStyle={{ paddingTop:20, paddingBottom:20, paddingLeft: 10, paddingRight:10,borderRadius:30 }} >
                <Card.Title>Company Area</Card.Title>
                <Card.Divider />
                <Card.Image style={{ borderRadius: 50, width: 200 }} source={require('../images/company.png')}></Card.Image>
                <Button
                    buttonStyle={{ borderRadius: 10, marginTop: 10  }}
                    title='Company'
                    onPress={handleComapny}
                    />
                    
            </Card>
            
            <Button
            buttonStyle={{ borderRadius: 10, marginTop: 20, paddingLeft:30, paddingRight:30 }}
                icon={
                    <Icon
                        name="users"
                        size={15}
                        color="white"
                    />
                }
                iconLeft
                title="Admin"
                onPress={handleAdmin}
            />
           
      
        </View>
        </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:	"#ADD8E6",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
      marginTop:20,
      marginBottom:20,
     alignItems: 'center',
    justifyContent: 'center',
    },
    
   
});
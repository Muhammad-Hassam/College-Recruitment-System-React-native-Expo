import React,{ useState, useEffect } from 'react';
import { View, StyleSheet,TextInput,Text ,Image, Platform,ScrollView,Alert } from 'react-native'
import { Button} from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import {auth,database,Storage} from "../config/firebase";

export default function CompanyRegister({navigation}){

    const [image, setImage] = useState(null);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [userName,setuserName]=useState("");
    const [services,setServices]=useState("");
    const [status,setStatus]=useState("");
    const [website,setwebsite]=useState("");
    const [imageURL,setImageURL]=useState("");

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });
      const imageName = Math.random() * 2000*1223234
  
  
      if (!result.cancelled) {
        setImage(result.uri)
       
      }
      const response = await fetch(result.uri);
      const blob = await response.blob()
  
      var ref = Storage.ref("picture/"+imageName);
  
      return ref.put(blob).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((URL) => {
          setImageURL(URL);
        })
  
      });
  
  
    };

    const Register = async () => {
      if (email===""||password===""||userName===""||services===""||status===""||website===""||imageURL==="") {
        Alert.alert("Kindly fill all the fields");
      }
      await auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log(auth.currentUser.uid);
              database.ref("/Companies").child(auth.currentUser.uid).set({
                uid:auth.currentUser.uid,
                userName: userName,
                services:services,
                status:status,
                website:website,
                imageURL: imageURL,
              })
        })
        .catch(error => Alert.alert(error.message))
         navigation.navigate('CompanyLoginForm')
    }


    return(
         <View style={styles.container}>
        
            <ScrollView>
              <View style={styles.main}>
           <Text style={styles.login}>Registration Form</Text>
           <TextInput
      style={{ width:300, borderWidth: 2, padding:5 ,borderRadius: 10,marginTop:40}}
      textContentType="username"
      placeholder="Enter Company Name"
      onChangeText={name => setuserName(name)}
      value={userName}
    />
           <TextInput
      style={{ width:300, borderWidth: 2, padding:5 ,borderRadius: 10,marginTop:40}}
      textContentType="emailAddress"
      placeholder="Enter Company Email for profile Login"
      onChangeText={emails => setemail(emails)}
      value={email}
    />

<TextInput
      style={{ width:300, borderWidth: 2, padding:5 ,borderRadius: 10, marginTop:40}}
      textContentType="none"
      placeholder="Enter Company Services"
      onChangeText={service => setServices(service)}
      value={services}
    />
       <TextInput
      style={{ width:300, borderWidth: 2, padding:5 ,borderRadius: 10, marginTop:40}}
      textContentType="none"
      placeholder="Enter Company status"
      onChangeText={stat => setStatus(stat)}
      value={status}
    />
    <TextInput
      style={{ width:300, borderWidth: 2, padding:5 ,borderRadius: 10, marginTop:40}}
      textContentType="none"
      placeholder="Enter Company Website address"
      onChangeText={web => setwebsite(web)}
      value={website}
    />
        <TextInput
      style={{ width:300,borderWidth: 2, padding:5, marginTop:40,borderRadius: 10 }}
      secureTextEntry={true}
      textContentType="password"
      placeholder="Enter Password for profile Login"
      onChangeText={passwords => setpassword(passwords)}
      value={password}
    />

      <Button 
       buttonStyle={{ borderRadius: 10, marginTop: 25, paddingLeft:30, paddingRight:30 }}
      title="Upload Company Logo" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 250, height: 250,marginTop:10, marginLeft:25 }} />} 
    <Button
    buttonStyle={{ borderRadius: 10, marginTop: 20, paddingLeft:30, paddingRight:30,backgroundColor: "green" }}
  title="Register"
  onPress={Register}
/>
</View>

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
    },
  main: {
    backgroundColor:	"#fff",
    padding:15,
    borderRadius:10,
    marginBottom:20,
    marginTop:40,
  },
  login:{
    paddingBottom:10,
    textAlign:"center",
    fontSize:30,
    textDecorationLine:"underline"
  },
});
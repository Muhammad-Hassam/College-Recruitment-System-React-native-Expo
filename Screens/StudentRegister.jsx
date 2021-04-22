import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, Image, Platform, ScrollView, Alert } from 'react-native'
import { Button } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { auth, database, Storage } from "../config/firebase";


export default function StudentRegister({navigation}) {

  const [image, setImage] = useState(null);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userName, setuserName] = useState("");
  const [depart, setDepart] = useState("");
  const [skill, setSkill] = useState("");
  const [GPA, setGPA] = useState("");
  const [imageURL, setImageURL] = useState("");

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
if (email===""||password===""||userName===""||depart===""||skill===""||GPA===""||imageURL==="") {
  Alert.alert("Kindly fill all the fields");
}
else{
  await auth.createUserWithEmailAndPassword(email, password)
  .then(() => {
    const userid=auth.currentUser.uid;
        database.ref("/Students").child(auth.currentUser.uid).set({
          userid:userid,
          userName: userName,
          depart: depart,
          skills: skill,
          gpa: GPA,
          imageURL: imageURL,
        })
  })
  .catch(error => Alert.alert(error.message))

  navigation.navigate("Login")
}
 
  }


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.login}>Registration Form</Text>
          <TextInput
            style={{ width: 300, borderWidth: 2, padding: 5, borderRadius: 10, marginTop: 40 }}
            textContentType="username"
            placeholder="Enter Your Name"
            onChangeText={name => setuserName(name)}
            value={userName}
          />
          <TextInput
            style={{ width: 300, borderWidth: 2, padding: 5, borderRadius: 10, marginTop: 40 }}
            textContentType="emailAddress"
            placeholder="Enter Your Email for profile Login"
            onChangeText={emails => setemail(emails)}
            value={email}
          />

          <TextInput
            style={{ width: 300, borderWidth: 2, padding: 5, borderRadius: 10, marginTop: 40 }}
            textContentType="name"
            placeholder="Enter Your Department"
            onChangeText={departs => setDepart(departs)}
            value={depart}
          />
          <TextInput
            style={{ width: 300, borderWidth: 2, padding: 5, borderRadius: 10, marginTop: 40 }}
            textContentType="none"
            placeholder="Enter Your Skills"
            onChangeText={skill => setSkill(skill)}
            value={skill}
          />
          <TextInput
            style={{ width: 300, borderWidth: 2, padding: 5, borderRadius: 10, marginTop: 40 }}
            keyboardType='decimal-pad'
            placeholder="Enter Your CGPA"
            onChangeText={gpa => setGPA(gpa)}
            value={GPA}
          />
          <TextInput
            style={{ width: 300, borderWidth: 2, padding: 5, marginTop: 40, borderRadius: 10 }}
            secureTextEntry={true}
            textContentType="password"
            placeholder="Enter Your Password for profile Login"
            onChangeText={passwords => setpassword(passwords)}
            value={password}
          />

          <Button
            buttonStyle={{ borderRadius: 10, marginTop: 25, paddingLeft: 30, paddingRight: 30 }}
            title="Upload Your Image" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={{ width: 250, height: 250, marginTop: 10, marginLeft: 25 }} />}
          <Button
            buttonStyle={{ borderRadius: 10, marginTop: 20, paddingLeft: 30, paddingRight: 30, backgroundColor: "green" }}
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
    backgroundColor: "#ADD8E6",
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
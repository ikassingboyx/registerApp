import { View, Text, StyleSheet, Alert } from 'react-native'
import React ,{useState} from 'react'
import { TextInput } from 'react-native-web'
import MyButton from './MyButton'

export default function Main() {
  const [data, setData] = useState({});
  
  const isUserExists = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: data,
      }),
    };

    try {
      const response = await fetch("http://192.168.56.1:5000/addUser", options);
      const json = await response.json();
      console.log(`server ansver: ${json}`);
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  
  const onPress = () => {
    if (data.login && data.password) {
      if (isUserExists()) {
        console.log("New user")
        //navigation.navigate("Users");
      }
      else {
        console.log("User exists")
        Alert.alert("User exists", "User exists", [{ text: "OK" }]);
      }
    } 
    else {
      Alert.alert("Error data", "Fill all inputs!", [{ text: "OK" }]);
    }
  }

  return (
    <View style={{height: "100%"}}>
        <View style={styles.regApp}>
            <Text style={[styles.fontOne, {fontSize:"5rem"}]}>Register App</Text>
        </View>
        <View style={styles.login}>
            <Text style={[styles.fontTwo, {fontSize:"2rem"}]}>Welcome in app</Text>
            <View>
                <TextInput style={styles.input} placeholder="Login" onChangeText={(text) => setData({ ...data, login: text })}></TextInput>
                <TextInput style={styles.input} placeholder="Password" onChangeText={(text) => setData({ ...data, password: text })}></TextInput>
            </View>
            <MyButton color="#39D617" text="register" props={""} pressFunction={() => onPress()}></MyButton>
        </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    fontOne: {
      color: "#F6F6F6"
    },
    fontTwo: {
      color: "#A8A8A8"
    },
    regApp: {
      flex: 1,
      fontSize: "5rem",
      color: "white",
      display: "flex",
      backgroundColor: '#39D617',
      alignItems: 'center',
      justifyContent: 'center',
    },
    login:{
      flex: 1,
      backgroundColor: "#3E3E3E",
      display: "flex",
      flexDirection: "column",
      // justifyContent: "center",
      alignItems: "center"
    },
    input: {
      width: "20vw",
      margin: 12,
      borderBottomWidth: 1,
      borderBottomColor: "#39D617",
      color: "#F6F6F6",
      textAlign: "center",
      padding: 10,

    },
  });
  

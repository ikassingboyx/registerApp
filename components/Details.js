import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import MyButton from './MyButton';
export default function Details() {
    const data = { login: '4', password: '4', id: 0, date: '20.04.2023, 22:36:13' }
    const goBack = () => {
        navigation.goBack();
      };
    return (
        
        <View style={styles.container}>
        <MyButton
                color={"#39D617"}
                text="BACK TO LOGIN PAGE"
                props={""}
                pressFunction={goBack}
            />
            <Image style={styles.border} source={require("../images/icon.png")} >
            </Image >
            <Text style={styles.fontTwo}>login: </Text>
            <Text style={styles.fontThree}>{data.login}</Text>
            <Text style={styles.fontTwo}>password: </Text>
            <Text style={styles.fontThree}>{data.password}</Text>
            <Text style={styles.fontTwo}>reigstered: </Text>
            <Text style={styles.fontThree}>{data.date}</Text>
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
        fontThree: {
            color: "#39D617",
            fontSize: "2rem"
            
        },
        border:{
            borderWidth: 5,
            borderColor: "#39D617",
            height: "30vh",
            width: "30vh",
            backgroundColor: "#3E3E3E",
            borderRadius: "50%",
            margin:40
        },
        container:{
            flex: 1,
            backgroundColor: "#3E3E3E",
            flexDirection: "column",
            justifyContent: "space-beetwen",
            alignItems: "center"
          },

      });
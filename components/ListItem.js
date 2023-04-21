import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import MyButton from './MyButton'

export default function ListItem({data, setAllData}) {
    const delUser = async (id) => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idToDel: id,
          }),
        };
        try {
          const response = await fetch("http://192.168.56.1:5000/userToDel", options);
          const json = await response.json();
          console.log(json);
          setAllData(json);
        } catch (error) {
          console.error(error);
        }
      };

      const showDetails = () =>{
        navigation.navigate("Details", data)
      }
  return (
    <View style={styles.container}>
        <View style={styles.display}>
            <View style={styles.img}>
                <Image style={styles.border} source={require("../images/icon.png")} >
                </Image >
            </View>
            <View style={styles.buttons}>
            <MyButton 
                color={"#39D617"}
                text={"DETAILS"}
                props={""}
                pressFunction={() => {()=>showDetails()}}
            />
            <MyButton
                color={"#39D617"}
                text={"DELETE"}
                props={""}
                pressFunction={() => delUser(data.id)}
            />
            </View>
        </View>
            
      <Text>{data.id}:{data.login}</Text>
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
    border:{
        borderWidth: 5,
        height: "10vh",
        width: "10vh",
        backgroundColor: "#C2C2C2",
        borderRadius: "50%"
    },
    container:{
      padding: 25,
      margin: 20,
      flex: 1,
      borderRadius: 20,
      width: "50vw",
      backgroundColor: "#C2C2C2",
      textAlign: "center"
    },
    img:{

    },
    display:{
    display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
    },
    buttons: {
      display: "flex",
      flexDirection: "row"
    },
  });
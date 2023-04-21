import { View, Text, FlatList, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import MyButton from './MyButton'
import ListItem from './ListItem'

export default function Users() {
  const [allData, setAllData] = useState([])
  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://192.168.56.1:5000/getAllUsersData");
      const json = await response.json();
      setAllData(json)
    } catch (error) {
      console.error(error);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };



  useEffect(() => {
    getAllUsersData()
  }, [])
  
  return (
    <View style={styles.container}>
    <MyButton
        color={"#39D617"}
        text="BACK TO LOGIN PAGE"
        props={""}
        pressFunction={goBack}
      />
      
      <View style={styles.users}>
          <FlatList
          data={allData}
          renderItem={({ item }) => <ListItem data={item} setAllData={setAllData}></ListItem>}
          keyExtractor={item => item.id}
        >
        </FlatList>
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
  container:{
    padding: 25,
    flex: 1,
    backgroundColor: "#3E3E3E",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center"
  },
  users: {
    padding: 25,
    backgroundColor: "#3E3E3E",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center"

  },
});
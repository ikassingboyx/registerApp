import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function MyButton({color, text, props, pressFunction}) {
  return (
    <View style={[{backgroundColor: color}, styles.button]} >
      <TouchableOpacity onPress={pressFunction} style={{flex:1}}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  )
 
}
const styles = StyleSheet.create({
  button:{
    padding: 10, 
    borderRadius: 12,
    color: "#FFF",
    margin: 10
  }
})
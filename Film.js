import * as React from 'react';
import {Text,FlatList,TextInput,Platform, StyleSheet, View, Button } from 'react-native';
const instructions = Platform.select({
    ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
    android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});


export default function Film() {
    return (
<View style= {styles.css}>
<FlatList style={styles.list}
data={films}
renderItem={({item})=> <Text>{item.title} </Text>}
/>


</View>

)}
const styles= StyleSheet.create({
  css:{
    flexDirection:"row",
    flex:1,
    backgroundColor:'green',
    marginTop:20,

  }
})

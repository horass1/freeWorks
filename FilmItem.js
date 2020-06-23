import * as React from 'react';
import { StyleSheet,Platform, View,Text,FlatList} from 'react-native';
const instructions = Platform.select({
    ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
    android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});




export default function FilmItem() {
    return (


      <View  style= {styles.main}>
      <Text>titre du film  </Text>
      </View>
)}
const styles= StyleSheet.create({
  main:{
    height:190
       }

})

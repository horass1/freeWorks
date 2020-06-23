import * as React from 'react';
import {Platform, View,StyleSheet,Image} from 'react-native';

/*import films from './filmData';
import FilmItem from './FilmItem'*/
import LoginPage from './Component/LoginPage'
const instructions = Platform.select({
    ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
    android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {

const title= 'Bienvenue'
    return (
      <View style= {styless.main}>

      <h1 style={{color:'white'}} > {title}  </h1>
    <LoginPage/>
      </View>
/*
    <View >
      <FlatList
      data={films}
      keyExtractor={(item)=> item.id.toString()}
      renderItem={({item})=> <FilmItem/>}
      />
    </View>
    */



  )}
  const styless= StyleSheet.create({

main:{
  flex:1,
  height:null,
  width:null,
    marginTop:20,
    alignItems:'center',
    justifyContent: 'center',
       backgroundColor:'#272727'
}


  })

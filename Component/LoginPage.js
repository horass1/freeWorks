import  React,{useState} from 'react';
import {Platform, View,Text,TextInput,Button,StyleSheet} from 'react-native';

const instructions = Platform.select({
    ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
    android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});


export default function LoginPage() {

  const initial =0;
   const [cont, setCont]= useState(initial)

/*const emailInput =React.createRef();*/

const  handleChangeEmail=(e)=>{
/*SetNewClient(e.currentTarget.value);*/
/*const toto=e.currentTarget.value
  console.log(toto);*/
  SetNewClient({...NewClient, email:e.currentTarget.value})

}
const handleChangeUser=(e)=>{
    SetNewClient({ ...NewClient, username:e.currentTarget.value})

}
const handleChangePassword=(e)=>{
    SetNewClient({ ...NewClient,password:e.currentTarget.value})

}

const HandleSubmit= (e)=>{
  e.preventDefault();

console.log(NewClient);



 SetNewClient(detail);



}
  const addItem =(e)=>{
  e.preventDefault();
  SetItems([...Items, {id:Items.lenth, value: 0}])
  console.log(Items);
}

  const detail={
    email:"",
    username:"",
    password:""
  }
  const [NewClient,SetNewClient]=useState(detail);
  const [Items, SetItems]=useState([]);



    /*
    const NvClient=[];
NvClient=tab.slice();
      const  SetNvClient= ()=>{
        SetState(console.log('new NvClient'))

      }
    }




  const tab=[NvClient, SetNvClient];
  tab= useState('baba');*/







    return (





       <View style={styles.form}>
{cont}<button onClick={()=>{setCont(cont+1)}}> increase</button>
<button onClick={()=>{setCont(cont+5)}}> increase+5</button>
<button  onClick={()=>{addItem} }>add items</button>


        <form onSubmit={HandleSubmit} >
          <input  onChange={ handleChangeUser} style={{  margin:10,

              height:50,
              borderColor:'#EEEEEE',
              borderWidth:1,
            borderRadius: 5
            }} placeholder="Username"/>

          <input   /*ref= {emailInput}*/ onChange={ handleChangeEmail} style={{  margin:10,

              height:50,
              borderColor:'#EEEEEE',
              borderWidth:1,
            borderRadius: 5
            }} placeholder="Email"/>

          <input   onChange={ handleChangePassword} style={ {margin:10,

              height:50,
              borderColor:'#EEEEEE',
              borderWidth:1,
            borderRadius: 5
            }} placeholder="password"/>

          <button style={{
            color:"gold",
                        height:50,

                        borderWidth:1,
                      borderRadius: 10,
                      width:100,
                      fontWeight:"bold",
                      position:'relative',
                      left:50

                    }} placeholder='Submit'>Submit</button>
          </form>
          <ul >
          <li> 000000000</li>
          {Items.map(Item =>(<li key={Item.id}>{Item.value}</li>)  )}
          </ul>
      </View>

    )}


     const styles=StyleSheet.create({

    form:{
      height:300,
      width:300,

      padding:20,

    borderRadius: 10,

    },
    style:{
    margin:10,

      height:50,
      borderColor:'#EEEEEE',
      borderWidth:1,
    borderRadius: 5
    },
    bot:{
      fontSize:10

    }
  })

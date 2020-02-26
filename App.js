import React from 'react';
import { View, Expo, KeyboardAvoidingView , Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
<View styles = {styles.containerlogo} >
<image source={require('./img/logo.jpg')} 
/>
</View>

<View styles= {styles.container}>
<TextInput
style= {styles.input}
placeholder="Email"
autoCorrect={false}
onChangeText={()=>{}}
/>

<TextInput
tyle= {styles.input}
placeholder="Senha"
autoCorrect={false}
onChangeText={()=>{}}
/>´

<TouchableOpacity style={styles.btnSubmit}>
  <Text style ={styles.submitText}> Acessar </Text>
</TouchableOpacity>

<TouchableOpacity style= { styles.btnRegister } >
  <Text style= { styles.RegisterText }> Criar contra  </Text>
</TouchableOpacity>

</View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
background: {
  flex:1,
  alignItens: 'center',
  justifyContent: 'center',
  backgroundContent: '#191919'
},

containerlogo:{
  flex:1,
  justifyContent: 'center',
},

container: {
flex:1,
alignItems: 'center',
justifyContent: 'center',
width: '90%',
paddingBottom: 50
},

input:{
  backgroundColor: 'white',
  width: '90%',
  marginBottom: 15,
  color: '#222',
  FontSize:17,
  borderRadius: 7,
  padding: 10,
},

btnSubmit: {
  color:'',
  width: '90%',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 7
},

submitText: {
  color: 'white',
  fontSize: 18
},
btnRegister: {
  marginTop: 10,
},

RegisterText: {
  color: 'white',
/* fontSize: 18 */
}
});
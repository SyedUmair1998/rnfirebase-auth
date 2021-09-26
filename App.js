import React, { useState } from 'react'
import {View,TextInput, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';


const App = () => {
  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');
  let [name,setName] = useState('');


  // Signup starts here
  // const handleSubmit = () => {
  //   if(!email || !password || !name)
  //   {
  //     return Alert.alert('Please fill all fields');
  //   }
  //   auth().createUserWithEmailAndPassword(email,password)
  //   .then(res=>console.log(res))
  //   .catch(err=>console.log(err.code,err.message));
  //   auth().currentUser.updateProfile({
  //     displayName:name
  //   });
  //   console.log(auth().currentUser);

  // }
  
  // Signup ends here

// Login starts here
  // const handleSubmit = () => {
  //   if(!email || !password)
  //   {
  //     return Alert.alert('Please fill all fields');
  //   }
  //   console.log('============================');
  //   auth().signInWithEmailAndPassword(email,password)
  //   .then(res=>console.log('Response ',res))
  //   .catch(err=>console.log(err.code,err.message));
    
  //   console.log('============================');
  //   console.log('Current User ',auth().currentUser);
  // }
  
// Login ends here

// Reset password starts here
// const handleSubmit = () => {
//   if(!email)
//   {
//     return Alert.alert('Please fill all fields');
//   }
//   console.log('============================');
//   auth().sendPasswordResetEmail(email)
//   .then(res=>console.log('Response ',res))
//   .catch(err=>console.log(err.code,err.message));
  
//   console.log('============================');
//   console.log('Current User ',auth().currentUser);
// }

// Reset password ends here

// Signout starts here
const handleSubmit = () =>{
  
auth().signOut(); 
console.log('============================');
console.log('Current User ',auth().currentUser);

}
// signout ends here
  return (
    <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
      <TextInput style={{color:'black'}} value={email} onChangeText={(val)=>setEmail(val)} />
      <TextInput style={{color:'black'}} value={password} onChangeText={(val)=>setPassword(val)} />
      <TextInput style={{color:'black'}} value={name} onChangeText={(val)=>setName(val)} />
      <Button title="Signup" onPress={handleSubmit} />

    </View>
  )
}

export default App

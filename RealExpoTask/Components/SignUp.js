
import React, { Component } from 'react';

import { AppRegistry,TouchableOpacity,Text, StyleSheet,View ,TextInput} from 'react-native';

  export default class SignUp extends Component {
    
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
            <View style={styles.LoginForm}>
            <View style={{flexDirection:'row'}}>
            <Text style={{color:'#000'}}>Sign Up</Text>
            <TouchableOpacity onPress={() => this.props.navigation.goBack(null)} >
            <Text style={{color:'#000',marginLeft:150}}>I already have an account</Text>
            </TouchableOpacity>
          </View>
           
           
            <TextInput style = {styles.Input} 
               autoCapitalize="none"              
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               returnKeyType="next" 
               placeholder='FirstName' 
              />
               <TextInput style = {styles.Input} 
               autoCapitalize="none"              
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               returnKeyType="next" 
               placeholder='LastName' 
              />
              <TextInput style = {styles.Input} 
               autoCapitalize="none"              
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               returnKeyType="next" 
               placeholder='Email' 
              />
               <TextInput style = {styles.Input} 
               autoCapitalize="none"              
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               returnKeyType="next" 
               placeholder='Password' 
              />
               <TextInput style = {styles.Input} 
               autoCapitalize="none"              
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               returnKeyType="next" 
               placeholder='Confirm Password' 
              />
               <View style={{marginLeft:180,borderWidth:1,borderColor:'#000000',backgroundColor:'#fff', padding:10,marginTop:20, justifyContent:'center'}}>
              <Text style={{color:'#000000'}}>Sign via email link</Text>
              </View>
              
              <Text style={{color:'#000000',marginLeft:180,marginTop:15}}>I've forgotten my Password</Text>
            </View>
           
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    LoginForm: {
        marginTop:100,
        justifyContent: 'flex-start',
      alignItems:'flex-start',
      marginLeft:20,
    },
    Input:{
        width:'90%',
        marginTop:20,
        borderBottomWidth: 0.5,
        marginLeft:10,
        marginRight:10
      },
    inputLayout: {
        marginTop: 16,
        marginHorizontal: 36
    }
});
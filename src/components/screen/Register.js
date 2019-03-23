import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image,  TextInput, Dimensions, TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';
import bgImage from '../../../asset/image/background.jpg';
import logo from '../../../asset/icon/react.png';
import Icon from 'react-native-vector-icons/Ionicons';
import btnBack from '../../../asset/icon/left-arrow.png'
const { width: WIDTH } = Dimensions.get('window')


class Register extends Component {

  constructor(props){
    super(props);
    this.state = {
      showPass : true,
      press: false,
      username: '',
      password: '',
      repeatPassword: '',
      message: ''
    }
  }

  showPass = () => {
    if ( this.state.press == false){
      this.setState({ showPass: false, press: true})
    } else {
      this.setState({ showPass: true, press: false})
    }
  }

  onRegisterAcc(){
    const { username, password, repeatPassword } = this.state;
    console.log(username);
    console.log(password)
    if( password == repeatPassword){
        firebase
            .auth()
            .createUserWithEmailAndPassword(username,password)
            .then((user) => {
                console.log(user)
                this.props.navigation.navigate('Login')
            })
            .catch((error) => {
                this.setState({ message: error.message})
            })
    }else {
        this.setState({ message: 'Password is not the same'})
    }
  }

 


  render() {
    return (  
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <TouchableOpacity onPress={() =>  this.props.navigation.goBack()}>
              <Image source={btnBack}  style={{width: 40, height: 40, marginRight: 300, marginBottom: 100}}/>
          </TouchableOpacity>
          <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo}  />
              <Text style={styles.logoText}>PAW TRAVEL</Text>
          </View>

          <View style={styles.inputContainer}>
            <Icon name="ios-person" size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
              <TextInput 
                  style={styles.input}
                  placeholder= {'Username'}
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  underlineColorAndroid= 'transparent'
                  value={this.state.username}
                  onChangeText={(text) => this.setState({ username: text})}
              />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="ios-lock" size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
              <TextInput 
                  style={styles.input}
                  placeholder= {'Password'}
                  secureTextEntry= {this.state.showPass}
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  underlineColorAndroid= 'transparent'
                  value={this.state.password}
                  onChangeText={(text => {this.setState({ password: text})})}
              />

              <TouchableOpacity style={styles.btnEye} onPress = {this.showPass.bind(this)}>
                  <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'} 
                    size={26} color={'rgba(255, 255, 255, 0.7)'} />
              </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Icon name="ios-lock" size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
              <TextInput 
                  style={styles.input}
                  placeholder= {'Re-Enter-password'}
                  secureTextEntry= {this.state.showPass}
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  underlineColorAndroid= 'transparent'
                  value={this.state.repeatPassword}
                  onChangeText={(text) => {this.setState({ repeatPassword: text})}}
              />

              <TouchableOpacity style={styles.btnEye} onPress = {this.showPass.bind(this)}>
                  <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'} 
                    size={26} color={'rgba(255, 255, 255, 0.7)'} />
              </TouchableOpacity>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{  color: 'red' ,fontSize: 16, textAlign: 'center'}}>{this.state.message}</Text>
          </View>


          <TouchableOpacity style={styles.btnLogin} onPress={this.onRegisterAcc.bind(this)}>
              <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
      </ImageBackground>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
    
  },
  logo : {
    width: 120,
    height: 120
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color:  'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25

  },
  inputIcon : {
    position: 'absolute',
    top: 8,
    left : 37
  },
  inputContainer : {
    marginTop: 10
  },
  btnEye : {
    position: 'absolute',
    top: 8,
    right : 37
  },
  btnLogin : {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#20568c',
    justifyContent: 'center',
    marginTop: 20
  },
  text : {
    color:  'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center',
  }
  
})


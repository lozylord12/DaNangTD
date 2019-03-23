import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image,  TextInput, Dimensions, TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';
import bgImage from '../../../asset/image/background.jpg';
import logo from '../../../asset/icon/react.png';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { usernameChanged, passwordChanged } from '../../actions/AuthActions';
const { width: WIDTH } = Dimensions.get('window')


class Login extends Component {


  constructor(props){
    super(props);
    this.state = {
      showPass : true,
      press: false,
      username: '',
      password: '',
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

  onUsernameChanged(text){
    this.props.usernameChanged(text);
  }

  onPasswordChanged(text){
    this.props.passwordChanged(text);
  }

  onLogin(){
    const { username, password } =this.props;
      firebase
            .auth()
            .signInWithEmailAndPassword(username, password)
            .then((user) => {
              console.log(user)
              this.props.navigation.navigate('Homepage')
            })
            .catch(error => {
                this.setState({ message: error.message})
            })
  }

  onRegister(){
    this.props.navigation.navigate('Register')
  }
  
  

  render() {
    return (  
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
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
                  value={this.props.username}
                  onChangeText={this.onUsernameChanged.bind(this)}
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
                  value={this.props.password}
                  onChangeText={this.onPasswordChanged.bind(this)}
              />

              <TouchableOpacity style={styles.btnEye} onPress = {this.showPass.bind(this)}>
                  <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'} 
                    size={26} color={'rgba(255, 255, 255, 0.7)'} />
              </TouchableOpacity>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{  color: 'red' ,fontSize: 16, textAlign: 'center'}}>{this.state.message}</Text>
          </View>

          <TouchableOpacity style={styles.btnLogin} onPress={this.onLogin.bind(this)}>
              <Text style={styles.text}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnLogin} onPress={this.onRegister.bind(this)}>
              <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  const { username, password } = state. auth;
  return { username, password}
}

export default connect(mapStateToProps, { usernameChanged, passwordChanged }) (Login);

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


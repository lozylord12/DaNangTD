import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import MenuMain from './MenuMain';

class Homepage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      travelList: []
    }
  }

  componentWillMount() {
    this.getTravelFromApi();
  }

  getTravelFromApi = () => {
    return (
      fetch('https://api.myjson.com/bins/10dn6y')
        .then((respone) => respone.json())
        .then((responseJson) => {
          this.setState({
            travelList: responseJson
          });
        })
        .catch((error) => {
          console.log(error);
        })
    )
  }

  renderItem = ({item}) => {
    return (
       <MenuMain item = {item} />
    )
  }


  render() {
    
    const {
      screenStyle,
      headerStyle,
      contentStyle,
      navStyle,
      titleStyle,
      textTitleStyle,
      dataHeaderStyle,
      box1Style,
      box2Style,
    } = styles;

    return (
      <View style={screenStyle}>

        <View style={headerStyle}>

          <View style={titleStyle}>

            <View style={[dataHeaderStyle, box1Style]}>
              <Text style={textTitleStyle}>32*C</Text>
            </View>

            <View style={[dataHeaderStyle, box2Style]}>
              <Text style={textTitleStyle}>Da Nang</Text>
            </View>

            <View style={[dataHeaderStyle, box1Style]}>
              <Text style={textTitleStyle}> Hot </Text>
            </View>

          </View>

        </View>

        <View style={contentStyle}>
          <Image
            style={{ flex: 1 }}
            source={{ uri: 'https://www.justgola.com/media/a/00/1c/116389_og_1.jpeg' }}
          />
        </View>

        <View style={navStyle}>
          <View style={styles.TravelStyle}>
            <FlatList
              data={this.state.travelList}
              renderItem={this.renderItem}
              numColumns={2}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  screenStyle: {
    flex: 1
  },

  headerStyle: {
    flex: 1,


  },

  dataHeaderStyle: {

    justifyContent: 'center',
    textAlign: 'center'
  },

  box1Style: {
    flex: 1,
    borderWidth: 1
  },

  box2Style: {
    flex: 3,
    borderWidth: 1
  },

  titleStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1
  },

  textTitleStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',


  },

  contentStyle: {
    flex: 3,
  },

  navStyle: {
    flex: 6,

  },

  TravelStyle: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },

  itemStyle: {
    flex: 1,
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 6,
  },

  textStyle: {
    color: 'black',
    position: 'absolute',
    fontSize: 25,
  }


});


export default Homepage;


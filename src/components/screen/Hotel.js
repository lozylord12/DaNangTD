import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image,  FlatList, Dimensions, TouchableOpacity} from 'react-native';
import DetailHotel from './DetailHotel'
import DetailResort from './DetailResort'
import DetailVilla from './DetailVilla'
const { height: HEIGHT } = Dimensions.get('window')
const { width: WIDTH } = Dimensions.get('window')

class Hotel extends Component {
    constructor(props){
        super(props);
        this.state = {
            hotel: [],
            resort: [],
            villa: []
        }
    }
    
    componentWillMount(){
        this.getHotelFromApi();
        this.getResortFromApi();
        this.getVillaFromApi();
    }

    getHotelFromApi = () => {
        return (
          fetch('https://api.myjson.com/bins/r14zu')
            .then((respone) => respone.json())
            .then((responseJson) => {
              this.setState({
                hotel: responseJson
              });

              console.log(responseJson)
            })
            .catch((error) => {
              console.log(error);
            })
        )
    }

    getResortFromApi = () => {
        return (
          fetch('https://api.myjson.com/bins/1gr2bu')
            .then((respone) => respone.json())
            .then((responseJson) => {
              this.setState({
                resort: responseJson
              });

              console.log(responseJson)
            })
            .catch((error) => {
              console.log(error);
            })
        )
    }

    getVillaFromApi = () => {
        return (
          fetch('https://api.myjson.com/bins/tng22')
            .then((respone) => respone.json())
            .then((responseJson) => {
              this.setState({
                villa: responseJson
              });

              console.log(responseJson)
            })
            .catch((error) => {
              console.log(error);
            })
        )
    }

    renderHotel = ({item}) => {
        return (
            <DetailHotel item = {item} />
        )
    }

    renderResort = ({item}) => {
        return (
            <DetailResort item = {item} />
         )
    }

    renderVilla = ({item}) => {
        return (
            <DetailVilla item = {item} />
         )
    }
   

    render(){
        return (
            <ScrollView>
                <View>
                    <Image 
                        style = {styles.Banner}
                        source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/03/72/a5/0b/boffenigo-small-beautiful.jpg'}}
                    />
                </View>

                <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 18, color: 'black', marginLeft: 10,marginTop: 10, fontWeight: 'bold'}}>Khách sạn</Text>
                    <FlatList 
                        style={{marginTop: 5}}
                        horizontal
                        ItemSeparatorComponent ={() => <View style={{width: 10}} />}
                        data = {this.state.hotel}
                        renderItem = {this.renderHotel}
                    />
                </View>

                <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 18, color: 'black', marginLeft: 10,marginTop: 10, fontWeight: 'bold'}}>Khu nghỉ mát</Text>
                    <FlatList 
                        style={{marginTop: 5}}
                        horizontal
                        ItemSeparatorComponent ={() => <View style={{width: 10}} />}
                        data = {this.state.resort}
                        renderItem = {this.renderResort}
                    />
                </View>

                <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 18, color: 'black', marginLeft: 10,marginTop: 10, fontWeight: 'bold'}}>Biệt Thự</Text>
                    <FlatList 
                        style={{marginTop: 5}}
                        horizontal
                        ItemSeparatorComponent ={() => <View style={{width: 10}} />}
                        data = {this.state.villa}
                        renderItem = {this.renderVilla}
                    />
                </View>

               
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    Banner : {
        width: WIDTH ,
        height: HEIGHT / 3
    }
})

export default Hotel;
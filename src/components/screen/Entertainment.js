import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image,  FlatList, Dimensions, TouchableOpacity} from 'react-native';
import DetailPark from './DetailPark'
import DetailNature from './DetailNature'
import DetailCulture from './DetailCulture'
const { height: HEIGHT } = Dimensions.get('window')
const { width: WIDTH } = Dimensions.get('window')

class Entertainment extends Component {
    constructor(props){
        super(props);
        this.state = {
            park: [],
            nature: [],
            culture: []
            
        }
    }

    componentWillMount(){
        this.getParkFromApi();
        this.getNatureFromApi();
        this.getCultureFromApi();
    }

    getParkFromApi = () => {
        return (
          fetch('https://api.myjson.com/bins/1csg2i')
            .then((respone) => respone.json())
            .then((responseJson) => {
              this.setState({
                park: responseJson
              });

              console.log(responseJson)
            })
            .catch((error) => {
              console.log(error);
            })
        )
    }

    getNatureFromApi = () => {
        return (
          fetch('https://api.myjson.com/bins/9srnu')
            .then((respone) => respone.json())
            .then((responseJson) => {
              this.setState({
                nature: responseJson
              });

              console.log(responseJson)
            })
            .catch((error) => {
              console.log(error);
            })
        )
    }

    getCultureFromApi = () => {
        return (
          fetch('https://api.myjson.com/bins/bcpju')
            .then((respone) => respone.json())
            .then((responseJson) => {
              this.setState({
                culture: responseJson
              });

              console.log(responseJson)
            })
            .catch((error) => {
              console.log(error);
            })
        )
    }

    renderPark = ({item}) => {
        return (
            <DetailPark  item={item}/>
        )
    }

    renderNature = ({item}) => {
        return (
            <DetailNature  item={item}/>
        )
    }

    renderCulture = ({item}) => {
        return (
            <DetailCulture  item={item}/>
        )
    }




   

    render(){
        return (
            <ScrollView>
                <View>
                    <Image 
                        style = {styles.Banner}
                        source={{ uri: 'https://blog.clickgo.vn/data/images/vinpearl-land-nam-hoi-an-clickgo.png'}}
                    />
                </View>

                <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 18, color: 'black', marginLeft: 10,marginTop: 10, fontWeight: 'bold'}}>Công Viên</Text>
                    <FlatList 
                        style={{marginTop: 5}}
                        horizontal
                        ItemSeparatorComponent ={() => <View style={{width: 10}} />}
                        data = {this.state.park}
                        renderItem = {this.renderPark}
                    />
                </View>

                
                <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 18, color: 'black', marginLeft: 10,marginTop: 10, fontWeight: 'bold'}}>Thiên nhiên</Text>
                    <FlatList 
                        style={{marginTop: 5}}
                        horizontal
                        ItemSeparatorComponent ={() => <View style={{width: 10}} />}
                        data = {this.state.nature}
                        renderItem = {this.renderNature}
                    />
                </View>

                <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 18, color: 'black', marginLeft: 10,marginTop: 10, fontWeight: 'bold'}}>Di sản văn hóa thế giới</Text>
                    <FlatList 
                        style={{marginTop: 5}}
                        horizontal
                        ItemSeparatorComponent ={() => <View style={{width: 10}} />}
                        data = {this.state.culture}
                        renderItem = {this.renderCulture}
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

export default Entertainment;
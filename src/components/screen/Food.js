import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image,  FlatList, Dimensions, TouchableOpacity} from 'react-native';
import DetailCoffee from './DetailCoffee';
import DetailFastFood from './DetailFastFood';
import DetailLocalFood from './DetailLocalFood'
const { height: HEIGHT } = Dimensions.get('window')
const { width: WIDTH } = Dimensions.get('window')

class Food extends Component {
    constructor(props){
        super(props);
        this.state = {
            coffee: [],
            fast_food: [],
            local_food: [],
        }
    }

    componentWillMount(){
        this.getCoffeeFromApi();
        this.getFastFoodFromApi();
        this.getLocalFoodFromApi();
    }

    getCoffeeFromApi = () => {
        return (
          fetch('https://api.myjson.com/bins/d277i')
            .then((respone) => respone.json())
            .then((responseJson) => {
              this.setState({
                coffee: responseJson
              });

              console.log(responseJson)
            })
            .catch((error) => {
              console.log(error);
            })
        )
    }

    getFastFoodFromApi = () => {
        return (
          fetch('https://api.myjson.com/bins/125piq')
            .then((respone) => respone.json())
            .then((responseJson) => {
              this.setState({
                fast_food: responseJson
              });

              console.log(responseJson)
            })
            .catch((error) => {
              console.log(error);
            })
        )
    }

    getLocalFoodFromApi = () => {
        return (
          fetch('https://api.myjson.com/bins/uli4y')
            .then((respone) => respone.json())
            .then((responseJson) => {
              this.setState({
                local_food: responseJson
              });

              console.log(responseJson)
            })
            .catch((error) => {
              console.log(error);
            })
        )
    }

    renderCoffee = ({item}) => {
        return (
            <DetailCoffee  item={item}/>
        )
    }

    renderFastFood = ({item}) => {
        return (
            <DetailFastFood  item={item}/>
        )
    }

    renderLocalFood = ({item}) => {
        return (
            <DetailLocalFood  item={item}/>
        )
    }

    render(){
        return (
            <ScrollView>
                <View>
                    <Image 
                        style = {styles.Banner}
                        source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/06/0b/a2/b7/don-cipriani-s.jpg'}}
                    />
                </View>

                <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 18, color: 'black', marginLeft: 10,marginTop: 10, fontWeight: 'bold'}}>Cà phê</Text>
                    <FlatList 
                        style={{marginTop: 5}}
                        horizontal
                        ItemSeparatorComponent ={() => <View style={{width: 10}} />}
                        data = {this.state.coffee}
                        renderItem = {this.renderCoffee}
                    />
                </View>

                <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 18, color: 'black', marginLeft: 10,marginTop: 10, fontWeight: 'bold'}}>Hàng rong</Text>
                    <FlatList 
                        style={{marginTop: 5}}
                        horizontal
                        ItemSeparatorComponent ={() => <View style={{width: 10}} />}
                        data = {this.state.fast_food}
                        renderItem = {this.renderFastFood}
                    />
                </View>

                <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 18, color: 'black', marginLeft: 10,marginTop: 10, fontWeight: 'bold'}}>Đặc sản địa phương</Text>
                    <FlatList 
                        style={{marginTop: 5}}
                        horizontal
                        ItemSeparatorComponent ={() => <View style={{width: 10}} />}
                        data = {this.state.local_food}
                        renderItem = {this.renderLocalFood}
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

export default Food;
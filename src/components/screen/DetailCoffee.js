import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';


class DetailCoffee extends Component {

    constructor(props){
        super(props)
    }

    onPress(){
        const { nick_name, name_place, image, location, hostline, kind, inform } = this.props.item;

        if( nick_name == 'Memory') {
            this.props.navigation.navigate('InformCoffee', {
                image,
                location,
                hostline,
                kind,
                inform,
                name_place
            })

        }else if (nick_name == 'Nine'){
            this.props.navigation.navigate('InformCoffee', {
                image,
                location,
                hostline,
                kind,
                inform,
                name_place
            })
        }else if (nick_name == 'Letto'){
            this.props.navigation.navigate('InformCoffee', {
                image,
                location,
                hostline,
                kind,
                inform,
                name_place
            })
        }
        else if (nick_name == 'HANCOFFEE'){
            this.props.navigation.navigate('InformCoffee', {
                image,
                location,
                hostline,
                kind,
                inform,
                name_place
            })
        }else if (nick_name == 'Alacarte '){
            this.props.navigation.navigate('InformCoffee', {
                image,
                location,
                hostline,
                kind,
                inform,
                name_place
            })
        }
    }



    render() {
        const { name_place, image } = this.props.item;
        
        return (
            <View style={styles.viewStyle}>
                <TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
                    <Image
                        style={styles.itemStyle}
                        source={{ uri: image }}
                        resizeMode={'cover'}
                    />
                </TouchableWithoutFeedback>
                <Text style={styles.textStyle}>{name_place}</Text>
               
            </View>
               
            
        );
    }


}

const styles = StyleSheet.create({

    viewStyle: {
        flex: 1,
        justifyContent: 'flex-end',

    },

    itemStyle: {
        flex: 1,
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').height / 4
    },

    textStyle: {
        color: 'white',
        position: 'absolute',
        fontSize: 20,
    }

})

export default withNavigation(DetailCoffee);
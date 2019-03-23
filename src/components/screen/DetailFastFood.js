import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';


class DetailFastFood extends Component {

    constructor(props){
        super(props)
    }

    onPress(){
        const { nick_name, name_place, image, location, hostline, kind, inform } = this.props.item;

        if( nick_name == 'small') {
            this.props.navigation.navigate('InformFastFood', {
                image,
                location,
                hostline,
                kind,
                inform,
                name_place
            })

        }else if (nick_name == 'six'){
            this.props.navigation.navigate('InformFastFood', {
                image,
                location,
                hostline,
                kind,
                inform,
                name_place
            })
        }else if (nick_name == 'bakery'){
            this.props.navigation.navigate('InformFastFood', {
                image,
                location,
                hostline,
                kind,
                inform,
                name_place
            })
        }
        else if (nick_name == 'restaurant'){
            this.props.navigation.navigate('InformFastFood', {
                image,
                location,
                hostline,
                kind,
                inform,
                name_place
            })
        }else if (nick_name == 'chicken '){
            this.props.navigation.navigate('InformFastFood', {
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

export default withNavigation(DetailFastFood);
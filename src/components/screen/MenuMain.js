import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';

class MenuMain extends Component {

    constructor(props){
        super(props)
    }

    onPress() {
        const { title } = this.props.item;
        if( title == 'Food') {
            this.props.navigation.navigate('Food')
        }else if (title == 'Event'){
            console.log("Ok")
        }else if (title == 'Accomodation'){
            this.props.navigation.navigate('Hotel')
        }else if (title == 'Entertainment'){
            this.props.navigation.navigate('Entertainment')
        }
    }

    render() {
        const { url, title } = this.props.item;
        
        return (
            <View style={styles.viewStyle}>
                <Image
                    style={styles.itemStyle}
                    source={{ uri: url }}
                    resizeMode={'cover'}
                />
                <TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
                    <Text style={styles.textStyle}>{title}</Text>
                </TouchableWithoutFeedback>
            </View>
        );
    }


}

const styles = StyleSheet.create({

    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    itemStyle: {
        flex: 1,
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').height / 6
    },

    textStyle: {
        color: 'red',
        fontWeight: "bold",
        position: 'absolute',
        fontSize: 25,
    }

})

export default  withNavigation(MenuMain);
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const { height: HEIGHT } = Dimensions.get('window')
const { width: WIDTH } = Dimensions.get('window')

class InformFastFood extends Component {

    constructor(props){
        super(props)

        this.state = {
            image : this.props.navigation.state.params.image,
            location : this.props.navigation.state.params.location,
            hostline : this.props.navigation.state.params.hostline,
            kind : this.props.navigation.state.params.kind,
            inform : this.props.navigation.state.params.inform,
            name_place: this.props.navigation.state.params.name_place,
        }
    }


    render() {    
        return (
            <ScrollView>
                <View>
                    <Image 
                        style = {styles.Banner}
                        source={{ uri: this.state.image}}
                    />
                </View>

                <View style={styles.titleStyle}>
                    <View style={{marginLeft: 10, flexDirection: "row"}}>
                        <Image 
                            style = {{width: 50, height: 50}}
                            source={require('../../../asset/icon/food.png')}
                        />

                        <Text style={styles.textBanner}> {this.state.name_place}</Text>
                    </View>
                </View>

                <View style={styles.informStyle}>
                    <View style={{marginLeft: 10, flexDirection: 'column'}}>
                        <Image 
                            style = {{width: 50, height: 50}}
                            source={require('../../../asset/icon/phone-call.png')}
                        />
                        <Text style={{fontSize: 16, color: 'black'}}> Liên hệ</Text>
                    </View>

                    <View style={{marginLeft: 10, flexDirection: 'column'}}>
                        <Image 
                            style = {{width: 50, height: 50}}
                            source={require('../../../asset/icon/like.png')}
                        />
                        <Text style={{fontSize: 16, color: 'black'}}> Yêu thích</Text>
                    </View>

                    <View style={{marginLeft: 10, flexDirection: 'column'}}>
                        <Image 
                            style = {{width: 50, height: 50}}
                            source={require('../../../asset/icon/pencil.png')}
                        />
                        <Text style={{fontSize: 16, color: 'black'}}> Đánh giá</Text>
                    </View>

                    <View style={{marginLeft: 10, flexDirection: 'column'}}>
                        <Image 
                            style = {{width: 50, height: 50}}
                            source={require('../../../asset/icon/success.png')}
                        />
                        <Text style={{fontSize: 16, color: 'black'}}> Đánh dấu</Text>
                    </View>
                   
                </View>

                <View style={styles.detailStyle}>
                    <View style={{marginLeft: 10}}>
                        <Text style={{fontSize: 20, color: 'black', fontWeight: "bold"}}> Giới thiệu</Text>
                    </View>

                    <View style={{marginLeft: 15, marginTop: 20, flexDirection: 'row'}}>
                        <Image 
                            style = {{width: 20, height: 20}}
                            source={require('../../../asset/icon/placeholder.png')}
                        />
                        <Text style={{fontSize: 12, color: 'black', marginLeft: 10}}> {this.state.location}</Text>
                    </View>

                    <View style={{marginLeft: 15, flexDirection: 'row'}}>
                        <Image 
                            style = {{width: 20, height: 20}}
                            source={require('../../../asset/icon/phone-call.png')}
                        />
                        <Text style={{fontSize: 12, color: 'black', marginLeft: 10}}> {this.state.hostline}</Text>
                    </View>

                    <View style={{marginLeft: 15, flexDirection: 'row'}}>
                        <Image 
                            style = {{width: 20, height: 20}}
                            source={require('../../../asset/icon/star.png')}
                        />
                        <Text style={{fontSize: 12, color: 'black', marginLeft: 10}}> {this.state.kind}</Text>
                    </View>
                </View>

                <View style={styles.detailStyle}>
                    <View style={{marginLeft: 10}}>
                        <Text style={{fontSize: 20, color: 'black', fontWeight: "bold"}}> Tổng quan</Text>
                    </View>

                    <View style={{marginLeft: 10}}>
                        <Text>{this.state.inform}</Text>
                    </View>
                </View>
            </ScrollView>
               
            
        );
    }

    
}


const styles = StyleSheet.create({
    Banner : {
        width: WIDTH ,
        height: HEIGHT / 3
    },

    titleStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 1,
        marginTop: 10

    },

    informStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        marginTop: 10

    },

    detailStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        borderWidth: 1,
        marginTop: 10

    },

    textBanner: {
        fontSize: 20,
        color: 'black',  
        justifyContent: 'center', 
        marginLeft: 10,
        alignItems: 'center',
        marginTop: 10
    }
})


export default InformFastFood;
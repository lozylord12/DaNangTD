import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator }  from 'react-navigation';
import Homepage from './components/screen/Homepage';
import Login from './components/screen/Login';
import Register from './components/screen/Register';
import Food from './components/screen/Food';
import InformCoffee from './components/screen/InformCoffee'
import DetailCoffee from './components/screen/DetailCoffee'
import DetailFastFood from './components/screen/DetailFastFood'
import InformFastFood from './components/screen/InformFastFood'
import DetailLocalFood from './components/screen/DetailLocalFood'
import InformLocalFood from './components/screen/InformLocalFood'
import Hotel from './components/screen/Hotel'
import DetailHotel from './components/screen/DetailHotel'
import InformHotel from './components/screen/InformHotel'
import DetailResort from './components/screen/DetailResort'
import InformResort from './components/screen/InformResort'
import DetailVilla from './components/screen/DetailVilla'
import InformVilla from './components/screen/InformVilla'
import Entertainment from './components/screen/Entertainment'
import DetailPark from './components/screen/DetailPark'
import DetailNature from './components/screen/DetailNature'
import DetailCulture from './components/screen/DetailCulture'


const stackNavigatorOptions = {
    headerMode: "none",
    cardStyle: {
      backgroundColor: "white"
    }
};

export const AppNavigator = StackNavigator (
    {
        Login: {
            screen: Login,
            navigationOptions: { 
                header: null 
            }, 
        },
        
        Homepage: {
            screen:  Homepage,
            navigationOptions: { 
                header: null 
            },
        },

        Register: {
            screen: Register,
            navigationOptions: { 
                header: null 
            },
        },

        Food: {
            screen: Food,
            navigationOptions: { 
                title: 'Food'
            },
        },

        Hotel: {
            screen: Hotel,
            navigationOptions: { 
                title: 'Hotel'
            },
        },

        DetailCoffee: {
            screen: DetailCoffee,
            navigationOptions: { 
                title: 'Detail Coffee'
            },
        },

        InformCoffee: {
            screen: InformCoffee,
            navigationOptions: { 
                title: 'Inform Coffee'
            },
        },

        DetailFastFood: {
            screen: DetailFastFood,
            navigationOptions: { 
                title: 'Detail FastFood'
            },
        },

        InformFastFood: {
            screen: InformFastFood,
            navigationOptions: { 
                title: 'Inform FastFood'
            },
        },

        DetailLocalFood: {
            screen: DetailLocalFood,
            navigationOptions: { 
                title: 'Detail LocalFood'
            },
        },

        InformLocalFood: {
            screen: InformLocalFood,
            navigationOptions: { 
                title: 'Inform LocalFood'
            },
        },

        DetailHotel: {
            screen: DetailHotel,
            navigationOptions: { 
                title: 'Detail Hotel'
            },
        },

        InformHotel: {
            screen: InformHotel,
            navigationOptions: { 
                title: 'Inform Hotel'
            },
        },

        DetailResort: {
            screen: DetailResort,
            navigationOptions: { 
                title: 'Detail Hotel'
            },
        },

        InformResort: {
            screen: InformResort,
            navigationOptions: { 
                title: 'Inform Hotel'
            },
        },

        DetailVilla: {
            screen: DetailVilla,
            navigationOptions: { 
                title: 'Detail Villa'
            },
        },

        InformVilla: {
            screen: InformVilla,
            navigationOptions: { 
                title: 'Inform Villa'
            },
        },

        Entertainment: {
            screen: Entertainment,
            navigationOptions: { 
                title: 'Entertainment'
            },
        },

        DetailPark: {
            screen: DetailPark,
            navigationOptions: { 
                title: 'Detail Park'
            },
        },

        DetailNature: {
            screen: DetailNature,
            navigationOptions: { 
                title: 'Detail Nature'
            },
        },

        DetailCulture: {
            screen: DetailCulture,
            navigationOptions: { 
                title: 'Detail Culture'
            },
        },
        
    },
    // stackNavigatorOptions
);



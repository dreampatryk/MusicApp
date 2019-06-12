import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import styles from '../../../styles/Menu/MenuMainStyle'

import MenuButton from '../../Buttons/MenuButton';

export default class Training extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={require('../../../static/backgroundImages/pianoMain.jpg')}
                     style={{width: '100%', height: '100%', position: 'relative'}}>
                <View style={styles.container}>
                    <MenuButton text='Go back to main screen' onPress={() => navigate('Menu')}/>
                    <Text style={{color: 'red'}}>Take the lessons from first to the last. You can always go back to them.</Text>
                    <MenuButton text='Lesson 1' onPress={() => navigate('Tutorial1')}/>
                    <MenuButton text='Lesson 2' onPress={() => navigate('Menu')}/>
                    <MenuButton text='Lesson 3' onPress={() => navigate('Menu')}/>
                    <MenuButton text='Lesson 4' onPress={() => navigate('Menu')}/>
                    <MenuButton text='Lesson 5' onPress={() => navigate('Menu')}/>
                </View>
            </ImageBackground>
        );
    }
}
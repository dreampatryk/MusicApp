import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import styles from '../../../styles/Menu/MenuMainStyle'

import MenuButton from '../../Buttons/MenuButton';

export default class Training extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View >
                <ImageBackground source={{uri: 'http://lenduletmagazin.hu/wp-content/uploads/2016/07/u8PEixm.jpg'}} style={{width: '100%', height: '100%'}}>
                <MenuButton text='Main screen' onPress={() => navigate('Menu')}/>
                </ImageBackground>
            </View>
        );
    }
}
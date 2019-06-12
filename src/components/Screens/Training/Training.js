import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../../../styles/Menu/MenuMainStyle'

import MenuButton from '../../Buttons/MenuButton';

export default class Training extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={require('../../../static/backgroundImages/pianoMain.jpg')}
                             style={{width: '100%', height: '100%', position: 'relative'}}>
                <View style={styles.container}>
                    <MenuButton text='Main screen' onPress={() => navigate('Menu')}/>
                </View>
            </ImageBackground>
        );
    }
}
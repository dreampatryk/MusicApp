import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../../../styles/Menu/MenuMainStyle'

import MenuButton from '../../Buttons/MenuButton';
import GoBackHeader from "../../Others/GoBackHeader";

export default class Training extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={require('../../../static/backgroundImages/pianoMain.jpg')}
                             style={{width: '100%', height: '100%', position: 'relative'}}>
                <View style={{height: '15%', alignItems: 'center', justifyContent: 'flex-end'}}>
                    <GoBackHeader  text="Go back to main menu" onPress={() => this.props.navigation.goBack()}/>
                </View>
            </ImageBackground>
        );
    }
}
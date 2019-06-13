import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import styles from '../../../styles/Menu/MenuMainStyle'

import MenuButton from '../../Buttons/MenuButton';

export default class MenuScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
        <ImageBackground source={require('../../../static/backgroundImages/pianoMain.jpg')}
                                  style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
              <MenuButton text='Start tutorial' onPress={()=> navigate('TutorialMenu')}/>
              <MenuButton text='Start game'/>
              <MenuButton text='Training' onPress={() => navigate('Training')}/>
            </View>
        </ImageBackground>
    );
  }
}
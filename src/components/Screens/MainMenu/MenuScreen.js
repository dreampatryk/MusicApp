import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from '../../../styles/Menu/MenuMainStyle'

import MenuButton from '../../Buttons/MenuButton';

export default class MenuScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
          <MenuButton text='Start tutorial' onPress={()=> navigate('Tutorial')}/>
          <MenuButton text='Start game'/>
          <MenuButton text='Training' onPress={() => navigate('Training')}/>
      </View>
    );
  }
}
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import MenuButton from './MenuButton';

export default class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
          <MenuButton text='Dupa'/>
          <MenuButton text='Kupa'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'space-between',
        backgroundColor: '#F5FCFF',
        marginBottom: 10
    }
  });
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import MenuButton from '../Buttons/MenuButton';

export default class Training extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
          <MenuButton text='Main screen' onPress={() => navigate('Menu')}/>
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
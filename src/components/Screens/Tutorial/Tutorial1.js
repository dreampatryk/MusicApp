import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import styles from '../../../styles/Menu/MenuMainStyle'

import MenuButton from '../../Buttons/MenuButton';

export default class Tutorial1 extends Component {


    state = {
        pictureIndex: 0,
    };

    nextPicture = () => {
        if(this.state.pictureIndex < 2) {this.setState({pictureIndex: this.state.pictureIndex + 1}) }
    };

    previousPicture = () => {
        if(this.state.pictureIndex > 0) {this.setState({pictureIndex: this.state.pictureIndex - 1}) }
    };


    render() {
        const images = [
            {
                source: require('../../../static/backgroundImages/pianoMain.jpg')
            },
            {
                source: require('../../../static/backgroundImages/pianoMain.jpg')
            },
            {
                source: require('../../../static/backgroundImages/pianoMain.jpg')
            }
        ];
        const {navigate} = this.props.navigation;
        return (
            <View styles={styles.container}>
                <MenuButton text='Back to main menu' onPress={() => navigate('Menu')}/>
                <Image source={images[this.state.pictureIndex].source}/>
                <MenuButton text='Back to main menu' onPress={() => this.nextPicture()}/>
                <MenuButton text='Back to main menu' onPress={() => this.previousPicture()}/>

            </View>
        );
    }
}


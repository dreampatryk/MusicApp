import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import styles from '../../../styles/Menu/MenuMainStyle'

import MenuButton from '../../Buttons/MenuButton';

export default class Tutorial extends Component {

    state = {
        pictureIndex: 0,
        finished: false,
    };
    imgLength = this.props.navigation.getParam('imgLength', 0);
    images    = this.props.navigation.getParam('images', []);

    nextPicture = () => {
        if(this.state.pictureIndex < this.imgLength - 1) {
            if (this.state.pictureIndex === this.imgLength - 2) {
                this.setState({pictureIndex: this.state.pictureIndex + 1, finished: true})
            }
            else
            {
                this.setState({pictureIndex: this.state.pictureIndex + 1});
            }
        }
    };

    previousPicture = () => {
        if(this.state.pictureIndex > 0) {this.setState({pictureIndex: this.state.pictureIndex - 1, finished: false}) }
    };

    render() {
        const {navigation} = this.props;
        return (
            <View styles={styles.container}>
                <Text>{JSON.stringify(this.images[0].source)}</Text>
                <MenuButton text="Back to tutorials' menu" onPress={() => navigation.goBack()}/>
                <Text>Slide number: {this.state.pictureIndex}</Text>
                <Image source={this.images[this.state.pictureIndex].req} style={{width: 300, height: 300, position: 'relative'}}/>
                {this.state.pictureIndex < this.imgLength-1 && <MenuButton text='Next' onPress={() => this.nextPicture()}/>}
                {this.state.pictureIndex > 0 && <MenuButton text='Previous' onPress={() => this.previousPicture()}/>}
                {this.state.finished && <MenuButton text='Finish' onPress={() => navigation.goBack()}/>}
            </View>
        );
    }
}


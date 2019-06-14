import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import styles from '../../../styles/Menu/MenuMainStyle'

import MenuButton from '../../Buttons/MenuButton';

export default class TutorialMenu extends Component {

    images1 = [
        {req: require('../../../static/TutorialImages/Tutorial1Images/1.jpg')},
        {req: require('../../../static/TutorialImages/Tutorial1Images/2.jpg')},
        {req: require('../../../static/TutorialImages/Tutorial1Images/3.jpg')}
    ];
    images2 = [
        {req: require('../../../static/TutorialImages/Tutorial1Images/1.jpg')},
        {req: require('../../../static/TutorialImages/Tutorial1Images/2.jpg')},
        {req: require('../../../static/TutorialImages/Tutorial1Images/3.jpg')}
    ];
    images3 = [
        {req: require('../../../static/TutorialImages/Tutorial1Images/1.jpg')},
        {req: require('../../../static/TutorialImages/Tutorial1Images/2.jpg')},
        {req: require('../../../static/TutorialImages/Tutorial1Images/3.jpg')}
    ];
    images4 = [
        {req: require('../../../static/TutorialImages/Tutorial1Images/1.jpg')},
        {req: require('../../../static/TutorialImages/Tutorial1Images/2.jpg')},
        {req: require('../../../static/TutorialImages/Tutorial1Images/3.jpg')}
    ];
    images5 = [
        {req: require('../../../static/TutorialImages/Tutorial1Images/1.jpg')},
        {req: require('../../../static/TutorialImages/Tutorial1Images/2.jpg')},
        {req: require('../../../static/TutorialImages/Tutorial1Images/3.jpg')}
    ];
    images = [
        {reqTable: this.images1, text: "Lesson 1"},
        {reqTable: this.images2, text: "Lesson 2"},
        {reqTable: this.images3, text: "Lesson 3"},
        {reqTable: this.images4, text: "Lesson 4"},
        {reqTable: this.images5, text: "Lesson 5"},
    ];
    renderMenuButtons() {
        return this.images.map((item, key) => {
            return(
                <MenuButton  text={item.text}  key={key}
                             onPress={() => this.props.navigation.navigate('Tutorial',
                    {images: item.reqTable, imgLength: item.reqTable.length})}/>
            )
        })
    }
    render() {
        const {navigation} = this.props;
        return (
            <ImageBackground source={require('../../../static/backgroundImages/pianoMain.jpg')}
                     style={{width: '100%', height: '100%', position: 'relative'}}>
                <View style={styles.container}>
                    <MenuButton text='Go back to main screen' onPress={() => navigation.goBack()}/>
                    <Text style={{color: 'red'}}>Take the lessons from first to the last. You can always go back to them.</Text>
                    {this.renderMenuButtons()}
                </View>
            </ImageBackground>
        );
    }
}
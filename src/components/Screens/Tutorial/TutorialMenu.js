import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import styles from '../../../styles/Menu/MenuMainStyle'

import MenuButton from '../../Buttons/MenuButton';
import GoBackHeader from "../../Others/GoBackHeader";

export default class TutorialMenu extends Component {

    images1 = [
        {req: require('../../../static/TutorialImages/Tutorial1Images/1.jpg')},
        {req: require('../../../static/TutorialImages/Tutorial1Images/2.jpg')},
        {req: require('../../../static/TutorialImages/Tutorial1Images/3.jpg')},
        {req: require('../../../static/TutorialImages/Tutorial1Images/4.jpg')}
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
        {reqTable: this.images5, text: "Lesson 5"},
        {reqTable: this.images5, text: "Lesson 5"},
        {reqTable: this.images5, text: "Lesson 5"},
        {reqTable: this.images5, text: "Lesson 5"},
        {reqTable: this.images5, text: "Lesson 5"},
    ];
    renderMenuButtons() {
        return this.images.map((item, key) => {
            return(
                <View  key={key}>
                <MenuButton  text={item.text}
                             onPress={() => this.props.navigation.navigate('Tutorial',
                    {images: item.reqTable, imgLength: item.reqTable.length})}/>
                </View>
            )
        })
    }
    render() {
        const {navigation} = this.props;
        return (
            <ImageBackground source={require('../../../static/backgroundImages/pianoMain.jpg')}
                     style={{width: '100%', height: '100%', position: 'relative'}}>
                <ScrollView>
                    <View style={{height: '15%', alignItems: 'center', justifyContent: 'flex-end'}}>
                        <GoBackHeader  text="Go back to main menu" onPress={() => this.props.navigation.goBack()}/>
                    </View>
                    <View style={styles.container}>
                        <Text style={{color: 'red'}}>Take the lessons from first to the last. You can always go back to them.</Text>
                        {this.renderMenuButtons()}
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}
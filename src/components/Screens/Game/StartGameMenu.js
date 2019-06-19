import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import styles from '../../../styles/Menu/MenuMainStyle'

import MenuButton from '../../Buttons/MenuButton';
import GoBackHeader from '../../Others/GoBackHeader';
import TutorialTexts from "../../../styles/Texts/TutorialTexts";
import { ScrollView } from 'react-native-gesture-handler';

export default class StartGameMenu extends Component {


    levels=[
        {text: 'Level 1', notes: 'tutaj powinny byc nuty', difficulty: 'w sumie można takie coś zrobić :V'},
        {text: 'Level 2', notes: 'tutaj powinny byc nuty', difficulty: 'w sumie można takie coś zrobić :V'},
        {text: 'Level 3', notes: 'tutaj powinny byc nuty', difficulty: 'w sumie można takie coś zrobić :V'},
        {text: 'Level 4', notes: 'tutaj powinny byc nuty', difficulty: 'w sumie można takie coś zrobić :V'},
        {text: 'Level 5', notes: 'tutaj powinny byc nuty', difficulty: 'w sumie można takie coś zrobić :V'},
        {text: 'Level 6', notes: 'tutaj powinny byc nuty', difficulty: 'w sumie można takie coś zrobić :V'},
        {text: 'Level 4', notes: 'tutaj powinny byc nuty', difficulty: 'w sumie można takie coś zrobić :V'},
        {text: 'Level 5', notes: 'tutaj powinny byc nuty', difficulty: 'w sumie można takie coś zrobić :V'},
        {text: 'Level 6', notes: 'tutaj powinny byc nuty', difficulty: 'w sumie można takie coś zrobić :V'}
    ];

    renderLevelButtons() {
        return this.levels.map((item, key) => {
            return(
                <View key={key}>
                    <MenuButton  text={item.text}
                             onPress={() => this.props.navigation.navigate('Level',
                                 {notes: item.notes, notesLength: item.notes.length})}/>
                    <Text style={TutorialTexts.smallText}>Difficulty: {item.difficulty}</Text>
                </View>
            )
        })
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={require('../../../static/backgroundImages/pianoMain.jpg')} style={{width: '100%', height: '100%'}}>
                <ScrollView>
                    <View style={{height: '15%', alignItems: 'center', justifyContent: 'flex-end'}}>
                        <GoBackHeader  text="Go back to main menu" onPress={() => this.props.navigation.goBack()}/>
                    </View>
                    <View style={styles.container}>
                        <Text style={TutorialTexts.text}>Choose level</Text>
                        {this.renderLevelButtons()}
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}
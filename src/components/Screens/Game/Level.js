import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
//import styles from '../../../styles/Menu/MenuMainStyle'

import MenuButton from '../../Buttons/MenuButton';
import TutorialButton from "../../Buttons/TutorialButton";
import TutorialTexts from "../../../styles/Texts/TutorialTexts";
import Piano from '../../Piano/Piano';

export default class Level extends Component {

    state = {
        noteIndex: 0,
    };
    notesLength = this.props.navigation.getParam('notesLength', 0);
    notes       = this.props.navigation.getParam('notes', []);

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Piano/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    transform: [{ rotate: '90deg'}],
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  }
})


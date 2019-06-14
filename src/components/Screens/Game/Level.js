import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import styles from '../../../styles/Menu/MenuMainStyle'

import MenuButton from '../../Buttons/MenuButton';
import TutorialButton from "../../Buttons/TutorialButton";
import TutorialTexts from "../../../styles/Texts/TutorialTexts";

export default class Level extends Component {

    state = {
        noteIndex: 0,
    };
    notesLength = this.props.navigation.getParam('notesLength', 0);
    notes       = this.props.navigation.getParam('notes', []);

    render() {
        const {navigation} = this.props;
        return (
            <View styles={{flex: 1, paddingTop: 20, justifyContent: 'space-between'}}>
                <MenuButton text="Back to tutorials' menu" onPress={() => navigation.goBack()}/>
                <Text>{this.notesLength}</Text>
                <Text>{JSON.stringify(this.notes)}</Text>
            </View>
        );
    }
}


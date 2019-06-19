import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import styles from '../../../styles/Menu/MenuMainStyle'

import MenuButton from '../../Buttons/MenuButton';
import TutorialButton from "../../Buttons/TutorialButton";
import TutorialTexts from "../../../styles/Texts/TutorialTexts";
import GoBackHeader from "../../Others/GoBackHeader";
import {ScrollView} from "react-native-gesture-handler";

export default class Tutorial extends Component {

    state = {
        pictureIndex: 0,
    };
    imgLength = this.props.navigation.getParam('imgLength', 0);
    images    = this.props.navigation.getParam('images', []);

    nextPicture = () => {
        if(this.state.pictureIndex < this.imgLength - 1) {
            if (this.state.pictureIndex === this.imgLength - 2) {
                this.setState({pictureIndex: this.state.pictureIndex + 1})
            }
            else
            {
                this.setState({pictureIndex: this.state.pictureIndex + 1});
            }
        }
    };

    previousPicture = () => {
        if(this.state.pictureIndex > 0) {this.setState({pictureIndex: this.state.pictureIndex - 1}) }
    };

    render() {
        const {navigation} = this.props;
        return (
            <View>
                <View style={{height: '20%', alignItems: 'center', justifyContent: 'space-around'}}>
                    <GoBackHeader  text="Go back to tutorials' menu" onPress={() => this.props.navigation.goBack()}/>
                    <Text style={TutorialTexts.text}>Slides left: {this.imgLength - this.state.pictureIndex - 1}</Text>
                </View>
                <Image source={this.images[this.state.pictureIndex].req} style={{width: '100%', height: '70%'}}/>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'flex-end', height: '10%'}}>
                    <TutorialButton disabled ={this.state.pictureIndex === 0} text='Previous' onPress={() => this.previousPicture()}/>
                    <TutorialButton disabled={this.state.pictureIndex !== this.imgLength - 1} text='Finish' onPress={() => navigation.goBack()}/>
                    <TutorialButton disabled={this.state.pictureIndex === this.imgLength - 1} text='Next' onPress={() => this.nextPicture()}/>
                </View>
            </View>
        );
    }
}


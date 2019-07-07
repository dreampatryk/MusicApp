import React, { Component } from 'react';
import {Text, View} from 'react-native';
import MenuButton from "../Buttons/MenuButton";

export default class ImageGallery extends Component {
    render() {
        const text = this.props.text ? this.props.text : "Go back";
        const back = this.props.onPress ? this.props.onPress : () => {};
            return (
                    <MenuButton text={text} onPress={back}/>
            )
        }
}
import React from 'react';
import { View, ImageBackground} from 'react-native';

interface Props {
    navigation: Navigation,
}
export default class Training extends React.Component<Props> {
    render() {
        return (
            <ImageBackground source={require('../../../static/backgroundImages/pianoMain.jpg')}
                             style={{width: '100%', height: '100%', position: 'relative'}}>
                <View style={{height: '15%', alignItems: 'center', justifyContent: 'flex-end', position: 'fixed'}}>
                </View>
            </ImageBackground>
        );
    }
}
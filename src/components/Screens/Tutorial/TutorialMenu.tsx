import React, { Fragment } from 'react';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import styles from '../../../styles/Menu/MenuMainStyle';

import MenuButton from '../../Buttons/MenuButton';

interface Props {
  navigation: Navigation;
}

interface TutorialDesc {
  reqTable: Array<NodeRequire>;
  text: string;
}

interface State {
  images?: Array<TutorialDesc>;
}

export default class TutorialMenu extends React.Component<Props, State> {
  fillWithPictures(): Array<NodeRequire> {
    let reqTable: Array<NodeRequire> = [];
    for (let i = 1; i < 4; i++) {
      reqTable.push(
        require(`../../../static/TutorialImages/Tutorial1Images/${i}.jpg`),
      );
    }
    return reqTable;
  }

  addImageArrays() {
    let newImages: Array<TutorialDesc> = [];
    for (let i = 1; i < 10; i++) {
      const imageArray: NodeRequire[] = this.fillWithPictures();
      newImages.push({ reqTable: imageArray, text: `Lesson ${i}` });
    }
    this.setState({
      images: newImages,
    });
  }

  renderMenuButtons() {
    this.addImageArrays();
    return this.state.images!.map(item => {
      return (
        <Fragment>
          <MenuButton
            text={item.text}
            onPress={() =>
              this.props.navigation.navigate('Tutorial', {
                images: item.reqTable,
                imgLength: item.reqTable.length,
              })
            }
          />
        </Fragment>
      );
    });
  }

  render() {
    return (
      <ImageBackground
        source={require('../../../static/backgroundImages/pianoMain.jpg')}
        style={{ width: '100%', height: '100%', position: 'relative' }}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={{ color: 'red' }}>
              Take the lessons from first to the last. You can always go back to
              them.
            </Text>
            {this.renderMenuButtons()}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

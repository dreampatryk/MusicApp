import React from 'react';
import MenuButton from '../Buttons/MenuButton';

interface Props {
  text: string;
  onPress: () => void;
}
export default class ImageGallery extends React.Component<Props> {
  render() {
    const text = this.props.text ? this.props.text : 'Go back';
    const back = this.props.onPress ? this.props.onPress : () => {};
    return <MenuButton text={text} onPress={back} />;
  }
}

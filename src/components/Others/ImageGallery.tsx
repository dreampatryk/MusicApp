import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';

interface Props {
  index: number;
  images: any;
}

export default class ImageGallery extends React.Component<Props> {
  render() {
    const { images } = this.props.images;
    if (images && images.length) {
      return (
        <View>
          <Image source={images[this.props.index].source} />
        </View>
      );
    }
    console.log('No images found.');
    return null;
  }
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    backgroundColor: 'powderblue',
    borderRadius: 25,
    paddingVertical: 13,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});

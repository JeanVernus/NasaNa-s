import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
} from 'react-native';
import RNFS from 'react-native-fs';


export default class downloadFile extends Component {
  constructor() {
    super()
    this.state = {
      isDone: false,
    };
    this.onDownloadImagePress = this.onDownloadImagePress.bind(this);
  }

  onDownloadImagePress() {

      RNFS.downloadFile({
        fromUrl: 'https://facebook.github.io/react-native/img/header_logo.png',
        toFile: `${RNFS.DocumentDirectoryPath}/react-native.png`,
      }).promise.then((r) => {
        this.setState({ isDone: true })
      });
  }

  render() {
    const preview = this.state.isDone ? (<View>
      <Image style={{
        width: 100,
        height: 100,
        backgroundColor: 'black',
      }}
        source={{
          uri: `file://${RNFS.DocumentDirectoryPath}/react-native.png`,
          scale: 1
        }}
      />
      <Text>{`file://${RNFS.DocumentDirectoryPath}/react-native.png`}</Text>
    </View>
    ) : null;
    return (
      <View>
        <Text onPress={this.onDownloadImagePress}>Download Image</Text>
        {preview}
      </View>
    );
  }
}
AppRegistry.registerComponent('downloadFile', () => downloadFile);
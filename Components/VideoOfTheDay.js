
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

export default class App extends React.Component {

  state = {
    video: "https://youtu.be/tsjd7xdgfjA?t=10",
    mute: false,
    shouldPlay: true,
  }

  handlePlayAndPause = () => {
    this.setState((prevState) => ({
      shouldPlay: !prevState.shouldPlay
    }));
  }

  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute,
    }));
  }
  render() {
    const { width } = Dimensions.get('window');
    const { video } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <Text style={{ textAlign: 'center' }}> React Native Video </Text>
          <Video
            source={{ uri: video }}
            shouldPlay={this.state.shouldPlay}
            resizeMode="cover"
            style={{ width, height: 300 }}
            isMuted={this.state.mute}
          />
          <View style={styles.controlBar}>
            <MaterialIcons
              name={this.state.mute ? "volume-mute" : "volume-up"}
              size={45}
              color="white"
              onPress={this.handleVolume}
            />
            <MaterialIcons
              name={this.state.shouldPlay ? "pause" : "play-arrow"}
              size={45}
              color="white"
              onPress={this.handlePlayAndPause}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
});
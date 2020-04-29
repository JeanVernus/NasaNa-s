import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import Axios from 'axios';

class ImageOfTheDayPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      auteur: '',
      title: '',
      date: '',
      explanation: '',
      isLoading: true,
    }
  }

  componentDidMount() {
    const ApiToken = '5hZYEtsr0W68zA1YrqK9BpDzSFfty0rhzvdf90ER';
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=' + ApiToken)
      .then(res => (
        this.setState({
          image: res.data.hdurl,
          auteur: res.data.copyright,
          title: res.data.title,
          date: res.data.date,
          explanation: res.data.explanation,
          isLoading: false
        })
      ))
  }

  displayLoading() {
    const { isLoading } = this.state
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      )
    }

  }


  render() {
    const { image, auteur, date, title, explanation } = this.state;
    const { width } = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>NasaNaïs</Text>
          <Text style={styles.PicTitle}>{title}</Text>
          <Text style={styles.Date}>Photo du {date}</Text>
        </View>
        <ScrollView style={styles.ScrollView}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
        <View>
          <Image
            style={styles.stretch}
            source={{ uri: image }}
          />
          <Text style={styles.author}>{auteur}</Text>
        </View>
        {this.displayLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 0,
    flex: 1,
    backgroundColor: 'black',
  },
  stretch: {
    width: 350,
    height: 250,
    borderWidth: 2,
    borderColor: 'red',
    marginBottom: 0,
  },
  Date: {
    color: 'white',
    textAlign: 'center',
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    fontSize: 40,
    color: 'red',
    textDecorationLine: "underline",
  },
  PicTitle: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    textDecorationLine: "underline",
  },
  author: {
    textAlign: 'left',
    color: 'white',
  },
  explanation: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  ScrollView: {
    marginBottom: 40,
    padding: 5,
    height: 10
  }
});

export default ImageOfTheDayPage;
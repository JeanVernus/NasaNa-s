import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';


class Favoris extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    
  }

  saveToCameraRoll = (item) => {
    
  }

  RenderFavoritePics() {
    const { favoritePics } = this.props;
    const NewFavoritePics = favoritePics.filter(item => item.length > 6)
    console.log('this.props.favoritePics,', this.props.favoritePics);
    return (
      <View>
        {NewFavoritePics.map((item, index) => (
          <View key={index}>
            <Image
              style={styles.stretch}
              source={{ uri: item }}
            />
            <Button title='download' onPress={() => { this.saveToCameraRoll(item) }} />
          </View>
        ))}
      </View>
    )
  }

  render() {
    console.log(this.props.favoritePics);

    return (
      <View style={styles.container}>
        <Text style={styles.Title}>Mes Images favorites</Text>
        <ScrollView>
          {this.RenderFavoritePics()}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: 'black',
  },
  Title: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
    fontSize: 40,
    textDecorationLine: 'underline'
  },
  stretch: {
    width: 350,
    height: 230,
    borderWidth: 2,
    borderColor: 'red',
    marginBottom: 0,
  },
})

const mapStateToProps = (state) => {
  return {
    favoritePics: state.favoritePics
  }
}

export default connect(mapStateToProps)(Favoris);
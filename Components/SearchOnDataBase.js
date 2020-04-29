import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView, ToastAndroid } from 'react-native';
import Axios from 'axios';

class SearchOnDataBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      Search: '',
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      image5: null,
      image6: null,
      image7: null,
      image8: null,
    }
  }

  handleChange(event) {
    this.state.Search = event
  }

  searchImage() {
    const { Search } = this.state;
    console.log('Envoi', this.state.Search);
    Axios.get('https://images-api.nasa.gov/search?q=' + Search)
      .then(res => (
        // console.log(res.data.collection.items[0].links[0].href)

        this.setState({
          image1: res.data.collection.items[0].links[0].href,
          image2: res.data.collection.items[1].links[0].href,
          image3: res.data.collection.items[2].links[0].href,
          image4: res.data.collection.items[3].links[0].href,
          image5: res.data.collection.items[4].links[0].href,
          image6: res.data.collection.items[5].links[0].href,
          image7: res.data.collection.items[6].links[0].href,
          image8: res.data.collection.items[7].links[0].href,
        },
        )
      ))
      .catch((error) => {
        ToastAndroid.showWithGravity("Aucune correspondance trouvées!", 10, ToastAndroid.CENTER)

    })
  }

  ToggleFavorite1() {
    const action = { type: "TOGGLE_FAVORITE", value: this.state.image1}
    const action1 = { type: "TOGGLE_FAVORITE", value: this.state.id +=1 }
    this.props.dispatch(action)
    this.props.dispatch(action1)
  }
  ToggleFavorite2() {
    const action = { type: "TOGGLE_FAVORITE", value: this.state.image2 }
    const action1 = { type: "TOGGLE_FAVORITE", value: this.state.id +=1 }
    this.props.dispatch(action)
    this.props.dispatch(action1)
  }
  ToggleFavorite3() {
    const action = { type: "TOGGLE_FAVORITE", value: this.state.image3 }
    const action1 = { type: "TOGGLE_FAVORITE", value: this.state.id +=1 }
    this.props.dispatch(action)
    this.props.dispatch(action1)
  }
  ToggleFavorite4() {
    const action = { type: "TOGGLE_FAVORITE", value: this.state.image4 }
    const action1 = { type: "TOGGLE_FAVORITE", value: this.state.id +=1 }
    this.props.dispatch(action)
    this.props.dispatch(action1)
  }
  ToggleFavorite5() {
    const action = { type: "TOGGLE_FAVORITE", value: this.state.image5 }
    const action1 = { type: "TOGGLE_FAVORITE", value: this.state.id +=1 }
    this.props.dispatch(action)
    this.props.dispatch(action1)
  }
  ToggleFavorite6() {
    const action = { type: "TOGGLE_FAVORITE", value: this.state.image6 }
    const action1 = { type: "TOGGLE_FAVORITE", value: this.state.id +=1 }
    this.props.dispatch(action)
    this.props.dispatch(action1)
  }
  ToggleFavorite7() {
    const action = { type: "TOGGLE_FAVORITE", value: this.state.image7 }
    const action1 = { type: "TOGGLE_FAVORITE", value: this.state.id +=1 }
    this.props.dispatch(action)
    this.props.dispatch(action1)
  }
  ToggleFavorite8() {
    const action = { type: "TOGGLE_FAVORITE", value: this.state.image8 }
    const action1 = { type: "TOGGLE_FAVORITE", value: this.state.id +=1 }
    this.props.dispatch(action)
    this.props.dispatch(action1)
  }

  componentDidUpdate() {
    console.log("componentDidUpdate : ")
    console.log(this.props.favoritePics)
  }

  render() {
    const { image1, image2, image3, image4, image5, image6, image7, image8 } = this.state;
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Librarie</Text>
        <TextInput
          style={styles.input}
          name="Search" placeholder="Recherche"
          onChangeText={event => this.handleChange(event)}
          onSubmitEditing={() => this.searchImage()}
        />
        <Button
          title="Rechercher"
          onPress={() => this.searchImage()}>
        </Button>
        <View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{ maxWidth: 1500 }}
            showsHorizontalScrollIndicator={true}
            scrollEventThrottle={500}
            decelerationRate="fast"
            pagingEnabled
          >
            <View>
              <Image
                style={styles.stretch}
                source={{ uri: image1 }}
                id={this.state.id}
              />
              <Button title="Favoris" onPress={() => this.ToggleFavorite1()} />
            </View>
            <View>
              <Image
                style={styles.stretch}
                source={{ uri: image2 }}
                id={this.state.id}
              />
              <Button title="Favoris" onPress={() => this.ToggleFavorite2()} />
            </View>
            <View>
              <Image
                style={styles.stretch}
                source={{ uri: image3 }}
                id={this.state.id}
              />
              <Button title="Favoris" onPress={() => this.ToggleFavorite3()} />
            </View>
            <View>
              <Image
                style={styles.stretch}
                source={{ uri: image4 }}
                id={this.state.id}
              />
              <Button title="Favoris" onPress={() => this.ToggleFavorite4()} />
            </View>
          </ScrollView>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{ maxWidth: 1500 }}
            showsHorizontalScrollIndicator={true}
            scrollEventThrottle={500}
            decelerationRate="fast"
            pagingEnabled
          >
            <View>
              <Image
                style={styles.stretch}
                source={{ uri: image5 }}
                id={this.state.id}
              />
              <Button title="Favoris" onPress={() => this.ToggleFavorite5()} />
            </View>
            <View>
              <Image
                style={styles.stretch}
                source={{ uri: image6 }}
                id={this.state.id}
              />
              <Button title="Favoris" onPress={() => this.ToggleFavorite6()} />
            </View>
            <View>
              <Image
                style={styles.stretch}
                source={{ uri: image7 }}
                id={this.state.id}
              />
              <Button title="Favoris" onPress={() => this.ToggleFavorite7()} />
            </View>
            <View>
              <Image
                style={styles.stretch}
                source={{ uri: image8 }}
                id={this.state.id}
              />
              <Button title="Favoris" onPress={() => this.ToggleFavorite8()} />
            </View>
          </ScrollView>
        </View>
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
    height: 230,
    borderWidth: 2,
    borderColor: 'red',
    marginBottom: 0,
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    fontSize: 40,
    color: 'red',
    textDecorationLine: "underline",
  },
  input: {
    textAlign: 'center',
    color: 'white',
  }
})

const mapStateToProps = (state) => {
  return {
    favoritePics: state.favoritePics
  }
}

export default connect(mapStateToProps)(SearchOnDataBase);
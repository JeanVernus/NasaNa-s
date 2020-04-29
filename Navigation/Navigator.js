import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import SearchOnDataBase from '../Components/SearchOnDataBase';
import ImageOfTheDay from '../Components/ImageOfTheDayPage';
import Favoris from '../Components/Favoris';
import { Text, StyleSheet } from 'react-native';

const TabNavigator = createBottomTabNavigator({
  Accueil: {
    screen: ImageOfTheDay,
    navigationOptions: {
      tabBarLabel: () => {
        return <Text style={styles.label1}>
          Image du jour
        </Text>
      }
    }
  },
  Search: {
    screen: SearchOnDataBase,
    navigationOptions: {
      tabBarLabel: () => {
        return <Text style={styles.label2}>
          Rechercher
        </Text>
      }
    }
  },
  Favoris: {
    screen: Favoris,
    navigationOptions: {
      tabBarLabel: () => {
        return <Text style={styles.label2}>
          Favoris
        </Text>
      }
    }
  }
},
  {
    tabBarOptions: {
      activeBackgroundColor: 'red',
      inactiveBackgroundColor: 'black',
      showLabel: true,
      showIcon: true
    }
  }
)

const styles = StyleSheet.create({
  label1: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 12
  },
  label2: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10
  },
})

export default createAppContainer(TabNavigator)
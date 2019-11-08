import React, { Component } from 'react';
import Loading from '../components/loading';
import {
    Text,
    View,
    StyleSheet,
    Image,
    AsyncStorage,
    Button,
  } from "react-native";


export default class SettingsPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Settings",
    };
  };
  onDeleteFavoritesPress() {
    AsyncStorage.removeItem("recipes").then(() => alert("Favoris supprimés !"));
  }

    render() {
        return (
            <View style={styles.container}>
            <Text style={{ color: "white" }}>Settings</Text>
            <Button
            color="#ff4500"
              title="Delete Favorites"
              onPress={() => this.onDeleteFavoritesPress()}
            />
          </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: ""
    }
  });
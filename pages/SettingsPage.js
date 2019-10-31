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
    render() {
        return (
            <View style={styles.container}>
            <Text style={{ color: "white" }}>Settings</Text>
            <Button
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
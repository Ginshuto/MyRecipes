import React, { Component } from 'react';
import Loading from '../components/loading';
import {
    Text,
    View,
    StyleSheet,
    Image,
    AsyncStorage,
    RefreshControl
  } from "react-native";

export default class FavoritesPage extends Component {
    render() {
        return (
                <Loading displayColor="blue">
        <Text>Connexion au serveur...</Text>
      </Loading>
        )
    }
}

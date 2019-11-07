import React from "react";
import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import FavoritesPage from "../pages/FavoritesPage";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import RecipePage from "../pages/RecipePage";

const recipeNavigator = createStackNavigator(
  {
    Home: { screen: HomePage },
    Recipe: { screen: RecipePage }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "blue"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const tabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: recipeNavigator,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={"ios-home"} />
        )
      }
    },
    Favorites: {
      screen: FavoritesPage,
      navigationOptions: {
        tabBarLabel: "Favorites",
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={"ios-star"} />
        )
      }
    },
    Settings: {
      screen: SettingsPage,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={"ios-settings"} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    activeColor: "yellow",
    inactiveColor: "white",
    barStyle: { backgroundColor: "blue" },
    labelStyle: { textAlign: "center" }
  }
);

export default tabNavigator;

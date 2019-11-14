import React from "react";
import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import FavoritesPage from "../pages/FavoritesPage";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
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
        backgroundColor: "#FF4500"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
const FavoriteNavigator = createStackNavigator(
  {
    Favorites: { screen: FavoritesPage },
    Recipe: { screen: RecipePage }
  },
  {
    initialRouteName: "Favorites",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#ff4500"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const SettingsNavigator = createStackNavigator(
  {
    Settings: { screen: SettingsPage }
  },
  {
    initialRouteName: "Settings",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#FF4500"
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
      screen: FavoriteNavigator,
      navigationOptions: {
        tabBarLabel: "Favorites",
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={"ios-star"} />
        )
      }
    },
    Settings: {
      screen: SettingsNavigator,
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
    activeColor: "#FFD700",
    inactiveColor: "white",
    barStyle: { backgroundColor: "#FF4500" },
    labelStyle: { textAlign: "center" }
  }
);

export default tabNavigator;

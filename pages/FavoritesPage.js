import React, { Component } from "react";
import Loading from "../components/loading";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  AsyncStorage,
  RefreshControl,
  FlatList
} from "react-native";
import { SwipeRow } from "react-native-swipe-list-view";
import { NavigationEvents } from "react-navigation";
import { ImgRecipe } from "./HomePage";
import * as Font from "expo-font";

export default class FavoritesPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Favorites Recipes",
    };
  };

  state = { recipes: [], modalVisible: false, refreshing: false };

  deleteFav(index) {
    AsyncStorage.getItem("recipes").then(data => {
      let tab = [];
      if (data != null) {
        tab = JSON.parse(data);
      }
      tab.splice(index, 1);
      AsyncStorage.setItem("recipes", JSON.stringify(tab))
        .then(() => {
          this.refresh();
        })
        .catch(err => {
          alert(err);
        });
    });
  }

  componentDidMount(){
    Font.loadAsync({
      'Lato': require('../assets/fonts/Lato.ttf'),
    });
    this.refresh();
  }

  refresh() {
    this.setState({ refreshing: true });
    AsyncStorage.getItem("recipes").then(data => {
      this.setState({ recipes: JSON.parse(data), refreshing: false });
      console.log(this.state.recipes);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents onDidFocus={() => this.refresh()} />
        <FlatList
          data={this.state.recipes}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.refresh()}
            />
          }
          keyExtractor={(item, index) => index.toString()}
          renderItem={element => (
            // <ItemWeather key={element.item} city={element.item} />)}/>
            <SwipeRow leftOpenValue={70} rightOpenValue={-70}>
              <View style={styles.standaloneRowBack}>
                <Text
                  title="Suppr."
                  onPress={() => this.deleteFav(element.index)}
                >
                  Delete
                </Text>
                <Text
                  title="Suppr."
                  onPress={() => this.deleteFav(element.index)}
                >
                  Delete
                </Text>
              </View>
              <View style={styles.standaloneRowFront}>
                <View
                  style={{
                    flexWrap: "wrap",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-around"
                  }}
                >
                  <ImgRecipe img={element.item.strMealThumb} imgWidth={100} imgHeight={"100%"} />
                  <Text style={styles.TextStyle,{color: "black"}}>{element.item.strMeal}</Text>
                  <Button title="Display" color="#ff4500" onPress={() =>{this.props.navigation.navigate("Recipe", { data: element.item })}}/>
                </View>
              </View>
            </SwipeRow>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    fontFamily: "",
    width: "100%"
  },
  standalone: {
    marginTop: 30,
    marginBottom: 30
  },
  standaloneRowFront: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-around",
    height: 50
  },
  standaloneRowBack: {
    alignItems: "center",
    backgroundColor: "red",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  },
  backTextWhite: {
    color: "#FFF"
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 75
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0
  },
  controls: {
    alignItems: "center",
    marginBottom: 30
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5
  },
  TextStyle:{
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Lato"
  }
});

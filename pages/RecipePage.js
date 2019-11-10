import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  AsyncStorage,
  Button,
  FlatList,
  RefreshControl,
  TouchableHighlight,
  TextInput,
  Platform
} from "react-native";
import { ImgRecipe } from "./HomePage";
import { connect } from "react-redux";

import Icon from "react-native-vector-icons/Ionicons";
import { NavigationEvents } from "react-navigation";
//import StyleSheet from './AppThemes/css/styles.js';
import { Linking } from "expo";
import Permissions from "expo-permissions";
import * as SMS from "expo-sms";
import * as Font from "expo-font";

class RecipePage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: this.props.navigation.state.params.data,
    favorites: this.props.navigation.state.params.favorites
  };

  // static navigationOptions = (data) => {
  //     return {
  //         title: 'Votre Recette',
  //     }
  // };
  addToFavorite() {
    AsyncStorage.getItem("recipes")
      .then(element => {
        let tab = [];
        var t = 0;
        if (element != null) {
          tab = JSON.parse(element);
          for (i in tab) {
            if (tab[i].strMeal == this.state.data.strMeal) {
              t++
              console.log(t)
            }
          }
        }
        if (t == 0) {
          tab.push(this.state.data);
          AsyncStorage.setItem("recipes", JSON.stringify(tab)).then(() => {
            alert("Recipe added to Favorites !");
          });
        } else {
          alert("This Recipe is already in Favorites !");
        }
      })
      .catch(err => {
        alert(err);
      });
  }

  addToCalendar() {
    if (Platform.OS === "ios") {
      Linking.openURL("calshow:");
    } else if (Platform.OS === "android") {
      Linking.openURL("content://com.android.calendar/time/");
    }
  }

  componentDidMount() {
    Font.loadAsync({
      Lato: require("../assets/fonts/Lato.ttf")
    });
  }

  render() {
    // console.log(this.props);
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={[styles.TextStyle, styles.TitleStyle]}>
            {" "}
            {this.state.data.strMeal}{" "}
          </Text>
          <ImgRecipe
            img={this.state.data.strMealThumb}
            imgWidth={200}
            imgHeight={200}
            marginImg="auto"
          />
          <Text style={[styles.TextStyle, { paddingTop: 10 }]}>
            {this.state.data.strArea} recipe
          </Text>
          <Text style={styles.TextStyle}>
            {" "}
            Type : {this.state.data.strCategory}{" "}
          </Text>
          <Text style={styles.TextStyle}>
            {" "}
            Tags : {this.state.data.strTags}{" "}
          </Text>
          <Text style={[styles.TextStyle, styles.TitleStyle]}>Ingredients</Text>
          {this.state.data.strIngredient1 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure1} {this.state.data.strIngredient1}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient2 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure2} {this.state.data.strIngredient2}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient3 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure3} {this.state.data.strIngredient3}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient4 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure4} {this.state.data.strIngredient4}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient5 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure5} {this.state.data.strIngredient5}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient6 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure6} {this.state.data.strIngredient6}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient7 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure7} {this.state.data.strIngredient7}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient8 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure8} {this.state.data.strIngredient8}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient9 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure9} {this.state.data.strIngredient9}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient10 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure10} {this.state.data.strIngredient10}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient11 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure11} {this.state.data.strIngredient11}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient12 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure12} {this.state.data.strIngredient12}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient13 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure13} {this.state.data.strIngredient13}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient14 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure14} {this.state.data.strIngredient14}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient15 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure15} {this.state.data.strIngredient15}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient16 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure16} {this.state.data.strIngredient16}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient17 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure17} {this.state.data.strIngredient17}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient18 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure18} {this.state.data.strIngredient18}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient19 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure19} {this.state.data.strIngredient19}
            </Text>
          ) : (
              <View></View>
            )}
          {this.state.data.strIngredient20 !== "" ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure20} {this.state.data.strIngredient20}
            </Text>
          ) : (
              <View></View>
            )}
          <Text style={[styles.TextStyle, styles.TitleStyle]}>
            Instructions
          </Text>
          <Text style={[styles.TextStyle, styles.PaddingText]}>
            {this.state.data.strInstructions}
          </Text>
          {this.state.favorites == "true" ? (
            <View style={styles.ButtonStyle}>
              <Button
                color="#ff4500"
                title="Add to Favorites"
                onPress={() => this.addToFavorite()}
              />
            </View>
          ) : (
              <View></View>
            )}

          <View style={styles.ButtonStyle}>
            <Button
              color="#ff4500"
              title="Add to Calendar"
              onPress={() => this.addToCalendar()}
            />
          </View>
          <View style={styles.ButtonStyle}>
            <Button
              color="#ff4500"
              title="Send Ingredients by SMS"
              onPress={this.btnSMSClicked}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  askLKermissionsAsync = async () => {
    //await Permissions.askAsync(Permissions.Linking);
  };

  askSMSPermissionsAsync = async () => {
    //await Permissions.askAsync(Permissions.SMS);
  };

  btnPhoneClicked = async () => {
    this.askLKermissionsAsync();
    let result = await Linking.openURL("tel:0609690005");
  };

  btnSMSClicked = async () => {
    const isAvailable = await SMS.isAvailableAsync();

    if (isAvailable) {
      ("My sample HelloWorld message");
    } else {
      alert("echec");
    }
    SMS.sendSMSAsync(
      [],
      "Ingredients for " +
      this.state.data.strMeal +
      " : \n \n" +
      this.state.data.strMeasure1 +
      " " +
      this.state.data.strIngredient1 +
      "\n" +
      this.state.data.strMeasure2 +
      " " +
      this.state.data.strIngredient2 +
      "\n" +
      this.state.data.strMeasure3 +
      " " +
      this.state.data.strIngredient3 +
      "\n" +
      this.state.data.strMeasure4 +
      " " +
      this.state.data.strIngredient4 +
      "\n" +
      this.state.data.strMeasure5 +
      " " +
      this.state.data.strIngredient5 +
      "\n" +
      this.state.data.strMeasure6 +
      " " +
      this.state.data.strIngredient6 +
      "\n" +
      this.state.data.strMeasure7 +
      " " +
      this.state.data.strIngredient7 +
      "\n" +
      this.state.data.strMeasure8 +
      " " +
      this.state.data.strIngredient8 +
      "\n" +
      this.state.data.strMeasure9 +
      " " +
      this.state.data.strIngredient9 +
      "\n" +
      this.state.data.strMeasure10 +
      " " +
      this.state.data.strIngredient10 +
      "\n" +
      this.state.data.strMeasure11 +
      " " +
      this.state.data.strIngredient11 +
      "\n" +
      this.state.data.strMeasure12 +
      " " +
      this.state.data.strIngredient12 +
      "\n" +
      this.state.data.strMeasure13 +
      " " +
      this.state.data.strIngredient13 +
      "\n" +
      this.state.data.strMeasure14 +
      " " +
      this.state.data.strIngredient14 +
      "\n" +
      this.state.data.strMeasure15 +
      " " +
      this.state.data.strIngredient15 +
      "\n" +
      this.state.data.strMeasure16 +
      " " +
      this.state.data.strIngredient16 +
      "\n" +
      this.state.data.strMeasure17 +
      " " +
      this.state.data.strIngredient17 +
      "\n" +
      this.state.data.strMeasure18 +
      " " +
      this.state.data.strIngredient18 +
      "\n" +
      this.state.data.strMeasure19 +
      " " +
      this.state.data.strIngredient19 +
      "\n" +
      this.state.data.strMeasure20 +
      " " +
      this.state.data.strIngredient20 +
      ""
    );
  };
}
const mapStateToProps = stateStore => {
  return {
    recipeServ: stateStore.recipeService
  };
};
export default connect(mapStateToProps)(RecipePage);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: ""
  },
  TextStyle: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Lato"
  },
  TitleStyle: {
    fontWeight: "bold",
    fontSize: 25,
    paddingVertical: 10
  },
  PaddingText: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  ButtonStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  }
});

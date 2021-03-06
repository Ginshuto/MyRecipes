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
  Platform
} from "react-native";
import { ImgRecipe } from "./HomePage";
import { connect } from "react-redux";
import { Linking } from "expo";
import * as SMS from "expo-sms";
import * as Font from "expo-font";
import WebView from "react-native-webview";

class RecipePage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: this.props.navigation.state.params.data,
    favorites: this.props.navigation.state.params.favorites
  };

  addToFavorite() {
    AsyncStorage.getItem("recipes")
      .then(element => {
        let tab = [];
        var t = 0;
        if (element != null) {
          tab = JSON.parse(element);
          for (i in tab) {
            if (tab[i].strMeal == this.state.data.strMeal) {
              t++;
              console.log(t);
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

  dataString() {
    var sms = "Ingredients for ";
    sms += this.state.data.strMeal + " : \n \n";
    if (
      this.state.data.strIngredient1 !== null &&
      this.state.data.strIngredient1 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure1 +
        " " +
        this.state.data.strIngredient1 +
        "\n";
    }
    if (
      this.state.data.strIngredient2 !== null &&
      this.state.data.strIngredient2 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure2 +
        " " +
        this.state.data.strIngredient2 +
        "\n";
    }
    if (
      this.state.data.strIngredient3 !== null &&
      this.state.data.strIngredient3 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure3 +
        " " +
        this.state.data.strIngredient3 +
        "\n";
    }
    if (
      this.state.data.strIngredient4 !== null &&
      this.state.data.strIngredient4 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure4 +
        " " +
        this.state.data.strIngredient4 +
        "\n";
    }
    if (
      this.state.data.strIngredient5 !== null &&
      this.state.data.strIngredient5 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure5 +
        " " +
        this.state.data.strIngredient5 +
        " \n";
    }
    if (
      this.state.data.strIngredient6 !== null &&
      this.state.data.strIngredient6 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure6 +
        " " +
        this.state.data.strIngredient6 +
        " \n";
    }
    if (
      this.state.data.strIngredient7 !== null &&
      this.state.data.strIngredient7 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure7 +
        " " +
        this.state.data.strIngredient7 +
        " \n";
    }
    if (
      this.state.data.strIngredient8 !== null &&
      this.state.data.strIngredient8 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure8 +
        " " +
        this.state.data.strIngredient8 +
        " \n";
    }
    if (
      this.state.data.strIngredient9 !== null &&
      this.state.data.strIngredient9 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure9 +
        " " +
        this.state.data.strIngredient9 +
        "\n";
    }
    if (
      this.state.data.strIngredient10 !== null &&
      this.state.data.strIngredient10 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure10 +
        " " +
        this.state.data.strIngredient10 +
        "\n";
    }
    if (
      this.state.data.strIngredient11 !== null &&
      this.state.data.strIngredient11 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure11 +
        " " +
        this.state.data.strIngredient11 +
        "\n";
    }
    if (
      this.state.data.strIngredient12 !== null &&
      this.state.data.strIngredient12 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure12 +
        " " +
        this.state.data.strIngredient12 +
        "\n";
    }
    if (
      this.state.data.strIngredient13 !== null &&
      this.state.data.strIngredient13 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure13 +
        " " +
        this.state.data.strIngredient13 +
        "\n";
    }
    if (
      this.state.data.strIngredient14 !== null &&
      this.state.data.strIngredient14 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure14 +
        " " +
        this.state.data.strIngredient14 +
        "\n";
    }
    if (
      this.state.data.strIngredient15 !== null &&
      this.state.data.strIngredient15 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure15 +
        " " +
        this.state.data.strIngredient15 +
        "\n";
    }
    if (
      this.state.data.strIngredient16 !== null &&
      this.state.data.strIngredient16 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure16 +
        " " +
        this.state.data.strIngredient16 +
        " \n";
    }
    if (
      this.state.data.strIngredient17 !== null &&
      this.state.data.strIngredient17 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure17 +
        " " +
        this.state.data.strIngredient17 +
        "\n";
    }
    if (
      this.state.data.strIngredient18 !== null &&
      this.state.data.strIngredient18 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure18 +
        " " +
        this.state.data.strIngredient18 +
        "\n";
    }
    if (
      this.state.data.strIngredient19 !== null &&
      this.state.data.strIngredient19 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure19 +
        " " +
        this.state.data.strIngredient19 +
        "\n";
    }
    if (
      this.state.data.strIngredient20 !== null &&
      this.state.data.strIngredient20 !== ""
    ) {
      sms =
        sms +
        this.state.data.strMeasure20 +
        " " +
        this.state.data.strIngredient20;
    }
    return sms;
  }

  componentDidMount() {
    Font.loadAsync({
      Lato: require("../assets/fonts/Lato.ttf")
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={[styles.TextStyle, styles.TitleStyle]}>
            {this.state.data.strMeal}
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
            Type : {this.state.data.strCategory}
          </Text>
          <Text style={styles.TextStyle}>Tags : {this.state.data.strTags}</Text>
          <Text style={[styles.TextStyle, styles.TitleStyle]}>Ingredients</Text>
          {this.state.data.strIngredient1 !== "" &&
          this.state.data.strIngredient1 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure1} {this.state.data.strIngredient1}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient2 !== "" &&
          this.state.data.strIngredient2 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure2} {this.state.data.strIngredient2}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient3 !== "" &&
          this.state.data.strIngredient3 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure3} {this.state.data.strIngredient3}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient4 !== "" &&
          this.state.data.strIngredient4 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure4} {this.state.data.strIngredient4}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient5 !== "" &&
          this.state.data.strIngredient5 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure5} {this.state.data.strIngredient5}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient6 !== "" &&
          this.state.data.strIngredient6 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure6} {this.state.data.strIngredient6}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient7 !== "" &&
          this.state.data.strIngredient7 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure7} {this.state.data.strIngredient7}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient8 !== "" &&
          this.state.data.strIngredient8 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure8} {this.state.data.strIngredient8}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient9 !== "" &&
          this.state.data.strIngredient9 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure9} {this.state.data.strIngredient9}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient10 !== "" &&
          this.state.data.strIngredient10 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure10} {this.state.data.strIngredient10}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient11 !== "" &&
          this.state.data.strIngredient11 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure11} {this.state.data.strIngredient11}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient12 !== "" &&
          this.state.data.strIngredient12 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure12} {this.state.data.strIngredient12}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient13 !== "" &&
          this.state.data.strIngredient13 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure13} {this.state.data.strIngredient13}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient14 !== "" &&
          this.state.data.strIngredient14 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure14} {this.state.data.strIngredient14}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient15 !== "" &&
          this.state.data.strIngredient15 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure15} {this.state.data.strIngredient15}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient16 !== "" &&
          this.state.data.strIngredient16 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure16} {this.state.data.strIngredient16}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient17 !== "" &&
          this.state.data.strIngredient17 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure17} {this.state.data.strIngredient17}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient18 !== "" &&
          this.state.data.strIngredient18 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure18} {this.state.data.strIngredient18}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient19 !== "" &&
          this.state.data.strIngredient19 !== null ? (
            <Text style={styles.TextStyle}>
              {this.state.data.strMeasure19} {this.state.data.strIngredient19}
            </Text>
          ) : (
            <View></View>
          )}
          {this.state.data.strIngredient20 !== "" &&
          this.state.data.strIngredient20 !== null ? (
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
          <View style={{ paddingHorizontal: 20 }}>
            <WebView
              style={{ height: 300 }}
              domStorageEnabled={true}
              javaScriptEnabled={true}
              source={{
                uri: `https://www.youtube.com/embed/${this.state.data.strYoutube.slice(
                  32
                )}`
              }}
            />
          </View>

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

  btnSMSClicked = async () => {
    const isAvailable = await SMS.isAvailableAsync();

    if (isAvailable) {
      ("My sample HelloWorld message");
    } else {
      alert("echec");
    }
    SMS.sendSMSAsync([], this.dataString());
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
    marginVertical: 10
  }
});

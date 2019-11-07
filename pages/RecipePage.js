import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView
} from "react-native";
import { ImgRecipe } from "./HomePage";

export default class RecipePage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: this.props.navigation.state.params.data
  };

  // static navigationOptions = (data) => {
  //     return {
  //         title: 'Votre Recette',
  //     }
  // };

  render() {
    // console.log(this.props);
    console.log(this.state.data);
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text h1>{this.state.data.strMeal}</Text>
          <ImgRecipe img={this.state.data.strMealThumb} />
          <Text h2>Ingredients</Text>
          <Text>
            {this.state.data.strMeasure1} {this.state.data.strIngredient1}
          </Text>
          <Text>
            {this.state.data.strMeasure2} {this.state.data.strIngredient2}
          </Text>
          <Text>
            {this.state.data.strMeasure3} {this.state.data.strIngredient3}
          </Text>
          <Text>
            {this.state.data.strMeasure4} {this.state.data.strIngredient4}
          </Text>
          <Text>
            {this.state.data.strMeasure5} {this.state.data.strIngredient5}
          </Text>
          <Text>
            {this.state.data.strMeasure6} {this.state.data.strIngredient6}
          </Text>
          <Text>
            {this.state.data.strMeasure7} {this.state.data.strIngredient7}
          </Text>
          <Text>
            {this.state.data.strMeasure8} {this.state.data.strIngredient8}
          </Text>
          <Text>
            {this.state.data.strMeasure9} {this.state.data.strIngredient9}
          </Text>
          <Text>
            {this.state.data.strMeasure10} {this.state.data.strIngredient10}
          </Text>
          <Text>
            {this.state.data.strMeasure11} {this.state.data.strIngredient11}
          </Text>
          <Text>
            {this.state.data.strMeasure12} {this.state.data.strIngredient12}
          </Text>
          <Text>
            {this.state.data.strMeasure13} {this.state.data.strIngredient13}
          </Text>
          <Text>
            {this.state.data.strMeasure14} {this.state.data.strIngredient14}
          </Text>
          <Text>
            {this.state.data.strMeasure15} {this.state.data.strIngredient15}
          </Text>
          <Text>
            {this.state.data.strMeasure16} {this.state.data.strIngredient16}
          </Text>
          <Text>
            {this.state.data.strMeasure17} {this.state.data.strIngredient17}
          </Text>
          <Text>
            {this.state.data.strMeasure18} {this.state.data.strIngredient18}
          </Text>
          <Text>
            {this.state.data.strMeasure19} {this.state.data.strIngredient19}
          </Text>
          <Text>
            {this.state.data.strMeasure20} {this.state.data.strIngredient20}
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: ""
  }
});

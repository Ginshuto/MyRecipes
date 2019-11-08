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
  TextInput
} from "react-native";
import { ImgRecipe } from "./HomePage";
import { connect } from "react-redux";

import Icon from "react-native-vector-icons/Ionicons";
import { NavigationEvents } from 'react-navigation';
//import StyleSheet from './AppThemes/css/styles.js';
import {Linking } from 'expo';
import Permissions from 'expo-permissions'
import * as SMS from 'expo-sms'



class RecipePage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: this.props.navigation.state.params.data,
  };

  // static navigationOptions = (data) => {
  //     return {
  //         title: 'Votre Recette',
  //     }
  // };
  addToFavorite() {
    AsyncStorage.getItem("recipes").then(element => {
      let tab = [];
      if (element != null) {
        tab = JSON.parse(element);
      }
      tab.push(this.state.data);
      AsyncStorage.setItem("recipes", JSON.stringify(tab)).then(() => {
        alert("Recipe added to Favorites !");
      });
    }).catch((err) =>{
      alert(err)
    });
  }
  
  render() {
    // console.log(this.props);
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text h1> {this.state.data.strMeal} </Text>
          <ImgRecipe img={this.state.data.strMealThumb} />
          <Text>{this.state.data.strArea} recipe</Text>
          <Text> Type: {this.state.data.strCategory} </Text>
          <Text> Tags: {this.state.data.strTags} </Text>
          <Text h2> Ingredients </Text>
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
          <Text h2> Instructions </Text>
          <Text style={{ textAlign: "center" }}>
            {this.state.data.strInstructions}
          </Text>
          <Button title="Add to Favorites" onPress={() => this.addToFavorite()} />
          <Button title="SMS APP" onPress={this.btnSMSClicked}/>
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
    let result = await Linking.openURL('tel:0609690005');
  };

  btnSMSClicked = async () => {

    const isAvailable = await SMS.isAvailableAsync();
    
    if (isAvailable) {
      'My sample HelloWorld message'
    }else{
      alert("echec");
    }
    SMS.sendSMSAsync([], this.state.data.strArea+' recipe\n '+
    'Type: '+this.state.data.strCategory+'\n'+
    'Tags: '+this.state.data.strTags+'\nIngredients: ['+this.state.data.strMeasure1+' '+this.state.data.strIngredient1+'\n'
    +this.state.data.strMeasure2+' '+this.state.data.strIngredient2+'\n'
    +this.state.data.strMeasure3+' '+this.state.data.strIngredient3+'\n'
    +this.state.data.strMeasure4+' '+this.state.data.strIngredient4+'\n'
    +this.state.data.strMeasure5+' '+this.state.data.strIngredient5+'\n'
    +this.state.data.strMeasure6+' '+this.state.data.strIngredient6+'\n'
    +this.state.data.strMeasure7+' '+this.state.data.strIngredient7+'\n'
    +this.state.data.strMeasure8+' '+this.state.data.strIngredient8+'\n'
    +this.state.data.strMeasure9+' '+this.state.data.strIngredient9+'\n'
    +this.state.data.strMeasure10+' '+this.state.data.strIngredient10+'\n'
    +this.state.data.strMeasure11+' '+this.state.data.strIngredient11+'\n'
    +this.state.data.strMeasure12+' '+this.state.data.strIngredient12+'\n'
    +this.state.data.strMeasure13+' '+this.state.data.strIngredient13+'\n'
    +this.state.data.strMeasure14+' '+this.state.data.strIngredient14+'\n'
    +this.state.data.strMeasure15+' '+this.state.data.strIngredient15+'\n'
    +this.state.data.strMeasure16+' '+this.state.data.strIngredient16+'\n'
    +this.state.data.strMeasure17+' '+this.state.data.strIngredient17+'\n'
    +this.state.data.strMeasure18+' '+this.state.data.strIngredient18+'\n'
    +this.state.data.strMeasure19+' '+this.state.data.strIngredient19+'\n'
    +this.state.data.strMeasure20+' '+this.state.data.strIngredient20+']') 
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
  }
});

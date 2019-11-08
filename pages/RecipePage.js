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
  Linking,
  Platform,
} from "react-native";
import { ImgRecipe } from "./HomePage";
import { connect } from "react-redux";
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import AndroidCalendarEvents from 'react-native-calendarevents-android';

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
  
  addToCalendar() {
    if(Platform.OS === 'ios') {
      Linking.openURL('calshow:');
    } else if(Platform.OS === 'android') {
      Linking.openURL('content://com.android.calendar/time/');
    }

        // const eventConfig = {
        //   title: this.state.data.strMeal,
        //   notes: 'tasty!',
        // };
        // AddCalendarEvent.presentEventCreatingDialog(eventConfig).then(()=>{
        //   console.log('ajout au calendrier')
        // }).catch((err =>{
        //   alert(err);
        // }));

      //   AndroidCalendarEvents.addEvent(
      //     {
      //         title: this.state.data.strMeal,
      //         startDate: Date.now(),
      //         description: 'Event description',
      //     },
      //     (success) => console.log(success),
      //     (error) => console.log(error)
      // );
  };
 
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
          <Button title="Add to Calendar" onPress ={() => this.addToCalendar()} />
        </ScrollView>
      </SafeAreaView>
    );
  }
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

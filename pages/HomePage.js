import React, { Component } from "react";
import Loading from "../components/loading";
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationEvents } from "react-navigation";
import { connect } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  AsyncStorage,
  FlatList,
  RefreshControl,
  TouchableHighlight
} from "react-native";

class HomePage extends Component {
  state = {
    recipeName: "",
    recipes: null,
    refreshing: false
  };

  // static navigationOptions = {
  //   header: null
  // };

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <View>
          <TextInput
            style={{
              backgroundColor: "white",
              marginLeft: 15,
              paddingRight: 50,
              paddingLeft: 5
            }}
            placeholder="Enter a Recipe Name"
            onChangeText={text => navigation.getParam("changeText")(text)}
          />
        </View>
      ),
      headerRight: (
        <View>
          <Icon
            color="white"
            size={25}
            style={{ paddingRight: 15 }}
            name={"ios-search"}
            onPress={() => navigation.getParam("onPressSearch")()}
          />
        </View>
      )
    };
  };

  changeText = text => {
    this.setState({ recipeName: text });
  };

  onPressSearch = () => {
    this.props.recipeServ
      .getRecipe(this.state.recipeName)
      .then(data => {
        this.setState({ recipes: data.data.meals });
      })
      .catch(err => {
        alert("No recipes found.");
      });
  };

  refresh() {
    this.setState({ refreshing: true });
    this.setState({ refreshing: false });
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      onPressSearch: this.onPressSearch,
      changeText: this.changeText
    });
  }

  onPressRecipe = item => {
    this.props.navigation.navigate("Recipe", { data: item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight
      key={item.item}
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => this.props.navigation.navigate("Recipe", { data: item })}
      style={{
        borderRadius: 15,
        borderColor: "#cccccc",
        borderWidth: 0.5,
        margin: 10,
        padding: 15
      }}
    >
      <View style={[styles.container]}>
        <Text style={{ flexShrink: 2 }}>{item.strMeal}</Text>
        <ImgRecipe img={item.strMealThumb} />
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={() => this.refresh()}
          />
        }
      >
        {/* <TextInput
          style={{ backgroundColor: "grey" }}
          placeholder="Enter a Recipe Name"
          onChangeText={text => this.changeText(text)}
        />
        <Icon
          color="grey"
          size={25}
          name={"ios-search"}
          onPress={() => this.onPressSearch()}
        /> */}
        {this.state.recipes !== null ? (
          <View>
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              numColumns={1}
              data={this.state.recipes}
              renderItem={this.renderRecipes}
              keyExtractor={item => `${item.idMeal}`}
            />
          </View>
        ) : (
          <Loading displayColor="blue" />
        )}
      </View>
    );
  }
}

export const ImgRecipe = props => {
  return (
    <Image
      style={{ width: 100, height: "100%" }}
      resizeMode={"contain"}
      source={{ uri: `${props.img}` }}
    />
  );
};

const mapStateToProps = stateStore => {
  return {
    recipeServ: stateStore.recipeService
  };
};

export default connect(mapStateToProps)(HomePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: ""
  }
});

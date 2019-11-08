import React, { PureComponent } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import PropTypes from 'prop-types';

class Loading extends React.Component {
    static propTypes = {
        displayColor: PropTypes.string.isRequired
    };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size='large' color={this.props.displayColor}/>
        <Text style={{ fontSize: 15,color: this.props.displayColor}}>Waiting for your research...</Text>
        {this.props.children}
      </View>
    );
  }
}
export default Loading
import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// export default class Button extends Component {
function Button({ iconName, onPress }) {
  return (
    <TouchableOpacity onPressOut={onPress}>
      <FontAwesome name={iconName} size={80} color="white" />
    </TouchableOpacity>
  )
}

Button.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Button;
import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import Button from "./Button";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startTimer, restartTimer, addSecond } from '../reducer';

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = parseInt((time - (minutes * 60)) % 60).toString();
  return `${minutes.toString().padStart(2,'0')}:${seconds.padStart(2,'0')}`;
}

class Timer extends Component {

  state = {
    timeInterval: null
  }

  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    console.log(`currentProps: ${JSON.stringify(currentProps)}, nextProps: ${JSON.stringify(nextProps)}`);
    if(!currentProps.isPlaying && nextProps.isPlaying) {
      const timeInterval = setInterval(() => this.props.addSecond(), 1000);
      this.setState({
        timeInterval
      })
    } else if(currentProps.isPlaying && !nextProps.isPlaying) {
      clearInterval(this.state.timeInterval);
    }
  }

  render() {
    console.log(this.props);
    const {isPlaying, elapsedTime, timerDuration, startTimer, restartTimer, addSecond } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.upper}>
          <Text style={styles.time}>
            {formatTime(timerDuration - elapsedTime)}
          </Text>
        </View>
        <View style={styles.lower}>
        {
          !isPlaying 
          ? <Button iconName={"play-circle"} onPress={startTimer} />
          : <Button iconName={"stop-circle"} onPress={restartTimer} />
        }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CE0B24",
  },
  lower: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingLeft: 25,
    paddingRight: 25
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 120,
    fontWeight: "100"
  }
});


// 연결
export default connect(
  state => ({ ...state }),
  dispatch => ({
    startTimer: bindActionCreators(startTimer, dispatch),
    restartTimer: bindActionCreators(restartTimer, dispatch),
    addSecond: bindActionCreators(addSecond, dispatch),
  })
  )(Timer);
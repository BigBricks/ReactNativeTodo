import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { white } from "ansi-colors";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./assets/morocco.jpg')} style={{ width: '100%', height: '100%' }} >
          <View style={styles1.container}>
            <Text style={{
              color: 'white'
            }}>BOB</Text></View>
        </ImageBackground>
        <Text>BOB</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

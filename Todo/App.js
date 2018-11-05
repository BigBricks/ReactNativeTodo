import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { white } from "ansi-colors";
import { FlatList } from "react-native-gesture-handler";

export default class App extends React.Component {
  state = {
    todo: [{ text: 'hi11111111111111' }, { text: 'hi11111111111111' }],
    text: ""
  };
  handleTextInput = text => {
    this.setState({ text: text })
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./assets/morocco.jpg')} style={{ width: '100%', height: '100%' }} >
          <FlatList
            data={this.state.todo}
            renderItem={({ item, index }) =>
              <View style={styles1.container}>
                <Text style={{
                  color: 'pink'
                }}>
                  {item.text}
                </Text>
                {/* <Button title="X" onPress={() => this.deleteTask(index)} /> */}
              </View>}
            keyExtractor={(item, index) => index.toString()}
          />
        </ImageBackground>
        <Text>BOB</Text>
      </View >
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

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";
import icedCoffeeImg from "@/assets/images/Iced-coffee.jpg";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImg}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.word}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  word: {
    color: "white",
    fontSize: 43,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10, // Added padding for better visibility
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;

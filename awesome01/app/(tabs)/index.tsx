import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

const app = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.word}>app</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  word: {
    color: "white",
    // backgroundColor: "red",
    fontSize:43,
    fontWeight:'bold',
    textAlign:"center"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 0,
    margin: 0,
  },
});
export default app;

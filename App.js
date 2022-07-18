import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthForm from "./src/AuthForm";
import WebViewScreen from "./src/WevViewScreen";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {user ? (
        <WebViewScreen setUser={setUser} />
      ) : (
        <AuthForm setUser={setUser} />
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

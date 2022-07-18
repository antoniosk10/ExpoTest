import React from "react";
import { WebView } from "react-native-webview";

export default function WebViewScreen({ navigation }) {
  const shouldStartLoadWithRequest = (req) => {
    if (req.url === "https://moodgym.com.au/content/logout") {
      navigation.navigate("Auth");
    }

    return true;
  };

  const handleNavigationStateChange = ({ url }) => {
    if (url === "https://moodgym.com.au/content/subscriptions") {
      //TODO: check user subscription
    }
  };

  return (
    <WebView
      onNavigationStateChange={handleNavigationStateChange}
      source={{
        uri: "https://moodgym.com.au/content/dashboard",
      }}
      onShouldStartLoadWithRequest={shouldStartLoadWithRequest}
    />
  );
}

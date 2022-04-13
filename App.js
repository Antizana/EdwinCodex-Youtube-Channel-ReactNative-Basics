import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Image,
  SafeAreaView,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Image Pressed!");
  };
  console.log(require("./assets/favicon.png"));

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={() => console.log("Text clicked")}>
        React Native Tutorial!
      </Text>
      <TouchableHighlight
        onPress={() => console.log("Highlighted image Pressed!")}
      >
        <Image
          style={styles.tinyLogo}
          source={require("./assets/favicon.png")}
        />
      </TouchableHighlight>
      <Text onPress={handlePress}>
        <TouchableOpacity onLongPress={() => console.log("Long Tapped")}>
          {/* <TouchableWithoutFeedback onPress={() => console.log("Image tapped")}> */}
          <Image
            blurRadius={1}
            fadeDuration={1000}
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300",
            }}
          />
          {/* </TouchableWithoutFeedback> */}
        </TouchableOpacity>
      </Text>
      <TouchableNativeFeedback
        onPress={() => console.log("Native Feedback Pressed!")}
      >
        <View
          style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableNativeFeedback>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

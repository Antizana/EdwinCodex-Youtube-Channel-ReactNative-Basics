import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Alert,
  Button,
  Platform,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        title="Click Me Default Alert"
        onPress={() =>
          alert(
            "Button Tapped, StatusBar current Height: " +
              StatusBar.currentHeight
          )
        }
      />
      <Button
        color="orange"
        title="Click Me Alert"
        onPress={() =>
          Alert.alert("My Title", "Button Tapped", [
            { text: "Yes", onPress: () => console.log("Yes Pressed") },
            { text: "No", onPress: () => console.log("No Pressed") },
          ])
        }
      />
      <Button
        color="green"
        title="Click Me Prompt"
        onPress={
          () =>
            Alert.prompt("My Title", "Button Tapped", (text) =>
              console.log(text)
            ) // Only works in iOS
        }
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

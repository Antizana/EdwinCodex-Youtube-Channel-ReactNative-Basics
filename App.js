import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Platform,
  View,
} from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));
  console.log(useDimensions(), useDeviceOrientation());
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
          flex: 2,
        }}
      >
        <View
          style={{
            backgroundColor: "gold",
            flex: 2,
          }}
        />
        <View
          style={{
            backgroundColor: "dodgerblue",
            flex: 1,
          }}
        />
        <View
          style={{
            backgroundColor: "tomato",
            flex: 1,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

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

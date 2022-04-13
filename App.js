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
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        // flexDirection: "row-reverse",
        // flexDirection: "column",
        justifyContent: "center", //for main axis
        // justifyContent: "flex-end",
        // justifyContent: "flex-start",
        // justifyContent: "space-around",
        // justifyContent: "space-between",
        // justifyContent: "space-evenly",
        alignItems: "center", // for cross axis
        // alignItems: "baseline",
        // alignItems: "flex-end",
        // alignItems: "flex-start",
        // alignItems: "stretch",
      }}
    >
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          // height: 100,
          // height: 300,
          height: 300,
          alignSelf: "flex-start",
        }}
      />
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          // height: 100,
          height: 200,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
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

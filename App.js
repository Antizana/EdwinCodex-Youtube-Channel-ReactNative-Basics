import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Platform, View } from "react-native";

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
        justifyContent: "center", //for main axis
        alignItems: "center", // for cross axis, within the line
        alignContent: "center", // for cross axis, within the whole content, works only with flexWrap
        // flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "gold",
          // flexBasis: 100, //Map to width or height depending on the orientation
          // flexGrow: 1,
          // width: 100,
          width: 300,
          // flexShrink: 1,
          flex: -1,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
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

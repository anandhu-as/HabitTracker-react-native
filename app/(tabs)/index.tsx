import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Link href="/Login">login</Link>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
  
})
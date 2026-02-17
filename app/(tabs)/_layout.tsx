import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";
export default function TabsLayout() {
  return <>
    <Tabs screenOptions={{ tabBarActiveBackgroundColor: "coral" }}>
      <Tabs.Screen name="index" options={{
        title: "Home",
        tabBarIcon: ({ color, focused }) => (
          focused
            ? <FontAwesome name="home" size={24} color={color} />
            : <AntDesign name="home" size={24} color="black" />
        )
      }} />
      <Tabs.Screen name="login" options={{ title: "login" }} />
    </Tabs>
  </>;
}
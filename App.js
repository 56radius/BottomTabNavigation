import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, ScrollView } from "react-native";
import { AntDesign, Zocial, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

{
  /* Home Screen */
}
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Welcome to Home screen </Text>
    </View>
  );
}

{
  /* Search Screen */
}
function SearchScreen() {
  <View>
    <Text> Welcome to search screen </Text>
  </View>;
}

{
  /* post screen */
}
function PostScreen() {
  <View>
    <Text>Welcome To Posts</Text>
  </View>;
}

{
  /* Reels screen */
}
function ReelsScreen() {
  <View>
    <Text> Welcome To Reels </Text>
  </View>;
}

{
  /* profile screen */
}
function ProfileScreen() {
  <View>
    <Text> Welcome To Profile </Text>
  </View>;
}

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Ionicons name="ios-home-outline" size={24} color="black" />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <AntDesign name="search1" size={24} color="black" />
            ),
          }}
          name="Search"
          component={SearchScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <AntDesign name="plussquareo" size={24} color="black" />
            ),
          }}
          name="Post"
          component={PostScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Zocial name="instagram" size={24} color="black" />
            ),
          }}
          name="Reels"
          component={ReelsScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <AntDesign name="profile" size={24} color="black" />
            ),
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

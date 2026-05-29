import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeliveryLoginScreen from "./screens/DeliveryLoginScreen";
import DeliveryOrdersScreen from "./screens/DeliveryOrdersScreen";
import HomeScreen from "./screens/HomeScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import StatusScreen from "./screens/StatusScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Delivery App" }}
        />

        <Stack.Screen
          name="PlaceOrder"
          component={PlaceOrderScreen}
        />

        <Stack.Screen
          name="Status"
          component={StatusScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
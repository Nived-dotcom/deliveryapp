import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import StatusScreen from "./screens/StatusScreen";
import DeliveryLoginScreen from "./screens/DeliveryLoginScreen";
import DeliveryOrdersScreen from "./screens/DeliveryOrdersScreen";

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
          options={{ title: "Place Order" }}
        />

        <Stack.Screen
          name="Status"
          component={StatusScreen}
          options={{ title: "Track Order" }}
        />

        <Stack.Screen
          name="DeliveryLogin"
          component={DeliveryLoginScreen}
          options={{ title: "Delivery Login" }}
        />

        <Stack.Screen
          name="DeliveryOrders"
          component={DeliveryOrdersScreen}
          options={{ title: "Delivery Orders" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
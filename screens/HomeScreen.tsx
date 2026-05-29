import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>🚚</Text>

        <Text style={styles.title}>
          Fast Delivery
        </Text>

        <Text style={styles.subtitle}>
          Delivering Happiness To Your Doorstep
        </Text>
      </View>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("PlaceOrder")}
      >
        <Text style={styles.cardIcon}>📦</Text>
        <Text style={styles.cardTitle}>Place Order</Text>
        <Text style={styles.cardDesc}>
          Create a new delivery order
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Status")}
      >
        <Text style={styles.cardIcon}>📍</Text>
        <Text style={styles.cardTitle}>Track Order</Text>
        <Text style={styles.cardDesc}>
          Check delivery status
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("DeliveryLogin")}
      >
        <Text style={styles.cardIcon}>🔐</Text>
        <Text style={styles.cardTitle}>Delivery Login</Text>
        <Text style={styles.cardDesc}>
          Access delivery dashboard
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF4FF",
    padding: 20,
  },

  header: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
  },

  logo: {
    fontSize: 80,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#0F172A",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 15,
    color: "#64748B",
    marginTop: 5,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 25,
    borderRadius: 25,
    marginBottom: 18,
    elevation: 8,
  },

  cardIcon: {
    fontSize: 40,
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0F172A",
  },

  cardDesc: {
    color: "#64748B",
    marginTop: 5,
  },
});
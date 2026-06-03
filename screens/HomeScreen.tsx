import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.logo}>🚚</Text>

          <Text style={styles.title}>
            Fast Delivery
          </Text>

          <Text style={styles.subtitle}>
            Fast, Secure & Reliable Delivery Service
          </Text>
        </View>

        {/* Cards */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.9}
          onPress={() => navigation.navigate("PlaceOrder")}
        >
          <View style={styles.iconBox}>
            <Text style={styles.icon}>📦</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.cardTitle}>Place Order</Text>
            <Text style={styles.cardDesc}>
              Create and schedule a new delivery
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.9}
          onPress={() => navigation.navigate("Status")}
        >
          <View style={styles.iconBox}>
            <Text style={styles.icon}>📍</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.cardTitle}>Track Order</Text>
            <Text style={styles.cardDesc}>
              Check delivery progress in real-time
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.9}
          onPress={() => navigation.navigate("DeliveryLogin")}
        >
          <View style={styles.iconBox}>
            <Text style={styles.icon}>🔐</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.cardTitle}>Delivery Login</Text>
            <Text style={styles.cardDesc}>
              Access driver dashboard securely
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Trusted by thousands of customers
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const PRIMARY = "#2563EB";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  hero: {
    backgroundColor: PRIMARY,
    paddingTop: 40,
    paddingBottom: 50,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    alignItems: "center",
  },

  logo: {
    fontSize: 70,
  },

  title: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "800",
    marginTop: 10,
  },

  subtitle: {
    color: "#E2E8F0",
    fontSize: 15,
    marginTop: 8,
    textAlign: "center",
    paddingHorizontal: 20,
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 5,
  },

  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 30,
  },

  content: {
    flex: 1,
    marginLeft: 15,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
  },

  cardDesc: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 4,
  },

  arrow: {
    fontSize: 32,
    color: PRIMARY,
    fontWeight: "bold",
  },

  footer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },

  footerText: {
    color: "#94A3B8",
    fontSize: 14,
  },
});
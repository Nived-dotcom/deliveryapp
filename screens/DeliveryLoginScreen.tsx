import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function DeliveryLoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.trim()) {
      Alert.alert("Error", "Please enter email");
      return;
    }

    if (!password.trim()) {
      Alert.alert("Error", "Please enter password");
      return;
    }

    navigation.replace("DeliveryOrders");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Header */}

        <View style={styles.header}>
          <Text style={styles.icon}>🚚</Text>

          <Text style={styles.heading}>
            Fast Delivery
          </Text>

          <Text style={styles.subHeading}>
            Driver & Delivery Partner Login
          </Text>
        </View>

        {/* Login Card */}

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Welcome Back 👋
          </Text>

          <Text style={styles.cardSubtitle}>
            Login to manage and track deliveries
          </Text>

          <Text style={styles.label}>
            Email Address
          </Text>

          <TextInput
            style={styles.input}
            placeholder="driver@email.com"
            placeholderTextColor="#94A3B8"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>
            Password
          </Text>

          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#94A3B8"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={styles.loginButton}
            activeOpacity={0.9}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>
              Login
            </Text>
          </TouchableOpacity>

          <Text style={styles.demoText}>
            Demo Login: Enter any email and password
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const PRIMARY = "#2563EB";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
  },

  wrapper: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },

  icon: {
    fontSize: 80,
  },

  heading: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "800",
    marginTop: 10,
  },

  subHeading: {
    color: "#DBEAFE",
    fontSize: 15,
    marginTop: 5,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 15,

    elevation: 8,
  },

  cardTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0F172A",
  },

  cardSubtitle: {
    color: "#64748B",
    marginTop: 5,
    marginBottom: 25,
  },

  label: {
    color: "#334155",
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    height: 58,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 16,
    paddingHorizontal: 16,
    backgroundColor: "#F8FAFC",
    fontSize: 16,
    marginBottom: 12,
  },

  loginButton: {
    backgroundColor: PRIMARY,
    height: 58,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  demoText: {
    textAlign: "center",
    marginTop: 18,
    color: "#64748B",
    fontSize: 13,
  },
});
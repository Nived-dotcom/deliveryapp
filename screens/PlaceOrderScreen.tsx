import api from "./services/api";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
  StatusBar,
} from "react-native";

export default function PlaceOrderScreen() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [item, setItem] = useState("");
  const [address, setAddress] = useState("");
  const [orderId, setOrderId] = useState("");

  const generateOrderId = () => {
    const random = Math.floor(1000 + Math.random() * 9000);
    const date = new Date();

    return (
      "ORD-" +
      date.getFullYear() +
      String(date.getMonth() + 1).padStart(2, "0") +
      String(date.getDate()).padStart(2, "0") +
      "-" +
      random
    );
  };

  const submitOrder = async () => {
    if (!name || !phone || !item || !address) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const newOrderId = generateOrderId();
    setOrderId(newOrderId);

    const orderData = {
      orderId: newOrderId,
      customerName: name,
      phone,
      item,
      address,
      status: "Pending",
    };

    try {
      await api.post("/orders", orderData);

      Alert.alert(
        "Order Submitted Successfully 🎉",
        `Tracking ID:\n${newOrderId}`
      );

      setName("");
      setPhone("");
      setItem("");
      setAddress("");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to submit order");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.hero}>
          <Text style={styles.heroIcon}>🚚</Text>

          <Text style={styles.heroTitle}>
            Place Order
          </Text>

          <Text style={styles.heroSubtitle}>
            Fast, Secure & Reliable Delivery Service
          </Text>
        </View>

        {/* Form Card */}
        <View style={styles.card}>
          {orderId ? (
            <View style={styles.idContainer}>
              <Text style={styles.idLabel}>TRACKING ID</Text>
              <Text style={styles.idText}>{orderId}</Text>
            </View>
          ) : null}

          <Text style={styles.label}>👤 Customer Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter customer name"
            placeholderTextColor="#94A3B8"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>📞 Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            placeholderTextColor="#94A3B8"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={styles.label}>📦 Item Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter item name"
            placeholderTextColor="#94A3B8"
            value={item}
            onChangeText={setItem}
          />

          <Text style={styles.label}>📍 Delivery Address</Text>
          <TextInput
            style={[styles.input, styles.addressInput]}
            placeholder="Enter delivery address"
            placeholderTextColor="#94A3B8"
            multiline
            value={address}
            onChangeText={setAddress}
          />

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.9}
            onPress={submitOrder}
          >
            <Text style={styles.buttonText}>
              🚀 Place Order
            </Text>
          </TouchableOpacity>
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

  scroll: {
    flexGrow: 1,
    padding: 20,
  },

  hero: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 25,
  },

  heroIcon: {
    fontSize: 75,
  },

  heroTitle: {
    fontSize: 34,
    fontWeight: "800",
    color: "#0F172A",
    marginTop: 10,
  },

  heroSubtitle: {
    fontSize: 15,
    color: "#64748B",
    marginTop: 6,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    padding: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,

    elevation: 8,
  },

  idContainer: {
    backgroundColor: "#EFF6FF",
    borderLeftWidth: 5,
    borderLeftColor: PRIMARY,
    borderRadius: 16,
    padding: 15,
    marginBottom: 20,
  },

  idLabel: {
    color: "#64748B",
    fontSize: 13,
    fontWeight: "600",
  },

  idText: {
    fontSize: 20,
    fontWeight: "800",
    color: PRIMARY,
    marginTop: 5,
  },

  label: {
    fontSize: 15,
    fontWeight: "700",
    color: "#334155",
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    height: 58,
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 16,
    paddingHorizontal: 18,
    fontSize: 16,
    color: "#0F172A",
    marginBottom: 10,
  },

  addressInput: {
    height: 120,
    textAlignVertical: "top",
    paddingTop: 15,
  },

  button: {
    backgroundColor: PRIMARY,
    height: 58,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,

    shadowColor: PRIMARY,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 8,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});
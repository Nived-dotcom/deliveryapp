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
        "Order Submitted Successfully",
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
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          <Text style={styles.truck}>🚚</Text>

          <Text style={styles.title}>Place New Order</Text>
          <Text style={styles.subtitle}>
            Fill in the order details below
          </Text>

          {orderId ? (
            <View style={styles.idContainer}>
              <Text style={styles.idLabel}>Tracking ID</Text>
              <Text style={styles.idText}>{orderId}</Text>
            </View>
          ) : null}

          <Text style={styles.label}>👤 Customer Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter customer name"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>📞 Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={styles.label}>📦 Item Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter item name"
            value={item}
            onChangeText={setItem}
          />

          <Text style={styles.label}>📍 Delivery Address</Text>
          <TextInput
            style={[styles.input, styles.addressInput]}
            placeholder="Enter delivery address"
            multiline
            value={address}
            onChangeText={setAddress}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={submitOrder}
          >
            <Text style={styles.buttonText}>Submit Order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF2F7",
  },

  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 25,
    elevation: 8,
  },

  truck: {
    fontSize: 55,
    textAlign: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0F172A",
  },

  subtitle: {
    textAlign: "center",
    color: "#64748B",
    marginTop: 6,
    marginBottom: 20,
    fontSize: 15,
  },

  idContainer: {
    backgroundColor: "#EFF6FF",
    borderWidth: 1,
    borderColor: "#BFDBFE",
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    alignItems: "center",
  },

  idLabel: {
    fontSize: 14,
    color: "#64748B",
  },

  idText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2563EB",
    marginTop: 4,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#F8FAFC",
    borderRadius: 14,
    paddingHorizontal: 15,
    height: 55,
    fontSize: 16,
    marginBottom: 10,
  },

  addressInput: {
    height: 120,
    textAlignVertical: "top",
    paddingTop: 15,
  },

  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 16,
    borderRadius: 14,
    marginTop: 25,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
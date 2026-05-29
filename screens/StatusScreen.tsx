import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import api from "./services/api";

export default function StatusScreen() {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");

  const checkStatus = async () => {
    try {
      const res = await api.get(`/orders/${orderId}`);

      setStatus(res.data.status);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Order not found");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Check Order Status</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Order ID"
        value={orderId}
        onChangeText={setOrderId}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={checkStatus}
      >
        <Text style={styles.buttonText}>
          Check Status
        </Text>
      </TouchableOpacity>

      {status ? (
        <Text style={styles.statusText}>
          Order Status: {status}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  statusText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
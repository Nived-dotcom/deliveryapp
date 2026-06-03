import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";

import api from "./services/api";

export default function StatusScreen() {
  const [trackingId, setTrackingId] = useState("");
  const [order, setOrder] = useState<any>(null);

  const checkStatus = async () => {
    if (!trackingId) {
      Alert.alert("Error", "Please enter Tracking ID");
      return;
    }

    try {
      const res = await api.get(
        `/orders/track/${trackingId}`
      );

      setOrder(res.data);
    } catch (error) {
      console.log(error);

      Alert.alert(
        "Order Not Found",
        "Please check your Tracking ID"
      );
    }
  };

  const getStatusColor = () => {
    switch (order?.status) {
      case "Pending":
        return "#F59E0B";

      case "Picked Up":
        return "#3B82F6";

      case "Out For Delivery":
        return "#8B5CF6";

      case "Delivered":
        return "#10B981";

      default:
        return "#64748B";
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}

        <View style={styles.header}>
          <Text style={styles.icon}>📍</Text>

          <Text style={styles.title}>
            Track Order
          </Text>

          <Text style={styles.subtitle}>
            Enter your tracking ID to check delivery status
          </Text>
        </View>

        {/* Search Card */}

        <View style={styles.searchCard}>
          <TextInput
            style={styles.input}
            placeholder="Enter Tracking ID"
            placeholderTextColor="#94A3B8"
            value={trackingId}
            onChangeText={setTrackingId}
          />

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.9}
            onPress={checkStatus}
          >
            <Text style={styles.buttonText}>
              🔍 Track Order
            </Text>
          </TouchableOpacity>
        </View>

        {/* Result Card */}

        {order && (
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>
              Order Details
            </Text>

            <View style={styles.infoRow}>
              <Text style={styles.label}>
                Tracking ID
              </Text>

              <Text style={styles.value}>
                {order.orderId}
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>
                Customer
              </Text>

              <Text style={styles.value}>
                {order.customerName}
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>
                Phone
              </Text>

              <Text style={styles.value}>
                {order.phone}
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>
                Item
              </Text>

              <Text style={styles.value}>
                {order.item}
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>
                Address
              </Text>

              <Text style={styles.value}>
                {order.address}
              </Text>
            </View>

            <View style={styles.statusContainer}>
              <Text style={styles.statusLabel}>
                Delivery Status
              </Text>

              <View
                style={[
                  styles.statusBadge,
                  {
                    backgroundColor:
                      getStatusColor(),
                  },
                ]}
              >
                <Text style={styles.statusText}>
                  {order.status}
                </Text>
              </View>
            </View>
          </View>
        )}
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
    padding: 20,
  },

  header: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },

  icon: {
    fontSize: 70,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#0F172A",
    marginTop: 10,
  },

  subtitle: {
    color: "#64748B",
    fontSize: 15,
    marginTop: 6,
    textAlign: "center",
  },

  searchCard: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 24,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 6,
  },

  input: {
    height: 58,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#F8FAFC",
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 16,
  },

  button: {
    backgroundColor: PRIMARY,
    height: 58,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#FFF",
    marginTop: 25,
    padding: 22,
    borderRadius: 24,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 6,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 15,
  },

  infoRow: {
    marginBottom: 14,
  },

  label: {
    color: "#64748B",
    fontSize: 13,
    marginBottom: 3,
  },

  value: {
    color: "#0F172A",
    fontSize: 17,
    fontWeight: "600",
  },

  statusContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  statusLabel: {
    color: "#64748B",
    marginBottom: 10,
    fontSize: 14,
  },

  statusBadge: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },

  statusText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 15,
  },
});
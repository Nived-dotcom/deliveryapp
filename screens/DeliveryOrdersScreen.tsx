import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
  StatusBar,
} from "react-native";

import api from "./services/api";

export default function DeliveryOrdersScreen() {
  const [orders, setOrders] = useState<any[]>([]);

  const loadOrders = async () => {
    try {
      const res = await api.get("/orders/all");
      setOrders(res.data);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to load orders");
    }
  };

  const updateStatus = async (
    id: string,
    status: string
  ) => {
    try {
      await api.put(`/orders/${id}/status`, {
        status,
      });

      Alert.alert(
        "Success",
        `Order marked as ${status}`
      );

      loadOrders();
    } catch (error) {
      Alert.alert(
        "Error",
        "Failed to update status"
      );
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "#F59E0B";

      case "Accepted":
        return "#2563EB";

      case "Out For Delivery":
        return "#8B5CF6";

      case "Delivered":
        return "#10B981";

      default:
        return "#64748B";
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.orderId}>
          {item.orderId}
        </Text>

        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor:
                getStatusColor(item.status),
            },
          ]}
        >
          <Text style={styles.statusText}>
            {item.status}
          </Text>
        </View>
      </View>

      <Text style={styles.customer}>
        👤 {item.customerName}
      </Text>

      <Text style={styles.info}>
        📞 {item.phone}
      </Text>

      <Text style={styles.info}>
        📦 {item.item}
      </Text>

      <Text style={styles.info}>
        📍 {item.address}
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.acceptBtn}
          onPress={() =>
            updateStatus(
              item._id,
              "Accepted"
            )
          }
        >
          <Text style={styles.buttonText}>
            Accept
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.outBtn}
          onPress={() =>
            updateStatus(
              item._id,
              "Out For Delivery"
            )
          }
        >
          <Text style={styles.buttonText}>
            Out
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deliveredBtn}
          onPress={() =>
            updateStatus(
              item._id,
              "Delivered"
            )
          }
        >
          <Text style={styles.buttonText}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          🚚 Delivery Dashboard
        </Text>

        <Text style={styles.headerSubtitle}>
          Manage delivery orders
        </Text>
      </View>

      <FlatList
        data={orders}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        contentContainerStyle={{
          padding: 16,
        }}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>
              📦
            </Text>

            <Text style={styles.emptyText}>
              No Orders Found
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  header: {
    backgroundColor: "#2563EB",
    paddingTop: 20,
    paddingBottom: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
  },

  headerSubtitle: {
    color: "#DBEAFE",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    marginBottom: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 5,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  orderId: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
  },

  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 12,
  },

  customer: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 10,
  },

  info: {
    color: "#475569",
    marginBottom: 6,
    fontSize: 14,
  },

  buttonRow: {
    flexDirection: "row",
    marginTop: 15,
  },

  acceptBtn: {
    flex: 1,
    backgroundColor: "#2563EB",
    paddingVertical: 12,
    borderRadius: 12,
    marginRight: 5,
  },

  outBtn: {
    flex: 1,
    backgroundColor: "#F59E0B",
    paddingVertical: 12,
    borderRadius: 12,
    marginHorizontal: 5,
  },

  deliveredBtn: {
    flex: 1,
    backgroundColor: "#10B981",
    paddingVertical: 12,
    borderRadius: 12,
    marginLeft: 5,
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 13,
  },

  emptyContainer: {
    alignItems: "center",
    marginTop: 80,
  },

  emptyIcon: {
    fontSize: 60,
  },

  emptyText: {
    marginTop: 10,
    fontSize: 18,
    color: "#64748B",
  },
});
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from "react-native";
import api from "./services/api";

export default function DeliveryOrdersScreen() {
    const [orders, setOrders] = useState<any[]>([]);

    const loadOrders = async () => {
        try {
            const res = await api.get("/orders");

            console.log("ORDERS:", res.data);

            setOrders(res.data);
        } catch (error) {
            console.log("LOAD ERROR:", error);
            Alert.alert("Error", "Failed to load orders");
        }
    };

    const acceptOrder = async (id: string) => {
        try {
            await api.put(`/orders/${id}`, {
                status: "Accepted",
            });

            Alert.alert("Success", "Order Accepted");
            loadOrders();
        } catch (error) {
            console.log(error);
            Alert.alert("Error", "Failed to update order");
        }
    };

    useEffect(() => {
        loadOrders();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                keyExtractor={(item: any) => item._id}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No Orders Found</Text>
                }
                renderItem={({ item }: any) => (
                    <View style={styles.card}>
                        <Text style={styles.label}>Name: {item.name}</Text>
                        <Text style={styles.label}>Phone: {item.phone}</Text>
                        <Text style={styles.label}>Address: {item.address}</Text>
                        <Text style={styles.label}>Item: {item.item}</Text>
                        <Text style={styles.label}>Status: {item.status}</Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => acceptOrder(item._id)}
                        >
                            <Text style={styles.buttonText}>Accept Order</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    emptyText: {
        textAlign: "center",
        marginTop: 50,
        fontSize: 18,
    },
    card: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    button: {
        backgroundColor: "green",
        padding: 10,
        marginTop: 10,
        borderRadius: 6,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
    },
});
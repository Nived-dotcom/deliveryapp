import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    SafeAreaView,
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

        // Demo Login
        navigation.replace("DeliveryOrders");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.icon}>🚚</Text>

                <Text style={styles.title}>Delivery Login</Text>

                <Text style={styles.subtitle}>
                    Login to manage delivery orders
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>

                <Text style={styles.demoText}>
                    Demo: Enter any email and password
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#EEF4FF",
    },

    card: {
        backgroundColor: "#fff",
        padding: 25,
        borderRadius: 20,
        elevation: 8,
    },

    icon: {
        fontSize: 60,
        textAlign: "center",
        marginBottom: 10,
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },

    subtitle: {
        textAlign: "center",
        color: "#64748B",
        marginBottom: 25,
    },

    input: {
        borderWidth: 1,
        borderColor: "#CBD5E1",
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        backgroundColor: "#fff",
    },

    button: {
        backgroundColor: "#2563EB",
        padding: 15,
        borderRadius: 12,
        marginTop: 10,
    },

    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },

    demoText: {
        textAlign: "center",
        marginTop: 15,
        color: "#64748B",
    },
});
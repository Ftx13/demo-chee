import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import BomDC from '../componets/BomDC';

export default class Lista extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.head}>Hello</Text>
                <BomDC />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        color: "#000000"
    },
    head: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center'
    }
})
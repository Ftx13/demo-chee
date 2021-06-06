import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Button, Input, Icon, Image } from 'react-native-elements';
import { auth } from '../Firebase';
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const signIn = () => {
        auth.signInWithEmailAndPassword(email, pass)
            .catch(error => alert(error.message))
    };
    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(authUser => {
            if (authUser) navigation.replace('HOME');
        })
        return unsuscribe;
    }, []);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
        });
    }, [navigation]);
    return (
        <KeyboardAvoidingView enabled style={styles.constainerFather}>
            <StatusBar style='light' />
            <Image
                source={{ uri: 'https://i.ibb.co/zHMVH1h/logo.png' }}
                style={{ width: 300, height: 50 }}
            />
            <View style={styles.inpurContainer}>
                <Input style={{ paddingLeft: 5 }} placeholder='Email' autoFocus type='email' value={email} onChangeText={(text) => setEmail(text)} />
                <Input style={{ paddingLeft: 5 }} onSubmitEditing={signIn} placeholder='Password' secureTextEntry type='password' value={pass} onChangeText={(text) => setPass(text)} />
            </View>
            <Button containerStyle={styles.button} title='Login' onPress={signIn}></Button>
            <Button onPress={() => navigation.navigate('Register')} containerStyle={styles.button} title='Register' type='outline'></Button>
            <View style={{ height: 10 }}>
            </View>
        </KeyboardAvoidingView>
    )
}
export default LoginScreen
const styles = StyleSheet.create({
    constainerFather: {
        padding: 10,
        flex: 1,
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    inpurContainer: {
        width: 300,
        marginTop: 15,
        padding: 10
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})

import React, { useLayoutEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Button, Input, Text, Icon } from 'react-native-elements';
import { auth } from '../Firebase';
const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const register = () => {
        auth.createUserWithEmailAndPassword(email, pass)
            .then(authUser => {
                authUser.user.updateProfile({
                    displayName: name,
                    //photo
                })
            })
            .catch(error => alert(error.message))
    };
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Back',
            headerTitleStyle: { textAlign: 'center', marginRight: 50 }
        });
    }, [navigation]);
    return <KeyboardAvoidingView enabled style={styles.constainer}>
        <StatusBar style='light' />
        <Text h3 style={{ marginBottom: 15 }}>Create new account</Text>
        <View style={styles.inpurContainer}>
            <Input style={{ padding: 5 }} placeholder='Full name' autoFocus type='text' value={name} onChangeText={(text) => setName(text)} />
            <Input style={{ padding: 5 }} placeholder='Email' autoFocus type='email' value={email} onChangeText={(text) => setEmail(text)} />
            <Input style={{ padding: 5 }} placeholder='Password' secureTextEntry type='password' value={pass} onChangeText={(text) => setPass(text)} />
        </View>
        <Button raised onPress={register} containerStyle={styles.button} title='Join now'></Button>
    </KeyboardAvoidingView>
}

export default RegisterScreen

const styles = StyleSheet.create({
    constainer: {
        padding: 10,
        flex: 1,
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    inpurContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 3,
    }
})

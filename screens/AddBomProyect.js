import React, { useState, useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Button, Input, Text, Image } from 'react-native-elements';
import axios from 'axios';

const AddBomProyect = ({ navigation }) => {
    const [proyect, setProyect] = useState({
        deliver: '',
        address: '',
        contact: '',
    });
    const { deliver, address, contact } = proyect;
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => <Image
                source={{ uri: 'https://i.ibb.co/zHMVH1h/logo.png' }}
                style={{
                    width: 300, height: 50, display: 'flex', margin: 'auto'
                }}
            />,
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: 'black'
        })
    }, [navigation])
    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style='light' />
            <Text h3 style={{ marginBottom: 15 }}>New proyect</Text>
            <View style={styles.inpurContainer}>
                <Input style={{ paddingLeft: 5 }} placeholder='Deliver to' autoFocus type='text' value={deliver} onChangeText={deliver => setProyect({ ...proyect, deliver })} />
                <Input style={{ paddingLeft: 5 }} placeholder='Job site address' autoFocus type='text' value={address} onChangeText={address => setProyect({ ...proyect, address })} />
                <Input style={{ paddingLeft: 5 }} placeholder='Job contact' autoFocus type='text' value={contact} onChangeText={contact => setProyect({ ...proyect, contact })} />
            </View>
            {/* <Button raised onPress={newProyect} containerStyle={styles.button} title='Next'></Button> */}
        </KeyboardAvoidingView>
    )
}

export default AddBomProyect

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    inpurContainer: {
        width: 300,
        // marginBottom: -10
    },
    button: {
        width: 200,
        marginTop: 3,
    }
})


// const AddChatProyect = ({ navigation }) => {
//     const newProyect = async () => {
//         if (deliver === '') return alert('Deliver to is not complete');
//         try {
//             let res = await axios({
//                 method: "post",
//                 url: "http://localhost:8001/api/proyect",
//                 data: { deliver: deliver, address: address, contact: contact },
//                 config: { headers: { "Content-Type": "application/json" } }
//             })
//             alert(res, res.data)
//         } catch (error) {
//             console.log('New Proyecy Error: ' + error.message);
//         }
//     };
//     return (

//     )
// }

// export default AddChatProyect



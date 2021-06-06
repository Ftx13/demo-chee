import React, { useState, useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Button, Input, Text, Image } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
import BomDC from '../componets/BomDC';
const AddChatProyect = ({ navigation }) => {
    const [proyect, setProyect] = useState({
        id: '',
        deliver: '',
        address: '',
        contact: '',
        ok: false,
    });
    const [dc, setDC] = useState(false)
    const [ac, setAC] = useState(false)
    const [pvc, setPVC] = useState(false)
    const [comm, setCOMM] = useState(false)
    const [egauge, setEGAUGE] = useState(false)
    const [hardware, setHARDWARE] = useState(false)
    const { deliver, address, contact, ok } = proyect
    const newProyect = async () => {
        if (deliver === '') return alert('Deliver to is not complete');
        try {
            let res = await axios({
                method: "post",
                url: "http://localhost:8001/api/proyect",
                data: { deliver: deliver, address: address, contact: contact },
                config: { headers: { "Content-Type": "application/json" } }
            })
            setProyect({
                id: res.data._id,
                deliver: res.data.deliver,
                address: res.data.address,
                contact: res.data.contact,
                ok: true
            })
        } catch (error) {
            console.log('New Proyecy Error: ' + error.message);
        }
    };
    const bomSelected = (value) => {
        if (value == 'DC') return setDC(true);
    }
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
    return ok ? <View>
        <StatusBar style='light' />
        <View style={{ paddingLeft: 15 }}>
            <Text h5 style={{ marginBottom: 5 }}>Deliver to: {deliver}</Text>
            <Text h5 style={{ marginBottom: 5 }}>Job Site address: {address}</Text>
            <Text h5 style={{ marginBottom: 5 }}>Onsite contact: {contact}</Text>
        </View>
        <View style={styles.container}>
            <Text h4 style={{ marginBottom: 15 }}>Select Bom</Text>
            <RNPickerSelect
                onValueChange={(value) => bomSelected(value)}
                items={[
                    { label: 'DC', value: 'DC' },
                    { label: 'AC', value: 'AC' },
                    { label: 'PVC', value: 'PVC' },
                    { label: 'COMM', value: 'COMM' },
                    { label: 'EGAUGE', value: 'EGAUGE' },
                    { label: 'HARDWARE', value: 'HARDWARE' },
                ]}
            />
            <BomDC open={dc} proyect={proyect} navigation={navigation} />
        </View>

    </View> : <KeyboardAvoidingView style={styles.container}>
            <StatusBar style='light' />
            <Text h3 style={{ marginBottom: 15 }}>New proyect</Text>
            <View style={styles.inpurContainer}>
                <Input style={{ paddingLeft: 5 }} placeholder='Deliver to' autoFocus type='text' value={deliver} onChangeText={deliver => setProyect({ ...proyect, deliver })} />
                <Input style={{ paddingLeft: 5 }} placeholder='Job site address' autoFocus type='text' value={address} onChangeText={address => setProyect({ ...proyect, address })} />
                <Input style={{ paddingLeft: 5 }} placeholder='Job contact' autoFocus type='text' value={contact} onChangeText={contact => setProyect({ ...proyect, contact })} />
            </View>
            <Button raised onPress={newProyect} containerStyle={styles.button} title='Next'></Button>
        </KeyboardAvoidingView>
}

export default AddChatProyect

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
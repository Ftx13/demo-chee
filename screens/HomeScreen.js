import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons'
import { Avatar, Icon, Image } from 'react-native-elements';
import { auth, db } from '../Firebase';
import CustomLinkList from '../componets/CustomListItem';
import axios from 'axios';
const HomeScreen = ({ navigation }) => {
    const [chats, setChats] = useState([]);
    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace('Login');
        })
    }
    const enterView = (id, item) => {
        navigation.navigate('View', { id, item });
    }

    const newProyect = async () => {
        try {
            let res = await axios({
                method: "get",
                url: "http://localhost:8001/api/proyect",
            });
            console.log(res);
            if (res) setChats(res.data);
        } catch (error) {
            console.log('New Proyecy Error: ' + error.message);
        }
    };
    useEffect(() => {
        newProyect();
    }, [navigation])
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => <Image
                source={{ uri: 'https://i.ibb.co/zHMVH1h/logo.png' }}
                style={{
                    width: 300, height: 50, display: 'flex', margin: 'auto'
                }}
            />,
            // title: 'SHOREBREAK ENERGY',
            headerStyle: {
                backgroundColor: '#fff',
                justifyContent: 'space-between'
                // alignItems: 'center',
                // justifyContent: 'center',
            },
            // headerTitleStyle: {
            //     color: 'black', textAlign: 'center',
            // },
            headerTitleColor: 'black',
            headerLeft: () => (
                <View style={{ paddingLeft: 10 }}>
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                        {auth?.currentUser?.photoURL ?
                            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} /> :
                            <Icon name='sign-out'
                                type='font-awesome'
                                color='red'
                            />}
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    width: 80,
                    textAlign: 'headerRight',
                    paddingRight: 10
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('NEW')} activeOpacity={0.5}>
                        <SimpleLineIcons name='pencil' size={24} color='black' />
                    </TouchableOpacity>
                </View>
            )
        });
    }, [navigation]);
    return (
        <SafeAreaView>
            <ScrollView style={styles.constainer}>
                {chats.map(item => (
                    <CustomLinkList key={item._id} id={item._id} item={item} enterView={enterView} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    constainer: {
        height: '100%',
        display: 'flex',
        //justifyContent: 'space-between'
    }
})

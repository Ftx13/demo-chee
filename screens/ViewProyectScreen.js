import React, { useEffect, useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ListItem, Avatar, Icon, Image } from 'react-native-elements';
import { Table, Button, Modal, ModalBody, FormGroup, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSVLink } from "react-csv";
const ViewProyectScreen = ({ navigation, route }) => {
    const [item, setItem] = useState(null);
    const [id, setId] = useState(null);
    const [bom, setBom] = useState([]);
    const [bomDc, setBomDc] = useState(null);
    const [headers, setHeaders] = useState(null);
    const newProyect = async () => {
        try {
            let res = await axios({
                method: "get",
                url: `http://localhost:8001/api/dc/all/${id}`,
            });
            if (res) {
                setBom(res.data);
            }
            // 
        } catch (error) {
            console.log('New Proyecy Error: ' + error.message);
        }
    };
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
                justifyContent: 'space-between'
            },
            headerTitleColor: 'black',
        });
    }, [navigation]);
    useEffect(() => {
        if (bom) {
            console.log(bom);
            let item = [
                'Wire clips for PV wire- Heyco S6405',
                'Black #10 PV wire ',
                'Red #10 PV wire ',
                '11" Cable Ties UV Black Std. Duty',
                'MC4 Female',
                'MC4 Male',
                'Solar DB Lay in Lugs - GBL-4DBT, 4-14, CU, DB',
                '10-32 bolts',
                '10-32 star washer',
                '10-32 nut/star washer',
                'ILSCO, SGB-4, 4-14 SOL-STR, 35 IN-LBS',
                '500" #8 bare copper',
                'Burndy #6 to #8 Crimps -YC8C8',
                'Servit Post 8-2 AWG (3/8" Stud)',
                'Wire number books ( Ideal ) 1-50',
                'MC 4- Disconect tool',
                '1" Plastic Insert bushings ',
            ];
            let Part = [];
            let Order = [];
            let final = [];
            for (let d in bom) {
                let part = '_part';

                if (d.match(part)) {
                    Part.push({ item: d, part: bom[d] })
                } else {
                    Order.push({ item: d, order: bom[d] });
                }
            }
            let orderS = Order.splice(3, 17);
            for (let i = 0; i < item.length; i++) {
                final.push({
                    item: item[i], part: Part[i]?.part, order: orderS[i]?.order
                });
            }

            setBomDc(final);
            console.log(final);
            //            let algo = bom.split(/'_o'/);
            // console.log(algo);
        }
    }, [bom])
    useEffect(() => {
        if (id) newProyect();
    }, [id])
    useEffect(() => {
        if (item) setHeaders([
            { label: 'Bom DC' },
            { label: `Deliver to ${item.deliver}` },
            { label: `Address: ${item.address}` },
            { label: `Contact: ${item.contact}` },
        ]);
    }, [item]);
    useEffect(() => {
        setItem(route.params.item);
        setId(route.params.id);
    }, [])
    return (
        <>
            <ListItem bottomDivider>
                {/* <Avatar rounded source={{
                uri: "https://i.ibb.co/52bXNrJ/IMG-20200928-WA0005-jpeg.jpg",
            }} /> */}
                <ListItem.Content>
                    <ListItem.Title style={{ fontWeight: '800' }}>
                        {item?.deliver}
                    </ListItem.Title>
                    <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                        {item?.address}
                    </ListItem.Subtitle>
                    <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                        {item?.contact}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <Table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>PART #</th>
                        <th>ORDER</th>
                    </tr>
                </thead>
                <tbody>
                    {bomDc && bomDc.map(item => (
                        <tr>
                            <td>{item.item}</td>
                            <td>{item.part}</td>
                            <td>{item.order}</td>
                        </tr>
                    ))}
                    <tr>
                        <tb>{item?.deliver && bomDc && <CSVLink color='success' data={bomDc} filename={`${item?.deliver}.csv`}>Import</CSVLink>}</tb>
                        <tb><Button color='primary'>Edit</Button></tb>
                        <tb><Button color='danger'>Delete</Button></tb>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default ViewProyectScreen

const styles = StyleSheet.create({})

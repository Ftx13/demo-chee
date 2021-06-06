import React, { useState } from 'react';
import { View, StyleSheet } from "react-native";
import { Input } from 'react-native-elements';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalBody, FormGroup, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios';
const BomDC = ({ open, proyect, navigation }) => {
    const [part, setPart] = useState({
        p_clips: '',
        p_black: '',
        p_red: '',
        p_cable: '',
        p_female: '',
        p_male: '',
        p_solar: '',
        p_bolts: '',
        p_star: '',
        p_nut: '',
        p_ilsco: '',
        p_bare: '',
        p_burndy: '',
        p_servit: '',
        p_wire: '',
        p_mc: '',
        p_plastic: '',
    });
    const [order, setOrder] = useState({
        o_clips: '',
        o_black: '',
        o_red: '',
        o_cable: '',
        o_female: '',
        o_male: '',
        o_solar: '',
        o_bolts: '',
        o_star: '',
        o_nut: '',
        o_ilsco: '',
        o_bare: '',
        o_burndy: '',
        o_servit: '',
        o_wire: '',
        o_mc: '',
        o_plastic: '',
    });
    const { p_clips, p_black, p_red, p_cable, p_female, p_male, p_solar, p_bolts, p_star,
        p_nut, p_ilsco, p_bare, p_burndy, p_servit, p_wire, p_mc, p_plastic } = part;
    const { o_clips, o_black, o_red, o_cable, o_female, o_male, o_solar, o_bolts, o_star,
        o_nut, o_ilsco, o_bare, o_burndy, o_servit, o_wire, o_mc, o_plastic } = order;
    const newProyect = async () => {
        try {
            let res = await axios({
                method: "post",
                url: "http://localhost:8001/api/dc",
                data: {
                    id: proyect.id,
                    clips_p: p_clips,
                    clips_o: o_clips,
                    black_p: p_black,
                    black_o: o_black,
                    red_p: p_red,
                    red_o: o_red,
                    cable_p: p_cable,
                    cable_o: o_cable,
                    female_p: p_female,
                    female_o: o_female,
                    male_p: p_male,
                    male_o: o_male,
                    solar_p: p_solar,
                    solar_o: o_solar,
                    bolts_p: p_bolts,
                    bolts_o: o_bolts,
                    star_p: p_star,
                    star_o: o_star,
                    nut_p: p_nut,
                    nut_o: o_nut,
                    ilsco_p: p_ilsco,
                    ilsco_o: o_ilsco,
                    bare_p: p_bare,
                    bare_o: o_bare,
                    burndy_p: p_burndy,
                    burndy_o: o_burndy,
                    servit_p: p_servit,
                    servit_o: o_servit,
                    wire_p: p_wire,
                    wire_o: o_wire,
                    mc_p: p_mc,
                    mc_o: o_mc,
                    plastic_p: p_plastic,
                    plastic_o: o_plastic,
                },
                config: { headers: { "Content-Type": "application/json" } }
            });
            if (res) navigation.navigate('HOME');
        } catch (error) {
            console.log('New Proyecy Error: ' + error.message);
        }
    };
    return (
        <Modal isOpen={open}>
            <ModalHeader>
                <div><h3>Bom DC</h3></div>
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <label>Wire clips for PV wire- Heyco S6405</label>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='PART #' value={p_clips} onChangeText={p_clips => setPart({ ...part, p_clips })} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='ORDER' value={o_clips} onChangeText={o_clips => setOrder({ ...order, o_clips })} />
                        </View>
                    </View>
                </FormGroup>
                <FormGroup>
                    <label>Black #10 PV wire</label>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='PART #' value={p_black} onChangeText={p_black => setPart({ ...part, p_black })} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='ORDER' value={o_black} onChangeText={o_black => setOrder({ ...order, o_black })} />
                        </View>
                    </View>
                </FormGroup>
                <FormGroup>
                    <label>Red #10 PV wire</label>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='PART #' value={p_red} onChangeText={p_red => setPart({ ...part, p_red })} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='ORDER' value={o_red} onChangeText={o_red => setOrder({ ...order, o_red })} />
                        </View>
                    </View>
                </FormGroup>
                <FormGroup>
                    <label>11" Cable Ties UV Black Std. Duty</label>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='PART #' value={p_cable} onChangeText={p_cable => setPart({ ...part, p_cable })} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='ORDER' value={o_cable} onChangeText={o_cable => setOrder({ ...order, o_cable })} />
                        </View>
                    </View>
                </FormGroup>
                <FormGroup>
                    <label>MC4 Female</label>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='PART #' value={p_female} onChangeText={p_female => setPart({ ...part, p_female })} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='ORDER' value={o_female} onChangeText={o_female => setOrder({ ...order, o_female })} />
                        </View>
                    </View>
                </FormGroup>
                <FormGroup>
                    <label>MC4 Male</label>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='PART #' value={p_male} onChangeText={p_male => setPart({ ...part, p_male })} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='ORDER' value={o_male} onChangeText={o_male => setOrder({ ...order, o_male })} />
                        </View>
                    </View>
                </FormGroup>
                <FormGroup>
                    <label>Solar DB Lay in Lugs - GBL-4DBT, 4-14, CU, DB</label>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='PART #' value={p_solar} onChangeText={p_solar => setPart({ ...part, p_solar })} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='ORDER' value={o_solar} onChangeText={o_solar => setOrder({ ...order, o_solar })} />
                        </View>
                    </View>
                </FormGroup>
                <FormGroup>
                    <label>10-32 bolts</label>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='PART #' value={p_bolts} onChangeText={p_bolts => setPart({ ...part, p_bolts })} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='ORDER' value={o_bolts} onChangeText={o_bolts => setOrder({ ...order, o_bolts })} />
                        </View>
                    </View>
                </FormGroup>
                <FormGroup>
                    <label>10-32 star washer</label>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='PART #' value={p_star} onChangeText={p_star => setPart({ ...part, p_star })} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='ORDER' value={o_star} onChangeText={o_star => setOrder({ ...order, o_star })} />
                        </View>
                    </View>
                </FormGroup>
                <FormGroup>
                    <label>10-32 nut/star washer</label>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='PART #' value={p_nut} onChangeText={p_nut => setPart({ ...part, p_nut })} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='ORDER' value={o_nut} onChangeText={o_nut => setOrder({ ...order, o_nut })} />
                        </View>
                    </View>
                </FormGroup>
                <FormGroup>
                    <label>ILSCO, SGB-4, 4-14 SOL-STR, 35 IN-LBS</label>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='PART #' value={p_ilsco} onChangeText={p_ilsco => setPart({ ...part, p_ilsco })} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='ORDER' value={o_ilsco} onChangeText={o_ilsco => setOrder({ ...order, o_ilsco })} />
                        </View>
                    </View>
                </FormGroup>
                <FormGroup>
                    <label>500 #8 bare copper</label>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='PART #' value={p_bare} onChangeText={p_bare => setPart({ ...part, p_bare })} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='ORDER' value={o_bare} onChangeText={o_bare => setOrder({ ...order, o_bare })} />
                        </View>
                    </View>
                </FormGroup>
                <FormGroup>
                    <label>Burndy #6 to #8 Crimps -YC8C8</label>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='PART #' value={p_burndy} onChangeText={p_burndy => setPart({ ...part, p_burndy })} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='ORDER' value={o_burndy} onChangeText={o_burndy => setOrder({ ...order, o_burndy })} />
                        </View>
                    </View>
                </FormGroup>
                <FormGroup>
                    <label>Servit Post 8-2 AWG (3/8" Stud)</label>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='PART #' value={p_servit} onChangeText={p_servit => setPart({ ...part, p_servit })} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='ORDER' value={o_servit} onChangeText={o_servit => setOrder({ ...order, o_servit })} />
                        </View>
                    </View>
                </FormGroup>
                <FormGroup>
                    <label>Wire number books ( Ideal ) 1-50</label>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='PART #' value={p_wire} onChangeText={p_wire => setPart({ ...part, p_wire })} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='ORDER' value={o_wire} onChangeText={o_wire => setOrder({ ...order, o_wire })} />
                        </View>
                    </View>
                </FormGroup>
                <FormGroup>
                    <label>MC 4- Disconect tool</label>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='PART #' value={p_mc} onChangeText={p_mc => setPart({ ...part, p_mc })} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='ORDER' value={o_mc} onChangeText={o_mc => setOrder({ ...order, o_mc })} />
                        </View>
                    </View>
                </FormGroup>
                <FormGroup>
                    <label>1 Plastic Insert bushings</label>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='PART #' value={p_plastic} onChangeText={p_plastic => setPart({ ...part, p_plastic })} />
                        </View>
                        <View style={styles.inputWrap}>
                            <Input style={{ paddingLeft: 5 }} placeholder='ORDER' value={o_plastic} onChangeText={o_plastic => setOrder({ ...order, o_plastic })} />
                        </View>
                    </View>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button onClick={newProyect} color='primary'>Save</Button>
            </ModalFooter>
        </Modal>
    )
}
export default BomDC

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: "row"
    },
    inputWrap: {
        flex: 1,
    },
})

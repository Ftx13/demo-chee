import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements';

const CustomListItem = ({ id, item, enterView }) => {
    return (
        <ListItem bottomDivider onPress={() => enterView(id, item)}>
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
    )
}

export default CustomListItem

const styles = StyleSheet.create({})

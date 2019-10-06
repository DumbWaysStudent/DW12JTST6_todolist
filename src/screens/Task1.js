import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet, TextInput, Button } from 'react-native';

class Task1 extends Component {
    render(){
        const activities = [
            {name : 'work'},
            {name : 'swimm'},
            {name : 'study'},
            {name : 'sleep'},
            {name : 'run'},
        ]
        return(
            <View style={styles.container}>
                <View style={styles.container}>
                    <FlatList 
                        keyExtractor = {activity => activity.name}
                        data = {activities}
                        renderItem = {({item})=>{
                            return (
                                <Text style={styles.item}>
                                    {item.name}
                                </Text>
                            )
                        }}
                    />
                </View>
            </View>
            
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    item:{
        flex:1,
        padding:10,
        fontSize:18,
        height:44,
        borderBottomWidth:2
    }
});
export default Task1;
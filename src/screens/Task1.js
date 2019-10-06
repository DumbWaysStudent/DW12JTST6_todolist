import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet, TextInput, Button } from 'react-native';

class Task1 extends Component {
    constructor(){
        super();
        this.state={
            data:[
                {name : 'work'},
                {name : 'swimm'},
                {name : 'study'},
                {name : 'sleep'},
                {name : 'run'},
            ]
        }
    }
    renderItem = ({item, index})=>{
        return (
            <Text style={styles.item} key={index}>
                {item.name}
            </Text>
        )
    }
    addList = () => {
        this.state.data.push({'name': this.state.input})
        this.setState({input : ''})
    };
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topbar}>
                    <TextInput
                        placeholder="New Todo"
                        value = {this.state.input}
                        onChangeText = {(text) => {
                            this.setState({
                                input: text
                            })
                        }}
                    />
                    <Button title="Add" onPress={() => this.addList()}/>
                </View>
                <View style={styles.container}>
                    <FlatList 
                        data={this.state.data}
                        renderItem={this.renderItem}
                        extraData = {this.state}
                        
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
    topbar:{
        // flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        padding:10
    },
    item:{
        padding:10,
        fontSize:18,
        height:44,
        borderBottomWidth:2
    }
});
export default Task1;
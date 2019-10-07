import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { CheckBox, Icon } from 'native-base';

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
            <View  key={index} style={styles.item}>
                <Text>
                    {item.name}
                </Text>
                <Icon name="trash" style={{padding:5, color:'red'}} onPress={() => this.button(index) } />
            </View>
            
        )
    }
    addList = () => {
        this.state.data.push({'name': this.state.input})
        this.setState({input : ''})
    };

    button(item){
        Alert.alert(
            'Delete Item',
            'Are you sure to delete this item ?',
            [
                {text: 'Yes', onPress: ()=> this.deleteList(item)},
                {text: 'No', onPress: ()=> '', style:'cancel'}
            ]
        )
    }
    deleteList = (item) => {
        const new_list = [...this.state.data]
        new_list.splice(item,1)
        alert('Success deleted item')
        this.setState({data:new_list})
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
                    <Button style={styles.button} title="Add" onPress={() => this.addList()}/>
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

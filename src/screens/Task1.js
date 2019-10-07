import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { CheckBox, Icon } from 'native-base';

class Task1 extends Component {
    constructor(){
        super();
        this.state={
            data:[
                {name : 'work', checked: false},
                {name : 'swimm', checked: false},
                {name : 'study', checked: false},
                {name : 'sleep', checked: false},
                {name : 'run', checked: false},
            ],
            input: '',
            task: 'add'
        }
    }

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
    addList = () => {
        if (this.state.input === ''|| this.state.input === 'undefined'){
            alert('Please type some text!')
            return
        }
        else{
            const new_list = [...this.state.data, {name: this.state.input}]
            alert("Success add '"+this.state.input+"' in List")
            this.setState({input : '', data:new_list})
        }
       
    };
    deleteList = (item) => {
        const new_list = [...this.state.data]
        new_list.splice(item,1)
        alert('Success deleted item')
        this.setState({data:new_list})
    };

    checkBoxHandler=(index)=>{
        const new_checked = [...this.state.data]
        new_checked[index].checked = !new_checked[index].checked
        // alert(new_checked[index].checked)
        this.setState({data : new_checked})
    }
    updateList =()=>{
        const new_list = [...this.state.data]
        new_list[this.state.index].name = this.state.input
        this.setState({data:new_list, task:'add', input: ''})
        alert("Success updated item")
    }

    updateForm = (index)=>{
        this.setState({task: 'update', index: index, input: this.state.data[index].name})
    }

    renderItem = ({item, index})=>{
        return (
            <View  key={index} style={styles.item}>
                <CheckBox checked={item.checked} onPress= {() => this.checkBoxHandler(index)}/>
                <Text>
                    {item.name}
                </Text>
                <Icon name="create" style={{color:'green'}} onPress={()=>this.updateForm(index)}/>
                <Icon name="trash" style={{padding:5, color:'red'}} onPress={() => this.button(index) } />
            </View>
            
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topbar}>
                    <TextInput style={styles.inputText}
                        placeholder= {this.state.task === 'add' ? "New Todo" : "Edit Todo"}
                        value = {this.state.input}
                        onChangeText = {(text) => {
                            this.setState({
                                input: text
                            })
                        }}
                    />
                    {this.state.task == 'add' ?
                    <Button style={styles.button} title="Add" onPress={() => this.addList()}/>
                    :
                    <Button style={styles.button} title="Update" onPress={() => this.updateList()}/>
                    }
                </View>
                <View style={styles.container}>
                    <FlatList 
                        data={this.state.data}
                        keyExtractor = {data => data.name}
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
        flexDirection:'row',
        justifyContent: 'space-between',
        padding:10,
        fontSize:22,
        height:55,
        borderBottomWidth:1
    },
    inputText:{
        flex:1,
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:10
    },
    button:{
        borderRadius:25,
        fontSize:18,
        backgroundColor: 'rgb(0, 224, 224)',
        marginHorizontal:10
    }
});
export default Task1;
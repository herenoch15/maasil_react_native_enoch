import React, {Component}  from 'react'
import {
    View,
    Text,
    TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import styles from './styles'
class ItemToDoList extends Component 
{

    constructor(props){
        super(props)
    }
    addActiive=async()=>
    {
        let newTache= {"id":this.props.items.id,"title":this.props.items.title,"date":"2020-05-06","active":this.props.items.active==1?0:1}
        const action = { type: "ADD_ACTIVE", value:newTache}
        await this.props.dispatch(action)
    }
    _clickDeleteTache=async()=>
    {
        const action = { type: "DELETE_TACHE", value:this.props.items.id}
        await this.props.dispatch(action)
    }

    render() {
        return (<TouchableOpacity style={styles.rowItems} onPress={()=>{this.addActiive()}} >
                    <Text style={styles.numero}>N° {this.props.items.id}</Text>
                    <Text numberOfLines={1} style={styles.title}>{this.props.items.title}</Text>
                    <TouchableOpacity style={styles.btnDelete} onPress={()=>{this._clickDeleteTache()}}>
                        <Text style={styles.textDelete}>Suprimer</Text>
                    </TouchableOpacity>
                    <View style={[styles.active,{backgroundColor:this.props.items.active?colors.blue2:colors.white,}]}></View>  
            </TouchableOpacity>)
    }
}

const mapStateProps= (state)=>
{
    return {
        toDoList:state.toDoList,
        }
}
export default connect(mapStateProps)(ItemToDoList);
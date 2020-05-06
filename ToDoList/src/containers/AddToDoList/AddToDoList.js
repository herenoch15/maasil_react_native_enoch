import React, {Component,Fragment}  from 'react'
import {
    StatusBar,
    SafeAreaView,
    View,
    AsyncStorage,
    Text,
    TextInput,
    TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'


import styles from "./styles"

class AddToDoList extends Component
{
    static navigationOptions = 
    {
        header: null,
        title: "",
    };
    constructor(props)
    {
        super(props)
        this.state=
        {
            nameTache:"",
            active:0,
        }
        this.idTacheNew=0

    }
    componentDidMount=async()=>
    {
       let idTacheFIn=await AsyncStorage.getItem("idTacheFIn")
       if(idTacheFIn==null)
       {
            await AsyncStorage.setItem("idTacheFIn",this.props.toDoList.length.toString())
       }
       this.idTacheNew=parseInt(await AsyncStorage.getItem("idTacheFIn"))+1

    }

    addActiive=async()=>
    {
        await this.setState({active:this.state.active==1?0:1})
    }
    _addTache=async()=>
    {
        let newTache= {"id":this.idTacheNew,"title":this.state.nameTache,"date":"2020-05-06","active":this.state.active}

        const action = { type: "ADD_TO_DO_LIST", value:newTache}
        await this.props.dispatch(action)
        await AsyncStorage.setItem("idTacheFIn",this.idTacheNew.toString())
        this.props.navigation.pop()
    }
    render()
    {
      return (
        <Fragment>
        <StatusBar barStyle="dark-content" />
              <SafeAreaView style={styles.bodySafeAreaView}>
                 <TouchableOpacity style={styles.btnPrevius} onPress={()=>{this.props.navigation.pop()}}>
                            <Text style={styles.textBtnPrevius}>{"<"}</Text>
                </TouchableOpacity>   
                  <View style={styles.body}>
                        <Text style={styles.titlePage}>Création d'un tache</Text>
                        <View style={styles.itemsTache}>
                            <Text style={styles.nameLabel}>Nom du Tache</Text>
                            <TextInput  
                              placeholder="Entrer le nom du tache"
                              value={this.state.nameTache}
                              onChangeText={(value)=>{this.setState({nameTache:value})}}
                              style={styles.viewR} />
                        </View>
                        <View style={styles.itemsTache}>
                            <Text style={styles.nameLabel}>Active :</Text>
                            <View  style={styles.viewR}>
                            <TouchableOpacity  style={styles.viewR}  onPress={this.addActiive} style={[styles.active,{backgroundColor:this.state.active?colors.blue2:colors.white}]}></TouchableOpacity> 
                            </View>

                        </View>
                        <TouchableOpacity style={styles.btnAddTache} onPress={()=>{this._addTache()}}>
                            <Text style={styles.textAddTache}>Enregistrer</Text>
                        </TouchableOpacity>
                  </View>
              </SafeAreaView>
        </Fragment>  
      );
    }
}
const mapStateProps= (state)=>
{
  return {
    toDoList:state.toDoList,
    }
}
export default connect(mapStateProps)(AddToDoList);
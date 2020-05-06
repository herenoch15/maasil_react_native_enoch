import React, {Component,Fragment}  from 'react'
import {
    Keyboard,
    StatusBar,
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    ImageBackground} from 'react-native'
import {connect} from 'react-redux'

import ItemToDoList from "./ItemToDoList/ItemToDoList"
import ScreenDimensions from "../../configs/ScreenDimensions"
import styles from "./styles"

class Home extends Component
{
    static navigationOptions = 
    {
        header: null,
        title: "",
    };
    constructor(props)
    {
        super(props)

    }


    render()
    {
      return (
        <Fragment>
        <StatusBar barStyle="dark-content" />
              <SafeAreaView >
                  <View style={styles.body}>
                        <Text style={styles.titlePage}>BIENVENUE SUR TODO LIST</Text>
                        <TouchableOpacity style={styles.btnAddTache} onPress={()=>{this.props.navigation.navigate("AddToDoList")}}>
                            <Text style={styles.textAddTache}>Creer un tache</Text>
                        </TouchableOpacity>

                        <FlatList
                            style={styles.flatListItems}
                            data={this.props.toDoList.sort(function (a, b) {
                                return a.id-b.id
                            })}
                            keyExtractor={(item)=>item.id.toString()}
                            renderItem={({item}) => <ItemToDoList navigation={this.props.navigation}  items={item} />}
                            onEndReachedThreshold={0.5}
                            onEndReached={() =>
                            {
                            }}
                           /> 
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
export default connect(mapStateProps)(Home);
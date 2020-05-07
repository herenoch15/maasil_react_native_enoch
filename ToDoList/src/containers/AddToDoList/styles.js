
import {StyleSheet } from 'react-native'
import ScreenDimensions from "app/src/configs/ScreenDimensions"
import colors from 'app/src/configs/colors';
export default styles = StyleSheet.create(
{
    body:
    {
        marginBottom:ScreenDimensions.heightScreen*0.05,
        alignItems:"center", 
        marginHorizontal:ScreenDimensions.widthScreen*0.03, 
    },
    titlePage:
    {
        fontSize:ScreenDimensions.widthScreen*0.05,
        marginBottom:ScreenDimensions.heightScreen*0.05,
    },
    btnPrevius:
    {
        marginLeft:ScreenDimensions.widthScreen*0.05,
    },textBtnPrevius:
    {
        fontSize:ScreenDimensions.widthScreen*0.07,
    },
    itemsTache:
    {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:ScreenDimensions.heightScreen*0.02,
    },
    nameLabel:
    {
        width:ScreenDimensions.widthScreen*0.3,
        textAlign:"right",
        marginRight:ScreenDimensions.widthScreen*0.02,
    },
    viewR:
    {
        width:ScreenDimensions.widthScreen*0.5,
        alignItems:"center",
    },
    textInputAddTache:
    {
        width:ScreenDimensions.widthScreen*0.5,
        alignItems:"center",
        height:ScreenDimensions.heightScreen*0.038,
   
    },
    btnAddTache:
    {
        
        backgroundColor:colors.blue2,
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        height:ScreenDimensions.heightScreen*0.06,
        marginTop:ScreenDimensions.heightScreen*0.01,
        marginBottom:ScreenDimensions.heightScreen*0.03,
        borderRadius:(ScreenDimensions.heightScreen*0.1)/5,
    },
    textAddTache:
    {
        color:colors.white,
        fontSize:ScreenDimensions.widthScreen*0.04,
    },
    active:
    {
        width:ScreenDimensions.widthScreen*0.06,
        height:ScreenDimensions.widthScreen*0.06,
        borderRadius:(ScreenDimensions.widthScreen*0.06)/2,
        borderWidth:ScreenDimensions.widthScreen*0.003,
        borderColor:colors.blue2,
    },

})
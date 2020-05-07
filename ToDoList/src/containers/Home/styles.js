
import {StyleSheet } from 'react-native'
import ScreenDimensions from "app/src/configs/ScreenDimensions"
import colors from "app/src/configs/colors"
export default styles = StyleSheet.create(
{
    body:
    {
        marginTop:ScreenDimensions.heightScreen*0.05,
        marginBottom:ScreenDimensions.heightScreen*0.05,
        alignItems:"center", 
        marginHorizontal:ScreenDimensions.widthScreen*0.03, 
    },
    titlePage:
    {
        fontSize:ScreenDimensions.widthScreen*0.05
    },
    btnAddTache:
    {
        
        backgroundColor:colors.blue2,
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        height:ScreenDimensions.heightScreen*0.06,
        marginTop:ScreenDimensions.heightScreen*0.03,
        marginBottom:ScreenDimensions.heightScreen*0.03,
        borderRadius:(ScreenDimensions.heightScreen*0.1)/5,
    },
    textAddTache:
    {
        color:colors.white,
        fontSize:ScreenDimensions.widthScreen*0.04,
    },
    flatListItems:
    {
        width:"100%",
        height:ScreenDimensions.heightScreen*0.75
       // paddingHorizontal:ScreenDimensions.widthScreen*0.03,
    },
})
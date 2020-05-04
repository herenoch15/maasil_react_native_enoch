
import {Platform,Dimensions, StyleSheet } from 'react-native';
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
        justifyContent:"flex-start",
        marginBottom:ScreenDimensions.heightScreen*0.02,
    },
    nameLabel:
    {
        width:ScreenDimensions.widthScreen*0.3,
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

})
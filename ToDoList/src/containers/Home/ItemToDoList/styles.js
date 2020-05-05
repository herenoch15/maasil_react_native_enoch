import { StyleSheet } from 'react-native';
import ScreenDimensions from '../../../configs/ScreenDimensions';
import colors from '../../../configs/colors';
export default styles = StyleSheet.create(
{
    rowItems:
    {
        height:ScreenDimensions.heightScreen*0.1,
        marginBottom:ScreenDimensions.heightScreen*0.015,
        paddingHorizontal:ScreenDimensions.widthScreen*0.03,
        borderRadius:(ScreenDimensions.heightScreen*0.1)/5,
        borderWidth:ScreenDimensions.widthScreen*0.003,
        borderColor:colors.blue2,
        flexDirection:"row",
        alignItems:"center", 
    },
    numero:
    {
        color:colors.black,
        fontSize:ScreenDimensions.widthScreen*0.04,
        width:ScreenDimensions.widthScreen*0.1,
    },
    title:
    {
        color:colors.black,
        fontSize:ScreenDimensions.widthScreen*0.04,
        flex:1,
    },
    active:
    {
        width:ScreenDimensions.widthScreen*0.06,
        height:ScreenDimensions.widthScreen*0.06,
        borderRadius:(ScreenDimensions.widthScreen*0.06)/2,
        borderWidth:ScreenDimensions.widthScreen*0.003,
        borderColor:colors.blue2,
    },
    btnDelete:
    {
        marginRight:ScreenDimensions.widthScreen*0.02,
        backgroundColor:colors.blue2,
        borderRadius:(ScreenDimensions.widthScreen*0.06)/2,
        padding:ScreenDimensions.widthScreen*0.02,
        justifyContent:"center",
    },
    textDelete:
    {
        color:colors.white,
    }
   
})
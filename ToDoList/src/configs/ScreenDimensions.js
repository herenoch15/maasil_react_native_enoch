import { Dimensions} from 'react-native'
const win = Dimensions.get('window')
export default ScreenDimensions = {
    widthScreen: win.width<win.height?win.width:win.height,
    heightScreen:win.width<win.height?win.height:win.width,
}
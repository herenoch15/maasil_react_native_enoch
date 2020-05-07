import { createStackNavigator } from "react-navigation"
import Home from "app/src/containers/Home/Home" //screen liste
import AddToDoList from  "app/src/containers/AddToDoList/AddToDoList" //screen ajout 
const AppNavigator = createStackNavigator
(
    {
        Home: {screen: Home},
        AddToDoList: {screen: AddToDoList},
        
    },
    {
        initialRouteName: "Home",
        navigationOptions: {
            header: null,
        }
    }
);
export default AppNavigator
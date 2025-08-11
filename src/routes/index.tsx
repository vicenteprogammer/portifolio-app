import {NavigationContainer} from '@react-navigation/native'
import BottomRoute from './bottomTabs.route'

export default function Navigator (){
    return(
        <NavigationContainer>
            <BottomRoute/>
        </NavigationContainer>
    )
}
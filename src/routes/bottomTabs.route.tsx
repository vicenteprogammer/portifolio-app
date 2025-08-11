import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MainScreen from '../screens/MainScreen/MainScreen'
import SkillScreen from '../screens/SkillScreen/SkillScreen'
const {Screen, Navigator} = createBottomTabNavigator()


export default function BottomRoute(){
  return(
    <Navigator>
        <Screen
         name='main-screen'
         component={MainScreen}
         options={{
            headerShown:false,
            tabBarLabel: 'User',
            tabBarLabelStyle:{fontSize: 18, color: '#1E90FF'},
            tabBarIcon: ( {color, size})=>(
                <FontAwesome6 name="user-circle" size={24} color="#1E90FF" />
            )
         }}
        />

        <Screen
         name='skill-screen'
         component={SkillScreen}
         options={{
            headerShown: false,
            tabBarLabelStyle:{fontSize: 18, color: '#1E90FF'},
            tabBarLabel: 'Skills',
            tabBarIcon: ({color,size})=>(
                <FontAwesome6 name="code" size={24} color="#1E90FF" />
              )
            }
         }
        />
    </Navigator>
  )
}


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import { TabRoutes } from './routes';

const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#2196F3',
            }}
        >
            {
                Object.values(TabRoutes).map(item => (
                    <Tab.Screen
                        key={item.name}
                        name={item.name}
                        component={item.component}
                        options={{
                            tabBarLabel: item.label,
                            tabBarIcon: ({ color, size }) => (
                                <Icon name={item.icon} size={size} color={color} />
                            ),
                        }}
                    />
                ))
            }
        </Tab.Navigator>
    )
}

export default Tabs;
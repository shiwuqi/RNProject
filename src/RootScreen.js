import React from 'react';
import { StatusBar } from 'react-native';
import TabBarItem from './components/TabBarItem';
import { createBottomTabNavigator, createAppContainer, TabBarBottom, createStackNavigator } from 'react-navigation';
import Home from './views/Home'
import Chat from './views/Chat'
import Mine from './views/Mine'
import Other from './views/Other'

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '首页',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./assets/icons/common-icon_home.png')}
                    selectedImage={require('./assets/icons/common-icon-checked_home.png')}
                />
            )
        })
    },
    Chat: {
        screen: Chat,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '沟通',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./assets/icons/common-icon_chat.png')}
                    selectedImage={require('./assets/icons/common-icon-checked_chat.png')}
                />
            )
        })
    },
    Mine: {
        screen: Mine,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '我的',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./assets/icons/common-icon_mine.png')}
                    selectedImage={require('./assets/icons/common-icon-checked_mine.png')}
                />
            )
        })
    }
}, {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        lazy: true,
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: '#45C8DC',
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        },
    });


const Navigators = createStackNavigator(
    {
        Tab: {
            screen: TabNavigator,
            navigationOptions: {
                header: () => null,
            }
        },
        Other: {
            screen: Other,
            navigationOptions: {
                
            }
        }
    }
)


export default createAppContainer(Navigators);
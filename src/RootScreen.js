import React from 'react';
import { StatusBar } from 'react-native';
import TabBarItem from './components/TabBarItem';
import { createBottomTabNavigator, createAppContainer, TabBarBottom, createStackNavigator } from 'react-navigation';
import Home from './views/Home'
import Chat from './views/Chat'
import Mine from './views/Mine'
import Other from './views/Other'
import Detail from './views/Detail'
import Search from './views/Search'
import City from './views/City'

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
                headerBackTitle: null
            }
        },
        Other: {
            screen: Other,
            navigationOptions: {}
        },
        Detail: {
            screen: Detail,
            navigationOptions: {
                headerTitle: '详情'
            }
        },
        Search: {
            screen: Search,
            navigationOptions: {
                headerTitle: '搜索'
            }
        },
        City: {
            screen: City,
            navigationOptions: {
                headerTitle: '选择城市',
            }
        }
    }
)


export default createAppContainer(Navigators);
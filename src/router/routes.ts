import { StackNavigationOptions } from '@react-navigation/stack';

import Home from '../screens/home';
import Settings from '../screens/settings';
import User from '../screens/user';
import Meeting from '../screens/meeting';
import Camera from '../screens/camera';
import Tabs from './tabs';

type Route = {
    component: any,
    options?: StackNavigationOptions,
    tab?: boolean,
    icon?: string,
}

type TabRoute = {
    name: string,
    icon: any,
    label: string,
} & Route;

const INITIAL_ROUTE = 'Home';

const Routes: Record<string, Route> = {
    Home: { component: Tabs, options: { headerShown: false } },
    Meeting: { component: Meeting, },
    Camera: { component: Camera }
};

// 底部tab栏
const TabRoutes: Record<string, TabRoute> = {
    Home: { component: Home, name: 'Home', icon: 'home', label: '首页' },
    Settings: { component: Settings, name: 'Settings', icon: 'lastfm-square', label: '设置' },
    User: { component: User, name: 'User', icon: 'user', label: '用户' },
};

export {
    INITIAL_ROUTE,
    Routes,
    TabRoutes,
}

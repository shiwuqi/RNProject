import { INITIAL_ROUTE, Routes } from './routes';

import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Screen, Navigator } = createStackNavigator();

let navigationRef: any = null;
export const NavigateToRoute: any = (route: string, routeParams?: Record<string, unknown>) => {
    if (!navigationRef) return console.warn('No navigation ref was found while navigating!');
    return navigationRef.navigate(route, routeParams);
};

export const getNavigationRef = () => {
    if (!navigationRef) return console.warn('No navigation ref was found!');
    return navigationRef;
};

export const NavigateBack = () => {
    if (!navigationRef) return console.warn('No navigation ref was found while navigating!');
    return navigationRef.goBack();
};

export const GetActiveScreen = () => {
    if (!navigationRef) return console.warn('No navigation ref was found!');
    return navigationRef.getCurrentRoute();
};

const CreateScreens = () => {
    const screens = [];
    for (const [key, route] of Object.entries(Routes)) {
        screens.push(<Screen key={key} name={key} component={route.component} options={route.options} />);
    }

    return screens;
};

const Router = () => {

    navigationRef = useNavigation();

    return (
        <Navigator initialRouteName={INITIAL_ROUTE} screenOptions={{ headerShown: true }} >
            {CreateScreens()}
        </Navigator>
    );
};

export default Router;

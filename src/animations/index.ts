import { Animated, } from 'react-native';

const fade = (val: Animated.Value, to: Animated.Value | number, endFn?: () => any) => {
    Animated.timing(val, {
        toValue: to,
        duration: 500,
        useNativeDriver: false
    }).start(() => endFn && endFn());
}


export default { fade };
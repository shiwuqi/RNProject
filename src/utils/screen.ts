import { Dimensions, Platform, StatusBar } from 'react-native';

//UI设计图的宽度
const designWidth = 750
//UI设计图的高度
const designHeight = 1334

//手机屏幕的宽度
const width = Dimensions.get('window').width;
//手机屏幕的高度
const height = Dimensions.get('window').height;

//计算手机屏幕宽度对应设计图宽度的单位宽度
const unitWidth = width / designWidth;
//计算手机屏幕高度对应设计图高度的单位高度
const unitHeight = height / designHeight;

/**
 * 判断是否为iphoneX序列机型
 * @returns {boolean}
 */
const isIphoneX = (Platform.OS === 'ios' && (Number(((height / width) + "").substr(0, 4)) * 100) === 216)

//状态栏的高度
const getStatusBarHeight = () => {
    if (Platform.OS == 'android') return StatusBar.currentHeight;
    if (isIphoneX) {
        return 44
    }
    return 20
}

const statusBarHeight = getStatusBarHeight();
//标题栏的高度
const titleHeight = unitWidth * 100 + (statusBarHeight || 0);

export {
    width,
    height,
    unitWidth,
    unitHeight,
    isIphoneX,
    titleHeight,
    getStatusBarHeight,
}
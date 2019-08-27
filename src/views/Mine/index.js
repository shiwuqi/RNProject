import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { getStatusBarHeight } from '../../utils/screen'
import CellItem from './CellItem'
const paddingBar = getStatusBarHeight()

const cells = [
    {
        icon: require('../../assets/mine/mine-wallet.png'),
        title: '我的钱包',
        subTitle: '127'
    },
    {
        icon: require('../../assets/mine/mine-vip.png'),
        title: '会员中心',
        subTitle: '',
    },
    {
        icon: require('../../assets/mine/mine-service.png'),
        title: '客服中心',
        subTitle: ''
    },
    {
        icon: require('../../assets/mine/mine-about.png'),
        title: '关于美团',
        subTitle: ''
    }
]

class Mine extends Component {
    navigateTo = () => {
        this.props.navigation.navigate('Other')
    }
    render() {
        return(
            <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
                <View style={styles.userInfo}>
                    <Image source={require('../../assets/mine/avatar_default.png')} style={styles.userAvatar}></Image>
                    <View>
                        <Text style={styles.userName}>昵称</Text>
                        <Text style={{color: '#fff'}}>个人信息</Text>
                    </View>
                </View>
                <View style={styles.userCell}>
                    {cells.map((cell, index) => {
                        return (
                            <CellItem data={cell} navigateTo={this.navigateTo} key={index} />
                        )
                    })}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: paddingBar + 20,
        paddingBottom: 20,
        paddingLeft: 16,
        backgroundColor: '#00d3be'
    },
    userAvatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
    },
    userName: {
        marginBottom: 4,
        fontSize: 16,
        color: '#fff'
    },
    userCell: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 20
    }
})

export default Mine
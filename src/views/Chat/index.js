import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { getStatusBarHeight } from '../../utils/screen'

export default class Chat extends Component {
    render() {
        const paddingBar = getStatusBarHeight()
        return(
            <View style={{ paddingTop: paddingBar }}>
                <Text>Order</Text>
            </View>
        )
    }
}
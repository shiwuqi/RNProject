import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { getStatusBarHeight } from '../../utils/screen'

export default class Mine extends Component {
    render() {
        const paddingBar = getStatusBarHeight()
        return(
            <View style={{ paddingTop: paddingBar }}>
                <Text>Mine</Text>
            </View>
        )
    }
}
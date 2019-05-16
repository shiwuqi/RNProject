import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { getStatusBarHeight } from '../../utils/screen'

export default class Chat extends Component {
    render() {
        const paddingBar = getStatusBarHeight()
        return(
            <View style={{ paddingTop: paddingBar }}>
                <Text>Order</Text>
                <Button title='Go to Other' onPress={() => this.props.navigation.navigate('Other')}></Button>
            </View>
        )
    }
}
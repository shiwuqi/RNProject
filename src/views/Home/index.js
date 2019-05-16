import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { getStatusBarHeight } from '../../utils/screen'

export default class Home extends Component {
    render() {
        const paddingBar = getStatusBarHeight()
        return(
            <View style={{ paddingTop: paddingBar }}>
                <Text>Home</Text>
                <Button title='Go to Mine' onPress={() => this.props.navigation.navigate('Mine')}></Button>
            </View>
        )
    }
}
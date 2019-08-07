import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { getStatusBarHeight } from '../../utils/screen'

class Mine extends Component {
    render() {
        const paddingBar = getStatusBarHeight()
        // const { counter } = this.props
        console.log(this.props)
        return(
            <View style={{ paddingTop: paddingBar }}>
                <Text>Mine</Text>
                {/* <Text></Text> */}
                <Button title='增加' color='red'></Button>
                <Button title='减少'></Button>
            </View>
        )
    }
}
export default Mine
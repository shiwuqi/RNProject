import React, { Component } from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

class CellItem extends Component {
    render() {
        const { data, navigateTo } = this.props
        return (
            <TouchableOpacity style={styles.container} onPress={navigateTo}>
                <View style={styles.cell}>
                    <Image source={data.icon} style={styles.icon}></Image>
                    <Text style={{ flex: 1 }}>{data.title}</Text>
                    <Text style={{ marginRight: 6, color: '#999999' }}>{data.subTitle}</Text>
                    <Ionicons
                        name='ios-arrow-forward'
                        size={18}
                        color='#999999'></Ionicons>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#e9e9e9',
        backgroundColor: '#fff'
    },
    cell: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16
    },
    icon: {
        width: 26,
        height: 26,
        marginRight: 4,
        borderRadius: 13
    },
    arrow: {
        width: 13,
        height: 13
    }
})

export default CellItem
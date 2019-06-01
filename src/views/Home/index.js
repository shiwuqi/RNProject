import React, { Component } from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, View, Text, Image, FlatList } from 'react-native'
import { getStatusBarHeight, width } from '../../utils/screen'

const cols = 4;
const vMargin = 140;
const cellWH = (width - vMargin) / cols;
const hMargin = 20;

export default class Home extends Component {
    state = {
        data: [
            {
                key: '火锅',
                image: require('../../assets/home/buffet.png')
            },
            {
                key: '甜点饮品',
                image: require('../../assets/home/dessert.png')
            },
            {
                key: '自助餐',
                image: require('../../assets/home/incense.png')
            },
            {
                key: '小吃快餐',
                image: require('../../assets/home/fastfood.png')
            },
            {
                key: '西餐',
                image: require('../../assets/home/westernfood.png')
            },
            {
                key: '烧烤烤肉',
                image: require('../../assets/home/barbecue.png')
            },
            {
                key: '香锅烤鱼',
                image: require('../../assets/home/hotpot.png')
            },
            {
                key: '海鲜',
                image: require('../../assets/home/seafood.png')
            }
        ],
        response: {}
    }

    _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0.9}>
                <View style={styles.item}>
                    <Image source={item.image} style={styles.itemImg}></Image>
                    <Text style={styles.itemText} numberOfLines={5}>{item.key}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const paddingBar = getStatusBarHeight()
        return (
            <View style={{ paddingTop: paddingBar }}>
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index}
                    numColumns={cols}
                    horizontal={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 15
    },
    list_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    item: {
        width: cellWH,
        marginLeft: 16,
        marginRight: 20,
        marginTop: hMargin,
        alignItems: 'center',
    },
    itemImg: {
        width: cellWH,
        height: cellWH,
        borderRadius: 5
    },
    itemText: {
        marginTop: 5,
        textAlign: 'center'
    }
})
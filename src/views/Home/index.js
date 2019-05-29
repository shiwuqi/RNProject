import React, { Component } from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, View, Text, Image, FlatList } from 'react-native'
import { getStatusBarHeight } from '../../utils/screen'

const { width } = Dimensions.get('window')
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
        ]
    }

    _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.item}>
                    <Image source={ item.image } style={{width: cellWH, height: cellWH, borderRadius: 5}}></Image>
                    <Text style={{marginTop: 5, textAlign: 'center'}} numberOfLines={5}>{item.key}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const paddingBar = getStatusBarHeight()
        return (
            <View style={{ paddingTop: paddingBar }}>
                {/* <Text>Home</Text> */}
                {/* <Button title='Go to Mine' onPress={() => this.props.navigation.navigate('Mine')}></Button> */}
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index}
                    contentContainerStyle={styles.list_container}
                />
                {/* <Image source={ hotpot }></Image> */}
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
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    item: {
        width: cellWH,
        marginLeft: 10,
        marginRight: 10,
        marginTop: hMargin,
        alignItems: 'center',
    }
})
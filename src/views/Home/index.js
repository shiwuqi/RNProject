import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image, FlatList, ScrollView } from 'react-native'
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
        foods: [
            {
                title: '五颗星海鲜烤肉自助餐厅',
                subTitle: '[八佰伴]海鲜自助晚餐',
                price: '119',
                prePrice: '129',
                sale: '33215',
                image: require('../../assets/home/common-scroll_food.jpg')
            },
            {
                title: '五颗星海鲜烤肉自助餐厅',
                subTitle: '[八佰伴]海鲜自助晚餐',
                price: '119',
                prePrice: '129',
                sale: '33215',
                image: require('../../assets/home/common-scroll_food.jpg')
            },
            {
                title: '五颗星海鲜烤肉自助餐厅',
                subTitle: '[八佰伴]海鲜自助晚餐',
                price: '119',
                prePrice: '129',
                sale: '33215',
                image: require('../../assets/home/common-scroll_food.jpg')
            },
            {
                title: '五颗星海鲜烤肉自助餐厅',
                subTitle: '[八佰伴]海鲜自助晚餐',
                price: '119',
                prePrice: '129',
                sale: '33215',
                image: require('../../assets/home/common-scroll_food.jpg')
            },
            {
                title: '五颗星海鲜烤肉自助餐厅',
                subTitle: '[八佰伴]海鲜自助晚餐',
                price: '119',
                prePrice: '129',
                sale: '33215',
                image: require('../../assets/home/common-scroll_food.jpg')
            },
            {
                title: '五颗星海鲜烤肉自助餐厅',
                subTitle: '[八佰伴]海鲜自助晚餐',
                price: '119',
                prePrice: '129',
                sale: '33215',
                image: require('../../assets/home/common-scroll_food.jpg')
            },
            {
                title: '五颗星海鲜烤肉自助餐厅',
                subTitle: '[八佰伴]海鲜自助晚餐',
                price: '119',
                prePrice: '129',
                sale: '33215',
                image: require('../../assets/home/common-scroll_food.jpg')
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

    _renderFoods = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0.9}>
                <View style={styles.foodItem}>
                    <Image source={item.image} style={styles.foodImg}></Image>
                    <View style={{ flex: 1 }}>
                        <View style={styles.foodTitle}>
                            <Text>{item.title}</Text>
                        </View>
                        <View style={styles.foodSubTitle}>
                            <Text style={styles.foodSubTitleText}>{item.subTitle}</Text>
                        </View>
                        <View style={styles.foodDetail}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ marginRight: 4, fontSize: 16, color: '#F60' }}>{item.price}元</Text>
                                <Text style={{ fontSize: 12, color: '#666' }}>门市价:{item.prePrice}元</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 12, }}>已售{item.sale}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const paddingBar = getStatusBarHeight()
        return (
            <ScrollView style={{ paddingTop: paddingBar }}>
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={cols}
                    horizontal={false}
                />
                <FlatList
                    data={this.state.foods}
                    renderItem={this._renderFoods}
                    keyExtractor={(item, index) => index.toString()}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0efed',
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
    },
    foodItem: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 10
    },
    foodImg: {
        width: 70,
        height: 70,
        marginRight: 6,
    },
    foodTitle: {
        marginBottom: 5,
        fontWeight: '400',
        color: '#333'
    },
    foodSubTitle: {
        marginBottom: 12
    },
    foodSubTitleText: {
        fontSize: 12,
        color: '#666'
    },
    foodDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
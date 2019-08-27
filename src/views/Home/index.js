import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image, FlatList, Modal, TouchableHighlight } from 'react-native'
import { getStatusBarHeight, width } from '../../utils/screen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Popover from '../../components/Popover'

const cols = 4;
const vMargin = 140;
const cellWH = (width - vMargin) / cols;
const hMargin = 20;
const foodImg = require('../../assets/home/common-scroll_food.jpg');
const food = {
    title: '五颗星海鲜烤肉自助餐厅',
    subTitle: '[八佰伴]海鲜自助晚餐',
    price: '119',
    prePrice: '129',
    sale: '33215',
    image: foodImg
}
let foods = []
for (let i = 0; i < 10; i++) {
    foods.push(food)
}


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
        foods: [],
        response: {},
        refreshing: false,
        isShowPopover: false,
    }

    componentDidMount() {
        this.setState({
            foods
        })
    }

    _onRefresh = () => {
        const _this = this
        this.setState({
            refreshing: true
        })
        setTimeout(() => {
            _this.setState({
                foods,
                refreshing: false
            })
        }, 1000)
    }

    _onEndReached = () => {
        if (this.state.foods.length < 100) {
            this.setState((prevState) => {
                return { foods: [...prevState.foods, ...foods] }
            })
        }
    }

    closePopover = () => {
        this.setState({ isShowPopover: false });
    }

    _renderHeader = () => {
        return (
            <View>
                <View style={styles.header}>
                    <View style={[styles.headerContent, styles.FlexRow]}>
                        <Image source={require('../../assets/mine/avatar_default.png')} style={styles.avatarImg}></Image>
                        <TouchableOpacity style={styles.FlexRow} onPress={() => this.props.navigation.navigate('City')}>
                            <Text style={{ marginRight: 4 }}>上海</Text>
                            <Ionicons
                                name='ios-arrow-down'
                                size={16}
                                style={{ marginRight: 10 }}></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.headerSearch, styles.FlexRow]} onPress={() => this.props.navigation.navigate('Search')}>
                            <View style={{ flexDirection: 'row' }}>
                                <Ionicons
                                    name='ios-search'
                                    size={16}
                                    color='#999999'></Ionicons>
                                <Text style={{ marginLeft: 4, color: '#999999' }}>搜“美食狂欢节”抢1元秒杀</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setState({
                                isShowPopover: true
                            })
                        }}>
                            <Ionicons
                                name='ios-add'
                                size={24}></Ionicons>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={cols}
                    horizontal={false}
                    style={{ marginBottom: 20 }}
                />
            </View>
        )
    }

    _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={styles.item}>
                    <Image source={item.image} style={styles.itemImg}></Image>
                    <Text style={styles.itemText} numberOfLines={5}>{item.key}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _renderFoods = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0.9} style={styles.listItem} onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={[styles.foodItem, styles.FlexRow]}>
                    <Image source={item.image} style={styles.foodImg}></Image>
                    <View style={{ flex: 1 }}>
                        <View style={styles.foodTitle}>
                            <Text style={{ fontSize: 16 }}>{item.title}</Text>
                        </View>
                        <View style={styles.foodSubTitle}>
                            <Text style={styles.foodSubTitleText}>{item.subTitle}</Text>
                        </View>
                        <View style={[styles.foodDetail, styles.FlexRow]}>
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
        return (
            <View>
                <FlatList
                    ListHeaderComponent={this._renderHeader}
                    data={this.state.foods}
                    renderItem={this._renderFoods}
                    onRefresh={this._onRefresh}
                    onEndReached={this._onEndReached}
                    refreshing={this.state.refreshing}
                    keyExtractor={(item, index) => index.toString()}
                />
                <Popover isShowPopover={this.state.isShowPopover}>
                    <View style={styles.popover}>
                        <TouchableOpacity style={[styles.popoverItem, styles.FlexRow]} onPress={this.closePopover}>
                            <Ionicons
                                name='ios-qr-scanner'
                                size={18}
                                style={{ marginRight: 5, color: '#fff' }}></Ionicons>
                            <Text style={{ color: '#fff' }}>扫一扫</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.popoverItem, styles.FlexRow]} onPress={this.closePopover}>
                            <Ionicons
                                name='ios-airplane'
                                size={18}
                                style={{ marginRight: 8, color: '#fff' }}></Ionicons>
                            <Text style={{ color: '#fff' }}>机票</Text>
                        </TouchableOpacity>
                    </View>
                </Popover>
            </View>
        )
    }
}

const paddingBar = getStatusBarHeight()

const styles = StyleSheet.create({
    FlexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#f0efed',
        paddingVertical: 15
    },
    header: {
        paddingTop: paddingBar,
        paddingBottom: 10,
        backgroundColor: '#00d3be'
    },
    headerContent: {
        height: 40,
        paddingHorizontal: 10,
    },
    headerSearch: {
        height: 30,
        flex: 1,
        paddingLeft: 6,
        marginRight: 10,
        borderRadius: 6,
        backgroundColor: '#fff'
    },
    avatarImg: {
        width: 34,
        height: 34,
        borderRadius: 17,
        marginRight: 6,
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
        marginTop: 10,
        alignItems: 'center',
    },
    itemImg: {
        width: cellWH,
        height: cellWH,
        borderRadius: 5
    },
    itemText: {
        marginTop: 8,
        textAlign: 'center',
        fontSize: 13
    },
    listItem: {
        paddingLeft: 10,
    },
    foodItem: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderColor: '#DDD8CE'
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
        marginBottom: 14
    },
    foodSubTitleText: {
        fontSize: 12,
        color: '#666'
    },
    foodDetail: {
        justifyContent: 'space-between'
    },
    popover: {
        position: 'absolute',
        top: paddingBar + 40,
        right: 10,
        width: 100,
        backgroundColor: '#696969',
        borderRadius: 4,
    },
    popoverItem: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 0.2,
        borderColor: '#fff'
    },
})
import React from 'react';
import { Modal, View } from 'react-native';

export default class Popover extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowPopover: this.props.isShowPopover
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isShowPopover !== prevState.isShowPopover) {
            return {
                isShowPopover: nextProps.isShowPopover
            }
        }
        return null
    }

    render() {
        return (
            <View>
                <Modal
                    animationType='fade'
                    visible={this.state.isShowPopover}
                    transparent={true}>
                    {this.props.children}
                </Modal>
            </View>
        )
    }
}
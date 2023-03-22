import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Image
} from 'react-native';
import { launchCamera, launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';

export default function Camera() {

    const [avatarSource, setAvatarSource] = useState<any[]>([]);

    const tackPhoto = () => {
        launchCamera({
            mediaType: "photo",
            cameraType: "back"
        }, (res: ImagePickerResponse) => {
            if (res && res.assets && Array.isArray(res.assets)) {
                setAvatarSource(val => [...val, res.assets?.[0]])
            }
        })
    }

    const addPhoto = () => {
        launchImageLibrary({
            mediaType: "photo",
            selectionLimit: 0,
            includeBase64: true
        }, (res: ImagePickerResponse) => {
            if (res && res.assets && Array.isArray(res.assets)) {
                setAvatarSource(val => [...val, res.assets?.[0]])
            }
        })
    }

    return (
        <View style={styles.container}>
            {
                avatarSource.map((item, index) => (
                    <Image key={index} source={{ uri: item.uri }} style={{ width: 200, height: 200 }}></Image>
                ))
            }
            <Button title="摄像头" onPress={() => tackPhoto()}></Button>
            <Button title="图片" onPress={() => addPhoto()}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
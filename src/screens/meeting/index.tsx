import React, { useRef, useState, useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
// 导入声网 SDK 的类
import {
    ClientRoleType,
    createAgoraRtcEngine,
    IRtcEngine,
    RtcSurfaceView,
    ChannelProfileType,
} from 'react-native-agora';
import { width as fullWidth, height as fullHeight, agoraParams } from '@/utils';

const { appId, token, channelName, uid } = agoraParams;

type Props = {};

const Meeting = (props: Props) => {

    const agoraEngineRef = useRef<IRtcEngine>(); // IRtcEngine 实例
    const [isJoined, setIsJoined] = useState(false); // 本地用户是否已加入频道
    const [remoteUid, setRemoteUid] = useState(0); // 远端用户的 Uid
    const [message, setMessage] = useState(''); // 用户提示信息

    useEffect(() => {
        try {
            agoraEngineRef.current = createAgoraRtcEngine();
            const agoraEngine = agoraEngineRef.current;
            // 初始化引擎
            agoraEngine.initialize({
                appId: appId,
            });
            // 注册回调事件
            agoraEngine.registerEventHandler({
                onJoinChannelSuccess: () => {
                    showMessage('成功加入频道：' + channelName);
                    setIsJoined(true);
                },
                onUserJoined: (_connection, Uid) => {
                    console.log('远端用户 ' + Uid + ' 已加入');
                    setRemoteUid(Uid);
                },
                onUserOffline: (_connection, Uid) => {
                    showMessage('远端用户 ' + Uid + '已离开频道');
                    setRemoteUid(0);
                },
            });
            // 开启本地视频
            agoraEngine.enableVideo();
        } catch (e) {
            console.log(e);
        }
    }, []);

    const showMessage = (msg: string) => {
        setMessage(msg);
    }

    // 定义点击加入频道按钮后调用的 join 方法 
    const join = () => {
        try {
            if (isJoined) {
                return;
            }
            // 加入频道后设置频道场景类型为 ChannelProfileCommunication
            agoraEngineRef.current?.setChannelProfile(
                ChannelProfileType.ChannelProfileCommunication,
            );
            // 开启预览
            agoraEngineRef.current?.startPreview();
            // 调用 joinChannel 方法加入频道
            agoraEngineRef.current?.joinChannel(token, channelName, uid, {
                // 设置用户角色为主播 
                clientRoleType: ClientRoleType.ClientRoleBroadcaster,
            });
        } catch (e) {
            console.log(e);
        }
    };

    // 定义点击离开频道按钮后调用的 leave 方法 
    const leave = () => {
        try {
            // 调用 leaveChannel 方法离开频道
            agoraEngineRef.current?.leaveChannel();
            setRemoteUid(0);
            setIsJoined(false);
            showMessage('已离开频道');
        } catch (e) {
            console.log(e);
        }
    };

    console.log(444444, isJoined, remoteUid);

    return (
        <View style={styles.main}>
            {/* <View style={styles.btnContainer}>
                
            </View> */}
            {
                !isJoined ? (
                    <TouchableHighlight style={styles.touchBtn} onPress={() => join()}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>视频</Text>
                        </View>
                    </TouchableHighlight>
                ) : (
                    <TouchableHighlight style={styles.touchBtn} onPress={() => leave()}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>离开</Text>
                        </View>
                    </TouchableHighlight>
                )
            }
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContainer}>
                {isJoined && (
                    <React.Fragment key={0}>
                        <RtcSurfaceView canvas={{ uid: 0 }} style={styles.videoView} />
                        {/* <Text>本地用户 uid: {uid}</Text> */}
                    </React.Fragment>
                )}
                {isJoined && remoteUid !== 0 && (
                    <React.Fragment key={remoteUid}>
                        <RtcSurfaceView
                            canvas={{ uid: remoteUid }}
                            style={styles.videoViewRemote}
                        />
                        {/* <Text>远端用户 uid: {remoteUid}</Text> */}
                    </React.Fragment>
                )}
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    main: {
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        width: fullWidth,
        height: fullHeight
    },
    touchBtn: {
        marginTop: fullHeight - 80,
        zIndex: 999
    },
    button: {
        paddingHorizontal: 25,
        paddingVertical: 14,
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#1677ff',
        margin: 5,
        zIndex: 1
    },
    buttonText: {
        color: '#ffffff',
    },
    scroll: {
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 1,
        width: '100%',
        height: '100%'
    },
    scrollContainer: {
        alignItems: 'center'
    },
    videoView: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: fullWidth,
        height: fullHeight
    },
    videoViewRemote: {
        position: 'absolute',
        top: 40,
        right: 20,
        width: 140,
        height: 200,
        zIndex: 998
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    head: { fontSize: 20 },
    info: { backgroundColor: '#ffffe0', color: '#0000ff' }
});

export default Meeting;
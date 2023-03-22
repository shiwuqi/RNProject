import React, { useRef, useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
// 导入声网 SDK 的类
import {
    ClientRoleType,
    createAgoraRtcEngine,
    IRtcEngine,
    RtcSurfaceView,
    ChannelProfileType,
} from 'react-native-agora';

const appId: string = 'f3098418ac0a4610ba69339534a228aa';
const token: string = '007eJxTYOh3yDma7ZjTZvUp//iHG82SmV/7fp7akSPA1+S68/dTW3cFhjRjA0sLE0OLxGSDRBMzQ4OkRDNLY2NLU2OTRCMji8RE3xaulIZARoblmd9ZGBkgEMRnZSjOyCzMZGAAAMglILI='
const channelName = 'shiqi'
const uid = 0; // 本地用户 Uid，无需修改

type Props = {};

const Login = (props: Props) => {

    const agoraEngineRef = useRef<IRtcEngine>(); // IRtcEngine 实例
    const [isJoined, setIsJoined] = useState(false); // 本地用户是否已加入频道
    const [remoteUid, setRemoteUid] = useState(0); // 远端用户的 Uid
    const [message, setMessage] = useState(''); // 用户提示信息

    useEffect(() => {
        try {
            agoraEngineRef.current = createAgoraRtcEngine();
            const agoraEngine = agoraEngineRef.current;

            // 注册回调事件
            agoraEngine.registerEventHandler({
                onJoinChannelSuccess: () => {
                    showMessage('成功加入频道：' + channelName);
                    setIsJoined(true);
                },
                onUserJoined: (_connection, Uid) => {
                    showMessage('远端用户 ' + Uid + ' 已加入');
                    setRemoteUid(Uid);
                },
                onUserOffline: (_connection, Uid) => {
                    showMessage('远端用户 ' + Uid + '已离开频道');
                    setRemoteUid(0);
                },
            });
            // 初始化引擎
            agoraEngine.initialize({
                appId: appId,
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

    return (
        <SafeAreaView style={styles.main}>
            <Text style={styles.head}>声网视频通话快速开始</Text>
            <View style={styles.btnContainer}>
                <Text onPress={() => join()} style={styles.button}>
                    加入频道
                </Text>
                <Text onPress={() => leave()} style={styles.button}>
                    离开频道
                </Text>
            </View>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContainer}>
                {isJoined ? (
                    <React.Fragment key={0}>
                        <RtcSurfaceView canvas={{ uid: 0 }} style={styles.videoView} />
                        <Text>本地用户 uid: {uid}</Text>
                    </React.Fragment>
                ) : (
                    <Text>加入一个频道</Text>
                )}
                {isJoined && remoteUid !== 0 ? (
                    <React.Fragment key={remoteUid}>
                        <RtcSurfaceView
                            canvas={{ uid: remoteUid }}
                            style={styles.videoView}
                        />
                        <Text>远端用户 uid: {remoteUid}</Text>
                    </React.Fragment>
                ) : (
                    <Text>等待远端用户加入</Text>
                )}
                <Text style={styles.info}>{message}</Text>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 25,
        paddingVertical: 4,
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#0055cc',
        margin: 5,
    },
    main: { flex: 1, alignItems: 'center' },
    scroll: { flex: 1, backgroundColor: '#ddeeff', width: '100%' },
    scrollContainer: { alignItems: 'center' },
    videoView: { width: '90%', height: 200 },
    btnContainer: { flexDirection: 'row', justifyContent: 'center' },
    head: { fontSize: 20 },
    info: { backgroundColor: '#ffffe0', color: '#0000ff' }
});

export default Login;
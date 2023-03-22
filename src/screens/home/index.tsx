import {
    StyleSheet,
    View,
    Button,
} from 'react-native';
import { NavigateToRoute } from '@/router';

export default function Home() {

    return (
        <View style={styles.container}>
            <Button title="视频通话" onPress={() => NavigateToRoute('Meeting')}></Button>
            <Button title="相册" onPress={() => NavigateToRoute('Camera')}></Button>
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
    touchback: {
        marginTop: 200,
        marginBottom: 200
    }
});
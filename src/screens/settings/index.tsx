import { View, Text, StyleSheet } from 'react-native';

const Settings = () => {

    return (
        <View style={styles.container}>
            <Text>settings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export default Settings;
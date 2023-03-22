import { View, Text, StyleSheet } from 'react-native';

const User = () => {

    return (
        <View style={styles.container}>
            <Text>user</Text>
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

export default User;
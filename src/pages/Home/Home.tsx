import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

interface Props {
    logout: () => void;
}

const Home: React.FunctionComponent<Props> = ({ logout }: Props) => (
    <View style={styles.header}>
        <Text style={styles.title}>Hello World</Text>
        <TouchableHighlight onPress={() => logout()}>
            <Image style={styles.logoutIcon} source={require('../../icons/logout.png')} />
        </TouchableHighlight>
    </View>
);

const styles = StyleSheet.create({
    title: {
        fontSize: 25
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logoutIcon: {
        width: 30,
        height: 30,
    }
})

export default Home;
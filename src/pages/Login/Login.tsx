import React, { useState } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements';

interface Props {
    isLoading: boolean;
    loginRequest: (email: string, password: string) => void;
    errorMessage: string | null;
}

const Login: React.FunctionComponent<Props> = ({ isLoading, loginRequest, errorMessage }: Props) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return (
        <View>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}}
                />
            </View>
            <Text style={styles.title}>🔒 Login to your account</Text>
            <Text style={styles.error}>{errorMessage}</Text>
            <TextInput
                style={styles.textInput}
                mode='outlined'
                autoCompleteType='email'
                autoCapitalize='none'
                label='email'
                value={userEmail}
                onChangeText={text => setUserEmail(text)}
                theme={{ colors: { primary:'green', background: 'white' } }}
            />
            <TextInput
                style={styles.textInput}
                label='password'
                mode='outlined'
                autoCompleteType='password'
                secureTextEntry={true}
                value={userPassword}
                onChangeText={text => setUserPassword(text)}
                theme={{ colors: { primary:'green', background: 'white' } }}
            />
            <Button
                title='Submit'
                type='clear'
                onPress={() => loginRequest(userEmail, userPassword)}
                loading={isLoading}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        marginVertical: 30
    },
    textInput: {
        marginBottom: 5
    },
    error: {
        color: 'red'
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default Login;

import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {authorize} from 'react-native-app-auth';

const config = {
  issuer:
    'https://devsbxopsportal.b2clogin.com/devsbxopsportal.onmicrosoft.com/b2c_1a_signin/oauth2/v2.0',
  clientId: '038c7925-5c48-4bba-b90a-c31c92450e72',
  redirectUrl: 'msauth://com.contentactive/VzSiQcXRmi2kyjzcA%2BmYLEtbGVs%3D',
  scopes: ['openid', 'profile'],
  serviceConfiguration: {
    authorizationEndpoint:
      'https://devsbxopsportal.b2clogin.com/devsbxopsportal.onmicrosoft.com/b2c_1a_signin/oauth2/v2.0/authorize',
    tokenEndpoint:
      'https://devSbxOpsPortal.b2clogin.com/devSbxOpsPortal.onmicrosoft.com/b2c_1a_signin/oauth2/v2.0/token',
  },
  additionalParameters: {
    login_hint: 'carrier.user7@yopmail.com ',
  },
};

export default function AzurAuth() {
  const [email, setEmail] = useState('');
  const configAuth = async () => {
    try {
      const result = await authorize({
        ...config,
        additionalParameters: {
          ...config.additionalParameters,
          login_hint: email,
        },
      });
      console.log('result', result);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View>
      <Text>LOG IN AzurAuth</Text>
      <TextInput
        // value={email}
        value={email}
        onChangeText={vel => {
          console.log(vel);
          setEmail(vel);
        }}
        placeholder="Enter your email"
      />
      <TouchableOpacity
        style={{backgroundColor: 'skyblue', padding: 30}}
        onPress={() => {
          configAuth();
        }}>
        <Text>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {authorize} from 'react-native-app-auth';

const config = {
  issuer: 'https://dev-62712734.okta.com/oauth2/default/',
  clientId: '0oaa2sql8epY2j5m95d7',
  redirectUrl: 'com.okta.dev-62712734:/rndproject',
  scopes: ['openid', 'profile', 'email', 'offline_access'],
};

// const config = {
//   clientId: '038c7925-5c48-4bba-b90a-c31c92450e72',
//   issuer: 'https://sbx-operations-portal-user-web-dev.azurewebsites.net',
//   redirectUrl: 'com.rndproject://auth', // The custom redirect URI you set during app registration
//   scopes: ['openid', 'profile', 'offline_access', 'User.Read'], // The required scopes for your app
//   serviceConfiguration: {
//     authorizationEndpoint:
//       'https://sbx-operations-portal-user-web-dev.azurewebsites.net/',
//     tokenEndpoint:
//       'https://login.microsoftonline.com/8d39714f-717f-4024-8729-5e34372b5daa/oauth2/v2.0/token',
//   },
//   clientSecret: 'Z_88Q~kK6r69vyaRrfKa3nfy9McsKfiEDeDkicgm', // Optional, only include if required by your app
// };

export default function AzurAuth() {
  const configAuth = async () => {
    try {
      const result = await authorize(config);
      console.log('result', result);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    configAuth();
  }, []);
  return (
    <View>
      <Text>AzurAuth</Text>
    </View>
  );
}

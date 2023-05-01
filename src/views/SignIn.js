import React from 'react';
import { View, Text, Button } from 'react-native';

export const SignIn = ({ navigation }) => {


  return (
    <View>
      <Text>Sign In screen here</Text>

      <Button
        title="Sign up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title="Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
}


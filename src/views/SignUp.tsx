import React from 'react';
import {View, Text, Button} from 'react-native';

export const SignUp = ({ navigation }) => {

  return (
    <View>
      <Text>Sign Up screen here</Text>

      <Button
        title="Sign In"
        onPress={() => navigation.navigate('SignIn')}
      />
      <Button
        title="Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
}

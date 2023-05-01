import React from 'react';
import {View, Text, Button} from 'react-native';

export const Dashboard = ({ navigation }) => {


  return (
    <View>
      <Text>Dashboard screen here</Text>

      <Button
        title="Sign up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title="Sign in"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
}

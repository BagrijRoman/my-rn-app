import React from 'react';
import {View, Text, Button} from 'react-native';

export const Dashboard = ({ navigation }) => {


  return (
    <View>
      <Text>Dashboard screen here</Text>

      <Button
        title="Log out"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
}

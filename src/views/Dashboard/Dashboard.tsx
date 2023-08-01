import React, { useCallback } from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from "react-redux";

import { logout as logoutAction } from '../../redux/User/actions';

export const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch(logoutAction());
    navigation.navigate('SignIn');
  }, []);

  return (
    <View>
      <Text>Dashboard screen here</Text>

      <Button
        title="Log out"
        onPress={logout}
      />
    </View>
  );
}

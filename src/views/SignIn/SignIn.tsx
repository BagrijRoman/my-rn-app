import React, { useState, useCallback } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import { TextInput, Button  } from '../../components';

import { Notificator } from '../../helpers/Notificator';
import { validateEmail } from '../../utils';
import { colors } from '../../styles/colors';
import { loginAction } from '../../redux/User/actions'


const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: colors.rootPageBackGround,
  },
  formContainer: {
    width: 300,
    alignItems: "stretch",
  },
  btnContainer: {
    alignItems: "center",
  },
});

// todo input and button as a separate components

export const SignIn = ({ navigation }) => {
  const [email, setEmail]  = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, loggedIn } = useSelector(({ user }) => user);

  const onLogInClick = useCallback(() => {
    if (!email) {
      Notificator.error('Email is required');
    } else if (!validateEmail(email)) {
      Notificator.error('Invalid email provided');
    } else if (password.length <=5) {
      Notificator.error('Password is too short');
    } else {
      dispatch(loginAction({ email, password }));
    }
  }, [email, password]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.formContainer}>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button
          onPress={onLogInClick}
          text="Log In"
          loading={loading}
        />
      </View>
    </View>
  );
}


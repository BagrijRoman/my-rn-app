import React, { useState, useCallback, useEffect } from 'react';
import {Pressable, View, Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import { screens } from '../../constants';
import { TextInput, Button  } from '../../components';
import { Notificator } from '../../helpers/Notificator';
import { validateEmail } from '../../utils';
import { loginAction } from '../../redux/User/actions';
import { styles } from './sIgnInStyles';

export const SignIn = ({ navigation }) => {
  const [email, setEmail]  = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, user } = useSelector(({ user }) => user);

  useEffect(() => {
    if (user) {
      navigation.navigate(screens.DASHBOARD);
    }
  }, [user]);

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

  const navigateToSignUp = useCallback(() => {
    navigation.navigate(screens.SIGN_UP);
  }, []);

  const navigateToForgotPassword = useCallback(() => {
    navigation.navigate(screens.FORGOT_PASSWORD);
  }, []);

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
          style={styles.loginBtn}
        />
        <View style={styles.clickableTextContainer}>
          <Pressable onPress={navigateToSignUp}>
            <Text style={styles.clickableText}>Sign Up</Text>
          </Pressable>
        </View>
        <View style={styles.clickableTextContainer}>
          <Pressable onPress={navigateToForgotPassword}>
            <Text style={styles.clickableText}>Forgot password?</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

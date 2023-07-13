import React, { useState, useCallback } from 'react';
import {View, StyleSheet, Text} from 'react-native';

import { TextInput, Button  } from '../../components';

import { Notificator } from '../../helpers/Notificator';
import { validateEmail } from '../../utils';
import { colors } from '../../styles/colors';



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
  const [ email, setEmail ]  = useState('');
  const [ password, setPassword] = useState('');

  const onLogInClick = useCallback(() => {

    console.log('email : ', email);
    console.log(validateEmail(email));

    if (!email) {
      Notificator.error('Email is required');
    } else if (!validateEmail(email)) {
      Notificator.error('Invalid email provided');
    } else if (password.length <=5) {
      Notificator.error('Password is too short');
    }

    console.log('email ', email);
    console.log('password ', password);
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
        >
          <Text>
            Log In
          </Text>
        </Button>
      </View>
    </View>
  );
}


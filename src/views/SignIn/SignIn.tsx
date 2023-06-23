import React, { useState, useCallback } from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import { TextInput } from '../../components';

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
  button: {
    borderRadius: 8,
    backgroundColor: '#DDDDDD',
    padding: 10,
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

    if (validateEmail(email)) {

    } else if (password.length <=5) {

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
        <TouchableOpacity
          onPress={onLogInClick}
          style={styles.button}
        >
          <Text>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


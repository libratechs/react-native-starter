// SignIn.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  AsyncStorage
} from "react-native";

import Snaplist from "./Snaplist";

import { goHome } from "./navigation";
import { USER_KEY } from "./config";

import { Mutation } from "react-apollo";

import { SIGNIN_USER } from "./queries";

const initialState = {
  username: "",
  password: ""
};

export default class SignIn extends React.Component {
  state = {
    ...initialState
  };
  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };
  signIn = async () => {
    const { username, password } = this.state;
    try {
      // login with provider
      const user = await AsyncStorage.setItem(USER_KEY, username);
      console.log("user successfully signed in!", user);
      goHome();
    } catch (err) {
      console.log("error:", err);
    }
  };
  onSubmit = async (e, signinUser) => {
    e.preventDefault();
    try {
      signinUser()
        .then(async ({ data }) => {
          console.log(data);
          await AsyncStorage.setItem("token", data.signIn.token);
          //  await this.props.refetch();

          console.log(data);
          goHome();
        })
        .catch(e => {
          window.alert(e);
        });
    } catch (err) {
      window.alert(err);
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <Mutation mutation={SIGNIN_USER} variables={{ username, password }}>
        {(signinUser, { loading, error }) => (
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="white"
              onChangeText={val => this.onChangeText("username", val)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              placeholderTextColor="white"
              onChangeText={val => this.onChangeText("password", val)}
            />

            <Button
              title="Sign In"
              onPress={e => {
                this.onSubmit(e, signinUser);
              }}
            />

            {loading && <Text>loading...</Text>}
            {error && <Text>error...</Text>}

            <Snaplist />
          </View>
        )}
      </Mutation>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    fontSize: 18,
    fontWeight: "500",
    height: 55,
    backgroundColor: "#42A5F5",
    margin: 10,
    color: "white",
    padding: 8,
    borderRadius: 14
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

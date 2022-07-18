import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function AuthForm({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    const user = data; //TODO: request to endpoint
    navigation.navigate("WebViewScreen", { user });
  };

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="login"
          />
        )}
        name="login"
      />
      {errors.login && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          //TODO: any requirements
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="password"
          />
        )}
        name="password"
      />
      {errors.password && <Text>This is required.</Text>}

      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    width: 200,
    borderWidth: 1,
    borderColor: "#000",
  },
});

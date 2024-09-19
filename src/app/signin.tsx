import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Lottie from "lottie-react-native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import Modal from "react-native-modal";

import { Button } from "../ui";
import { ControlledInput } from "../ui/form"; // Your existing ControlledInput component

import { CircleX, GoogleIcon, Xback } from "~/assets/icons";
import { Text, useTheme } from "~/theme";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignIn = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const theme = useTheme();
  const router = useRouter();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // variables
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch, // allows us to "watch" the value of a field
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  // Watch the password field to validate the confirm password field
  const password = watch("password");

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text variant="title" style={styles.header}>
            Sign In to your account
          </Text>
          <Text variant="subtitle" style={styles.subHeader}>
            Welcome back! Please sing in with
          </Text>
        </View>

        <View style={styles.formView}>
          {/* Email Field */}
          <ControlledInput
            name="email"
            control={control}
            shadow
            label="Email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Please enter a valid email address",
              },
            }}
            placeholder="email@example.com"
            keyboardType="email-address"
          />
          {errors.email && (
            <Text style={{ color: "red", marginBottom: 10 }}>
              {errors.email.message}
            </Text>
          )}
        </View>

        <View style={styles.formView}>
          {/* Password Field */}
          <ControlledInput
            name="password"
            control={control}
            shadow
            label="Password"
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            }}
            placeholder="Your password"
            type="password"
          />
          {errors.password && (
            <Text style={{ color: "red", marginBottom: 10 }}>
              {errors.password.message}
            </Text>
          )}
          <Button
            variant="link"
            size="sm"
            style={{ alignSelf: "flex-end" }}
            label="Forgot Password"
            fontFamily="AeonikMedium"
            onPress={() => router.push("/forget-password")}
          />
        </View>

        <View style={{ marginVertical: 24 }}>
          {/* Submit Button */}
          {/* <Button label="Create account" onPress={handleSubmit(onSubmit)} /> */}
          <Button label="Sign In" onPress={toggleModal} />
        </View>

        {/* Divider with OR */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.divider} />
        </View>

        <View style={{ marginVertical: 24 }}>
          {/* google sign up */}
          <Button
            variant="outline"
            icon={<GoogleIcon />}
            label="Sign in with Google"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              onPress={() => router.replace("/signup")}
              variant="link"
              label="Don't have an account?"
              style={{ borderWidth: 0 }}
              fontFamily="AeonikMedium"
            />
            <Text
              style={{
                color: theme.colors.primary,
                fontFamily: "AeonikMedium",
                height: 20,
              }}
            >
              {" "}
              Sign up
            </Text>
          </View>
        </View>
        <Modal isVisible={isModalVisible}>
          <View
            style={{
              marginTop: "25%",
              backgroundColor: theme.colors.white,
              padding: 16,
              borderRadius: 16,
            }}
          >
            <View
              style={{
                alignSelf: "flex-end",
              }}
            >
              <Pressable onPress={toggleModal}>
                <CircleX />
              </Pressable>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Lottie
                style={styles.lottie}
                source={require("../../assets/animations/green-tick.json")}
                autoPlay
                loop
              />
            </View>

            <Text
              variant="normal_bold"
              style={{ textAlign: "center", paddingVertical: 16 }}
            >
              Your account sign in was successful
            </Text>

            <Button label="Proceed to dashboard" onPress={toggleModal} />
          </View>
        </Modal>
      </ScrollView>
      <StatusBar backgroundColor={isModalVisible ? "#000000B3" : "white"} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    textAlign: "center",
    paddingBottom: 8,
    paddingTop: 26,
  },
  subHeader: {
    textAlign: "center",
    marginBottom: 24,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#D2D2D2",
  },
  orText: {
    marginHorizontal: 10,
    color: "#686868",
    fontWeight: "bold",
  },

  formView: {
    marginBottom: 16,
  },
  sheetContainer: {
    // add horizontal space
    marginHorizontal: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  lottie: {
    width: 120,
    height: 120,
  },
});
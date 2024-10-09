import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";

import { PlayIcon } from "~/assets/icons";
import { course } from "~/assets/images";
import { Button, ScreenHeader } from "~/src/ui";
import { Text, theme } from "~/theme";

type Props = object;

const ModuleDetails = (props: Props) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const router = useRouter();
  // Handle button click
  const handleButtonClick = () => {
    if (isCompleted) {
      router.replace("/(learner)/module"); // Replace "NextScreen" with your target screen name
    } else {
      setIsCompleted(true);
    }
  };
  return (
    <View style={styles.container}>
      <ScreenHeader bg title="Course module" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Container to handle layout */}
        <View style={styles.contentWrapper}>
          <View style={styles.content}>
            {/* Breadcrumb Section */}
            <Text style={styles.breadcrumb} variant="md">
              Module 1 {">"} Introduction to UI/UX design {">"} Understanding
              UI/UX design principles
            </Text>

            {/* Image with Play Button */}
            <View style={styles.imageContainer}>
              <View style={styles.overlay} />
              <Pressable
                onPress={() => console.log("play button clicked")}
                style={styles.playIconWrapper}
              >
                <PlayIcon />
              </Pressable>
              <Image style={styles.image} source={course} />
            </View>

            {/* Notes Section */}
            <View style={styles.notesContainer}>
              <Text variant="subtitle">Notes</Text>
              <Text style={styles.notesText}>
                Welcome to our UI/UX Design course! This comprehensive program
                will take you through various aspects of designing engaging user
                interfaces...
              </Text>
              {/* Repeat text to make scrollable */}
              <Text style={styles.notesText}>
                Welcome to our UI/UX Design course! This comprehensive program
                will take you through various aspects of designing engaging user
                interfaces...
              </Text>
              <Text style={styles.notesText}>
                Welcome to our UI/UX Design course! This comprehensive program
                will take you through various aspects of designing engaging user
                interfaces...
              </Text>
              <Text style={styles.notesText}>
                Welcome to our UI/UX Design course! This comprehensive program
                will take you through various aspects of designing engaging user
                interfaces...
              </Text>
              <Text style={styles.notesText}>
                Welcome to our UI/UX Design course! This comprehensive program
                will take you through various aspects of designing engaging user
                interfaces...
              </Text>
            </View>
          </View>

          {/* Button at the bottom */}
          <View style={styles.buttonContainer}>
            <Button
              label={isCompleted ? "Proceed" : "Mark as completed"}
              onPress={handleButtonClick}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ModuleDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 16, // To prevent content being cut off
  },
  contentWrapper: {
    flex: 1,
    justifyContent: "space-between", // Pushes content to the top and button to the bottom
    padding: 16,
  },
  content: {
    flexShrink: 1,
  },
  breadcrumb: {
    color: theme.colors.black,
    paddingBottom: 16,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    position: "relative",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 5,
  },
  playIconWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -12 }, { translateY: -12 }],
    zIndex: 10,
  },
  notesContainer: {
    paddingTop: 16,
  },
  notesText: {
    paddingTop: 8,
  },
  buttonContainer: {
    marginTop: 16,
  },
});
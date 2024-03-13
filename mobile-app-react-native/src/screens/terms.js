import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export const TermsConditions = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.introText}>
          Welcome to NITAFUTIE! Before you dive into exploring the exciting
          world of real estate on our platform, please take a moment to read and
          understand our terms and conditions. By accessing or using our
          website, you agree to comply with and be bound by the following
          terms. If you do not agree with these terms, please refrain from using
          our website.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
        <Text style={styles.sectionText}>
          By using our website, you acknowledge that you have read, understood,
          and agree to be bound by these terms and conditions. We reserve the
          right to update, modify, or change these terms at any time without
          prior notice. It is your responsibility to check this page
          periodically for changes.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. User Registration</Text>
        <Text style={styles.sectionText}>
          To access certain features of our website, you may be required to
          register an account. You agree to provide accurate, current, and
          complete information during the registration process and to update
          such information to keep it accurate, current, and complete. You are
          responsible for maintaining the confidentiality of your account and
          password and for restricting access to your computer.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Content</Text>
        <Text style={styles.sectionText}>
          All content on this website, including but not limited to text,
          images, graphics, and logos, is the property of NITAFUTIE and is
          protected by copyright laws. You may not reproduce, distribute,
          display, or create derivative works from any of the content without
          our prior written permission.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Listing and Property Information</Text>
        <Text style={styles.sectionText}>
          While we strive to provide accurate and up-to-date information, we do
          not guarantee the accuracy, completeness, or reliability of any
          property listings or other information on our website. Users are
          advised to independently verify the information provided before making
          any decisions based on it.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. User Conduct</Text>
        <Text style={styles.sectionText}>
          You agree not to use the website for any unlawful or prohibited
          purpose. This includes, but is not limited to, transmitting any
          harmful, threatening, abusive, harassing, defamatory, vulgar, obscene,
          or otherwise objectionable material.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  introText: {
    marginBottom: 10,
    fontSize: 15,
  },
  sectionTitle: {
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 15,
  },
});



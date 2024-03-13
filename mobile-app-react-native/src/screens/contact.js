import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Contact = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/header.jpg")}
        style={styles.headerImage}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>Wasiliana nasi Kupitia namba</Text>

        <View style={styles.contactRow}>
          <TouchableOpacity>
            <View style={styles.contactItem}>
              <Image
                style={styles.icon}
                source={require("../../assets/iconVodacom.png")}
              />
              <Text style={styles.phoneNumber}>0746815931</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.contactItem}>
              <Image
                style={styles.icon}
                source={require("../../assets/tigo2.png")}
              />
              <Text style={styles.phoneNumber}>0715603709</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.contactItem}>
              <Image
                style={styles.icon}
                source={require("../../assets/airtel.png")}
              />
              <Text style={styles.phoneNumber}>0788244888</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    width: "100%",
    height: 250,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 5,
  },
  contentContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 50,
  },
  contactRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  contactItem: {
    alignItems: "center",
    marginHorizontal: 20,
    fontSize: 20,
  },
  icon: {
    height: 90,
    width: 90,
    borderRadius: 20,
  },
  phoneNumber: {
    marginTop: 5,
  },
});

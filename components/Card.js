import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ data, getUser }) => {
  const { cell, dob, email, location, name, registered } = data || {};
  return (
    <View style={styles.card}>
      <Text style={styles.title}>User Details</Text>
      <Text style={styles.text}>Name: {name?.first}</Text>
      <Text style={styles.text}>Email: {email}</Text>
      <Text style={styles.text}>Cell: {cell}</Text>
      <Text style={styles.text}>Location: {location?.city}</Text>
      <Text style={styles.text}>DOB: {dob?.date}</Text>
      <Text style={styles.text}>Registered: {registered?.date}</Text>
      <Text style={styles.button} onPress={getUser}>
        Get User
      </Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});

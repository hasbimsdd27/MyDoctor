import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors} from '../../../utils';

export default function Input({label}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 12,
  },
  label: {
    fontSize: 16,
    color: Colors.text.secondary,
    marginBottom: 6,
    fontFamily: 'Nunito-Reguler',
  },
});

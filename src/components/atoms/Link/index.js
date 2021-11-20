import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../utils';

export default function Link({title, size, align}) {
  return (
    <View>
      <Text style={styles.text(size, align)}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    fontFamily: 'Nunito-Regular',
    color: Colors.text.secondary,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});

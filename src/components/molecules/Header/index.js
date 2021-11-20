import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Button} from '../../atoms';
import {Colors} from '../../../utils';

export default function Header({onPress, title}) {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
    color: Colors.text.primary,
    fontSize: 20,
  },
});

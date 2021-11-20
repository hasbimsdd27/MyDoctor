import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Header, Input, Gap} from '../../components';
import {Colors} from '../../utils';

export default function Register({navigation}) {
  return (
    <ScrollView style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button title="Continue" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0,
  },
  page: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});

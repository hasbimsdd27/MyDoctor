import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button, Gap} from '../../components';
import {Colors} from '../../utils';

export default function GetStarted({navigation}) {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title={'Get Started'}
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          title={'Sign In'}
          type={'secondary'}
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    flex: 1,
  },
  title: {
    fontSize: 28,
    color: Colors.white,
    marginTop: 91,
    fontFamily: 'Nonito-SemiBold',
    maxWidth: 234,
  },
});

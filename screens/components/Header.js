import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import IconFont from 'react-native-vector-icons/dist/FontAwesome';
import IconIo from 'react-native-vector-icons/dist/Ionicons';
import {Actions} from 'react-native-router-flux';

import Action from './Action';
const Header = () => {
  return (
    <View style={styles.header} backgroundColor="#47A000">
      <Icon name="left" style={styles.icon1} onPress={Actions.pop} />
      <Text>                      </Text>
      <IconFont name="recycle" style={styles.icon1} />
      <Text style={styles.text}>REFUN MAN            </Text>
      <Action />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 5,
    backgroundColor: '#47A000',
    flexDirection: 'row',
    fontFamily: 'Prompt-Bold',
    fontSize: 24,
    textAlign: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    padding: 9
  },
  iconContainer: {
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  icon1: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 15,
  },
  icon2: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 3,
  },
});
export default Header;

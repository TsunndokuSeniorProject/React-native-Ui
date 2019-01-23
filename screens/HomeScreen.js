import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import { NavigationBar } from '@shoutem/ui'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <NavigationBar
          centerComponent={<Title>TITLE</Title>}
        />
        <Text>
          Test
        </Text>
      </View>
    );
  }
}
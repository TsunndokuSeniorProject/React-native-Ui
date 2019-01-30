import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Camera, Permissions } from 'expo'
import BarcodeApp from '../components/BarcodeScanner'
import styled from 'styled-components'

import {
  NavigationBar,
  Title,
  Screen,
  View,
  Text,
  Button,
  Icon,
} from '@shoutem/ui';

import InsertBtn from '../components/InsertBtn'

import {inject, observer} from "mobx-react/native";

@inject('store') @observer
export default class LinksScreen extends React.Component {

  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Screen>
        <NavigationBar
          leftComponent={(
            <Button onPress={() => navigate('Insert')}>
              <Icon name="close" />
            </Button>
          )}
          styleName="inline"
          centerComponent={<Title>Result</Title>}
        />
        <Text>
          {this.props.store.Barcode}
        </Text>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

const RowInsertBtn = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
  margin-top: 10;
`;

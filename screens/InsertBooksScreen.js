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
} from '@shoutem/ui';

import InsertBtn from '../components/InsertBtn'

export default class LinksScreen extends React.Component {

  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Screen>
        <NavigationBar
          styleName="inline"
          centerComponent={<Title>Insert books</Title>}
        />
        <RowInsertBtn>
          <InsertBtn name="Test" color="red" navigate={() => navigate('ScanBarcode')}/>
          <InsertBtn name="Test" color="#845EC2" navigate={() => navigate("ScanBarcode")}/>
        </RowInsertBtn>
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

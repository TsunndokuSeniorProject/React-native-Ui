import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Camera, Permissions } from 'expo'
import BarcodeApp from '../components/BarcodeScanner'
import styled from 'styled-components'

import {
  NavigationBar,
  Title,
  Screen,
  Heading,
  Divider,
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
      <Screen styleName="paper">
        {/* <NavigationBar
          styleName="inline"
          centerComponent={<Title>Insert books</Title>}
        /> */}
        <HeadingContainer>
          <HeadingText>
            Insert book
          </HeadingText>
        </HeadingContainer>
        <RowInsertBtn>
          <InsertBtn name="Scan barcode" color="#eb5c48" navigate={() => navigate('ScanBarcode')}/>
          {/* <InsertBtn name="Search name" color="#8bc6a8" navigate={() => navigate("ScanBarcode")}/> */}
        </RowInsertBtn>
        <SubtitleContainer>
          <SubtitleText>
            History
          </SubtitleText>
        </SubtitleContainer>
      </Screen>
    );
  }
}

const RowInsertBtn = styled.View`
  flex-direction: row;
  /* justify-content: space-around; */
  flex: 0.4;
  padding-top: 25;
  margin-bottom: 10;
  margin-left: 20;
`;

const HeadingContainer = styled.View`
  margin-top: 70;
  padding-left: 20;
  padding-bottom: 15;
  border-bottom-color: #d1d1d1;
  border-bottom-width: 1;
`;

const HeadingText = styled.Text`
  font-size: 40;
  font-weight: bold;
`;

const SubtitleContainer = styled.View`
  margin-top: 70;
  padding-left: 20;
  padding-bottom: 10;
  border-bottom-color: #d1d1d1;
  border-bottom-width: 1;
`;

const SubtitleText = styled.Text`
  font-size: 15;
  font-weight: bold;
  color: #7d7d7d;
`;
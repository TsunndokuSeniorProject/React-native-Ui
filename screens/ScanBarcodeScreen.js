import React from 'react';
import { ScrollView, StyleSheet,} from 'react-native';
import { Camera, Permissions } from 'expo';
import styled from 'styled-components'
import {
  NavigationBar,
  Title,
  Screen,
  Text,
  Button,
  Icon,
  View,
} from '@shoutem/ui';
import DialogInput from 'react-native-dialog-input';
import {inject, observer} from "mobx-react/native";

import BarcodeScanner from '../components/BarcodeScanner';

@inject('store') @observer
export default class LinksScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isDialogVisible: false,
    }
  }

  showDialog(isShow){
    this.setState({isDialogVisible: isShow})
  }
  sendInput(inputText){
    this.props.store.scanCompleted(inputText)
    this.props.navigation.navigate('Result')
    this.showDialog(false)
  }

  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Screen styleName="paper">
        <NavContainer styleName="horizontal-h-start">
          <Button onPress={() => navigate('Insert')}>
            <Icon name="back" />
            <NavBtn>
              Insert book
            </NavBtn>
          </Button>
          <Button onPress={()=>{this.showDialog(true)}}>
            <Icon name="edit" />
          </Button>
          <DialogInput isDialogVisible={this.state.isDialogVisible}
            title={"Insert ISBN number"}
            hintInput ={"HINT INPUT"}
            submitInput={ (inputText) => {
              this.sendInput('0439708184')
            } }
            closeDialog={ () => {this.showDialog(false)}}>
          </DialogInput>
        </NavContainer>
        <HeadingContainer>
          <HeadingText>
            Scan barcode
          </HeadingText>
        </HeadingContainer>
        <BarcodeScanner/>
      </Screen>
    )
  }
}

const NavContainer = styled.View`
  margin-top: 40;
  flex-direction: row;
  justify-content: space-between;
`;

const NavBtn = styled.Text`
  font-size: 18;
`;

const HeadingContainer = styled.View`
  margin-top: 20;
  padding-left: 20;
  padding-bottom: 15;
  border-bottom-color: #d1d1d1;
  border-bottom-width: 1;
`;

const HeadingText = styled.Text`
  font-size: 30;
  font-weight: bold;
`;

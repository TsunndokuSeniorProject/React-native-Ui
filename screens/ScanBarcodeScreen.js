import React from 'react';
import { ScrollView, StyleSheet,} from 'react-native';
import { Camera, Permissions } from 'expo';
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

import BarcodeScanner from '../components/BarcodeScanner';

export default class LinksScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isDialogVisible: false,
    }
  }

  showDialog(isShow){
    this.setState({isDialogVisible: isShow});
  }
  sendInput(inputText){
    console.log("sendInput (DialogInput#1): "+inputText);
  }

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
              <Icon name="back" />
            </Button>
          )}
          styleName="inline"
          centerComponent={<Title>Scan ISBN</Title>}
          rightComponent={(
            <Button onPress={()=>{this.showDialog(true)}}>
              <Icon name="edit" />
            </Button>
          )}
        />
        <DialogInput isDialogVisible={this.state.isDialogVisible}
            title={"DialogInput 1"}
            message={"Message for DialogInput #1"}
            hintInput ={"HINT INPUT"}
            submitInput={ (inputText) => {this.sendInput(inputText)} }
            closeDialog={ () => {this.showDialog(false)}}>
        </DialogInput>
        <BarcodeScanner navigation={this.props.navigation}/>
      </Screen>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import {inject, observer} from "mobx-react/native";
import { withNavigation } from 'react-navigation';

@inject('store') @observer
class BarcodeScanner extends React.Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props)
    this.state = {
      hasCameraPermission: null,
    }
    console.log(this.props.navigation)
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    }

  render() {
    const { hasCameraPermission } = this.state;
    this.props.store.scanCompleted();
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`)
    this.props.store.scanCompleted(data)
    this.props.navigation.navigate('Result')
  }
}

export default withNavigation(BarcodeScanner);
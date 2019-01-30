import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import {
  NavigationBar,
  Title,
  Screen,
  Button,
  Icon,
} from '@shoutem/ui';

export default class LinksScreen extends React.Component {

  static navigationOptions = {
    header: null
  };

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <Screen>
          <NavigationBar
            leftComponent={(
              <Button onPress={() => goBack()}>
                <Icon name="back" />
              </Button>
            )}
            centerComponent={<Title>TITLE</Title>}
            share={{
              link: 'http://shoutem.github.io',
              text: 'This is the best',
              title: 'Super cool UI Toolkit',
            }}
          />
        </Screen>
      );
    }
    snap = async () => {
      if (this.camera) {
        let photo = await this.camera.takePictureAsync();
      }
    };
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

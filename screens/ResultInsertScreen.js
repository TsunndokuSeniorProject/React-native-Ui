import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, } from 'react-native'
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
  Image,
} from '@shoutem/ui';

// import {ENTRIES1,ENTRIES2} from '../static/dataCarousel'

import {inject, observer} from "mobx-react/native"

const GetFromISBN = require('../request/GetFromISBN')

@inject('store') @observer
export default class LinksScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      dataLoaded: false,
      data: [],
      sentiment: [],
      sentimentComponent: [],
    };
  }

  static navigationOptions = {
    header: null
  };

  getBookDetail(){
    return GetFromISBN.GetFromISBN(this.props.store.Barcode)
  }

  prepareSentimentComponent(){
    return this.state.sentiment.map((key, index) => {
      return (
        <View key={index}>
          <Text>
            {key.aspect}
          </Text>
          <View>
          </View>
          <Text>
            {key.negative}
          </Text>
          <Text>
            {key.positive}
          </Text>
        </View>
      )
    })
  }

  async componentDidMount() {
    const temp = await GetFromISBN.GetFromISBN(this.props.store.Barcode)
    let component = ""
    this.setState({
      data: temp,
      sentiment: temp.sentiment,
    })
    component = this.prepareSentimentComponent()
    this.setState({
      sentimentComponent: component,
      dataLoaded: true
    })
  }

  render() {
    const { navigate } = this.props.navigation
    if(this.state.dataLoaded){
      return (
        <Screen styleName="paper">
          <NavContainer styleName="horizontal-h-start">
            <Button onPress={() => navigate('Insert')}>
              <Icon name="back" />
              <NavBtn>
                Insert book
              </NavBtn>
            </Button>
          </NavContainer>
          <HeadingContainer>
            <HeadingText>
              Result
            </HeadingText>
          </HeadingContainer>
          <ScrollView>
            <BookDetailContainer styleName="space-between">
              <BookCoverImage
                source={{ uri: this.state.data.Image}}
              />
              <BookName>
                {this.state.data.Name}
              </BookName>
              <BookGenre>
                Genre : {this.state.data.Genre}
              </BookGenre>
            </BookDetailContainer> 
            <SubtitleContainer>
              <SubtitleText>
                Score
              </SubtitleText>
            </SubtitleContainer>
            {this.prepareSentimentComponent()}
          </ScrollView>
        </Screen>
      );
    }else {
      return(
        <Screen styleName="paper">
          <NavContainer styleName="horizontal-h-start">
            <Button onPress={() => navigate('Insert')}>
              <Icon name="back" />
              <NavBtn>
                Insert book
              </NavBtn>
            </Button>
          </NavContainer>
          <HeadingContainer>
            <HeadingText>
              Loading...
            </HeadingText>
          </HeadingContainer>
        </Screen>
      )
    }
  }
}
const BookDetailContainer = styled.View`
  margin-top: 10;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const BookCoverImage = styled.Image`
  height: 400;
  width: 300;
`;

const BookName = styled.Text`
  margin-top: 10;
  font-size: 30;
  font-weight: bold;
`;

const BookGenre = styled.Text`
  font-size: 15;
`;

const NavContainer = styled.View`
  margin-top: 40;
  flex-direction: row;
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

const SubtitleContainer = styled.View`
  margin-top: 20;
  padding-left: 20;
  padding-bottom: 15;
  border-bottom-color: #d1d1d1;
  border-bottom-width: 1;
`;

const SubtitleText = styled.Text`
  font-size: 15;
  font-weight: bold;
`;
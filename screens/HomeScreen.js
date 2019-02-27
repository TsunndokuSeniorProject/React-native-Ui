import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import styled from 'styled-components'

import {
  Image,
  Screen,
  NavigationBar,
  ImageBackground,
  Title,
  GridRow,
  ListView,
  Tile,
  Subtitle,
  Divider,
  Card,
  Caption,
  View,
  Button,
  Icon,
  DropDownMenu,
} from '@shoutem/ui';
import AutoHeightImage from 'react-native-auto-height-image';

const GetBooks = require('../request/GetAllBooks')
const _ = require('lodash');

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      filters: [
        { name: 'Filter', value: 'Filter' },
        { name: 'Sport', value: 'Sport' },
        { name: 'Food', value: 'Food' },
      ],
      OddImageComponent: [],
      EvenImageComponent: [],
    }
  }

  async componentDidMount(){
    const array_book_result = {
      rightSide: [],
      leftSide: [],
    }
    console.log("didMount")
    const books = await GetBooks.GetBooks()
    const { all_books_in_genre } = books
    const book_length = all_books_in_genre.length
    // console.log(all_books_in_genre)
    console.log(typeof all_books_in_genre)
    _.map(all_books_in_genre, (book, index) => {
      if(index%2 == 0 && book){
        console.log(_.get(book, 'Image', ''))
        array_book_result.rightSide.push(
          <BookCoverTouchable key={index}>
            <AutoHeightImage
              width={180}
              source={{uri: _.get(book, 'Image', '')}}
            />
          </BookCoverTouchable>
        )
      } else if(index%2 != 0 && book){
        console.log(_.get(book, 'Image', ''))
        array_book_result.leftSide.push(
          <BookCoverTouchable key={index}>
            <AutoHeightImage
              width={180}
              source={{uri: _.get(book, 'Image', '')}}
            />
          </BookCoverTouchable>
        )
      }
    })
    this.setState({
      OddImageComponent: array_book_result.rightSide,
      EvenImageComponent: array_book_result.leftSide
    })
  }

  render() {
    return (
      <Screen>
        <HeadingContainer>
          <HeadingText>
            Home
          </HeadingText>
        </HeadingContainer>
        <ScrollView>
          <HomeContainer>
            <VerticalContainer>
              {this.state.OddImageComponent}
            </VerticalContainer>
            <VerticalContainer>
              {this.state.EvenImageComponent}
            </VerticalContainer>
          </HomeContainer>
        </ScrollView>
      </Screen>
    );
  }
}

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

const HomeContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding-top: 20;
  padding-right: 5;
  padding-left: 5;
`;

const VerticalContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BookCoverTouchable = styled.TouchableOpacity`
  padding-bottom: 15;
`;
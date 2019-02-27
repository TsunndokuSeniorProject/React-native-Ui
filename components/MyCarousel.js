import React, { Component } from 'react'
import Carousel from 'react-native-snap-carousel';
import styled from 'styled-components'

const HeadingContainer = styled.View`
  margin-top: 20;
  padding-left: 20;
  padding-bottom: 15;
  border-bottom-color: #d1d1d1;
  border-bottom-width: 1;
  width: 100;
  height: 100;
`;
// title: 'Beautiful and dramatic Antelope Canyon',
//       subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//       illustration: 


export class MyCarousel extends Component {

    _renderItem ({item, index}) {
      // const { title, subtitle, illustration } = item
        return (
          <HeadingContainer>"AAAA"</HeadingContainer>
        );
    }

    render () {
      const { data, sliderWidth, itemWidth } = this.props
        return (
            <Carousel
              // ref={(c) => { this._carousel = c; }}
              data={data}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
        );
    }
}
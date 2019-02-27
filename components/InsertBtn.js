import React from 'react';
import styled from 'styled-components'
import {
  View,
  Text,
  TouchableOpacity,
} from '@shoutem/ui';

export default class InsertBtn extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      color: props.color,
      navigate: props.navigate
    };
  }

  render() {
    return (
      <TouchableOpacity onPress={this.state.navigate}>
        <InsertView style={{backgroundColor : this.state.color}}>
          <TextInsertBtn>
            {this.state.name}
          </TextInsertBtn>
        </InsertView>
      </TouchableOpacity>
    );
  }
}

const InsertView = styled.View`
  width: 180;
  height: 180;
  border: 1px solid #fff;
  padding-top: 10;
  padding-left: 10;
  border-radius: 20;
`;

const TextInsertBtn = styled.Text`
  color: white;
  font-size: 20;
  font-weight: bold;
`;

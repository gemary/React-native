import React from 'react';
import { Image } from 'react-native';
export default  class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('../../asset/icon/pokemonLogo.png')}
          style={{ width: 48, height: 48 }}
        />
      );
    }
  }
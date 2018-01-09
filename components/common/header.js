import React, { Component } from 'react';
import { Header, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  header: {
    width: '100%'
  }
});

class LeftComponent extends Component {

  openDrawer = () => {
    const { navigation } = this.props;

    if (navigation) {
      navigation.navigate('DrawerOpen');
    }
  };

  render() {
    return (
        <Ionicons
          name={'ios-menu'}
          size={26}
          color="white"
          onPress={this.openDrawer}
        />
    );
  }
}

class HeaderComponent extends Component {
  render() {
    console.log('header', this.props)
    return (
      <Header
        style={styles.header}
        leftComponent={<LeftComponent navigation={this.props.navigation}/>}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    );
  }
}

export default HeaderComponent;
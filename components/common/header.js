import React, { Component } from 'react';
import { Header, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const styles = StyleSheet.create({
  header: {
    width: '100%'
  }
});

class LeftComponent extends Component {

  openDrawer = () => {
    if (this.props.navigation) {
      this.props.navigation.navigate('DrawerOpen')
    }
  };

  render() {
    return (
        <Ionicons
          name={'ios-menu'}
          size={26}
          style={{color: '#fff'}}
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
        leftComponent={<LeftComponent {...this.props}/>}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    );
  }
}

export default HeaderComponent;
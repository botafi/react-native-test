import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import Header from './header';

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'red'
  }
});

class Layout extends Component {
  render() {
    console.log('layout', this.props)
    return (
      <View style={styles.view}>
        <Header navigation={this.props.navigation}/>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text>Layout test</Text>
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
}

export default Layout;
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
    width: '100%',
    backgroundColor: 'red'
  }
});

class Layout extends Component {
  render() {
    console.log('layout', this.props)
    return (
      <View style={styles.view}>
        <Header {...this.props}/>
        <ScrollView style={styles.scrollView}>
          <Text>Layout test</Text>
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
}

export default Layout;
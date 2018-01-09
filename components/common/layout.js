import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ScrollView, Text, StatusBar } from 'react-native';

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

const Layout = ({ children, navigation }) => {
  return (
    <View style={styles.view}>
      <StatusBar translucent={false} barStyle="light-content" />
      <Header navigation={navigation}/>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text>Layout test</Text>
        {children}
      </ScrollView>
    </View>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Layout;
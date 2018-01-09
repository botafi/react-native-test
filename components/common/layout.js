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
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#EBEBEB'
  }
});

const Layout = ({ children, navigation }) => {
  return (
    <View style={styles.view}>
      <StatusBar translucent={false} barStyle="light-content" />
      <Header navigation={navigation}/>
      <View style={styles.content}>
        {children}
      </View>
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
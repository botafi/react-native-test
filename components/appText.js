import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  regularText: {
    fontSize: 18,
    color: '#6D6D6D'
  }
});

const AppText = ({ type = 'regularText', children }) => (
  <Text style={styles[type]}>{children}</Text>
);

AppText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  type: PropTypes.oneOf([
    'title', 'regularText'
  ])
};

export default AppText;
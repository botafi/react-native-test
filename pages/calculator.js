import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Layout from '../components/common/layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

class CalculatorPage extends Component {

  render() {
    console.log('calc', this.props);

    return (
      <Layout navigation={this.props.navigation}>
        <Text>Calculator kkkkbkjk Page</Text>
      </Layout>
    );
  }
}

export default CalculatorPage;

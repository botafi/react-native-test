import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Layout from '../components/common/layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class NormsPage extends Component {

  render() {
    return (
      <Layout {...this.props}>
        <Text>Norms Page</Text>
      </Layout>
    );
  }
}

export default NormsPage;

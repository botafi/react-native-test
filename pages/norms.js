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
      // <Layout navigation={this.props.navigation}>
      //   <Text>Norms Page</Text>
      // </Layout>
      <View style={styles.container}>
        <Text>Norms Page</Text>
      </View>
    );
  }
}

export default NormsPage;

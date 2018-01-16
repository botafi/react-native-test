import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Layout from '../components/common/layout';
import Scroller2 from '../components/scroller/scroller2';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollerContainer: {
    width: '100%',
    height: 150,
  }
});

// scroller test data
let scrollerData = [];
for (let i = 0; i < 25; i++) {
  scrollerData.push({ key: i });
}

class NormsPage extends Component {

  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <Text>Norms Page</Text>
        <View style={styles.scrollerContainer}>
          <Scroller2
            selectedItem={ {key: 3} }
            data={scrollerData}
            style={{
              width: 125,
              height: 150
            }}
          />
        </View>
      </Layout>
    );
  }
}

export default NormsPage;

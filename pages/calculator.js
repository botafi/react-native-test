import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Layout from '../components/common/layout';
import AppText from '../components/appText';
import Scroller from '../components/scroller/scroller';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#EBEBEB'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 85,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  footerTotal: {
    color: '#fff',
    fontSize: 18
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 5,
    padding: 5,
    textAlign: 'center'
  },
  inputContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  scrollerContainer: {
    width: '100%',
    height: 150,
  }
});

// scroller test data
let scrollerData = [{ key: '--', helper: true }];
for (let i = 0; i < 25; i++) {
  scrollerData.push({ key: i });
}
scrollerData.push({ key: '--', helper: true });
let scrollerData2 = [...scrollerData];
const ITEM_HEIGHT = 50;

class CalculatorPage extends Component {
  state = {
    max: 10.2,
    min: 2.5,
    totalWeight: 32.678,
    totalMeters: '1',
    selectedItem: { key: 11 },
    selectedItem2: { key: 22 },
    conversionRatio: 1,
  };
  lastScroll = 0;
  onScroll = (e) => {
    const {velocity, contentOffset} = e.nativeEvent;
    if(this.lastScroll === 1) {
      this.scrollEl2.scrollViewEl.scrollTo({x: 0, y: contentOffset.y, animated: false});
    }
  };
  onScroll2 = (e) => {
    const {velocity, contentOffset} = e.nativeEvent;
    if(this.lastScroll === 2) {
      this.scrollEl.scrollViewEl.scrollTo({x: 0, y: contentOffset.y, animated: false});
    }
  };
  onSelectItem = (selectedItem) => {
    this.setState({selectedItem});
    if(this.lastScroll === 1) {
      this.scrollEl2.scrollToItem(selectedItem);
    }
  };
  onSelectItem2 = (selectedItem2) => {
    this.setState({selectedItem2});
    if(this.lastScroll === 2) {
      this.scrollEl.scrollToItem(selectedItem2);
    }
  };
  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <View style={styles.container}>
          <AppText type="title">Weights of steel tubes</AppText>
          <AppText>{`Outside diameter ${this.state.max} - ${this.state.min} mm`}</AppText>

          <View
            style={styles.scrollerContainer}
            onResponderGrant={e => this.lastScroll = 1}
            onResponderRelease={e => this.lastScroll = 1}
            onResponderReject={e => this.lastScroll = 1}
            onStartShouldSetResponder={e => this.lastScroll = 1}
            onMoveShouldSetResponder={e => this.lastScroll = 1}
          >
            <Scroller
              selectedItem={this.state.selectedItem}
              onItemPress={this.onItemClick}
              data={scrollerData}
              style={{
                width: 125,
                height: 151
              }}
              onScroll={this.onScroll}
              onSelectedItemChanged={this.onSelectItem}
              ref={ref => this.scrollEl = ref}
            />
          </View>
          <View
            style={styles.scrollerContainer}
            onResponderGrant={e => this.lastScroll = 2}
            onResponderRelease={e => this.lastScroll = 2}
            onResponderReject={e => this.lastScroll = 2}
            onStartShouldSetResponder={e => this.lastScroll = 2}
            onMoveShouldSetResponder={e => this.lastScroll = 2}
          >
            <Scroller
              selectedItem={this.state.selectedItem2}
              onItemPress={this.onItemClick2}
              data={scrollerData2}
              style={{
                width: 125,
                height: 151
              }}
              onScroll={this.onScroll2}
              onSelectedItemChanged={this.onSelectItem2}
              ref={ref => this.scrollEl2 = ref}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type here to translate!"
              value={this.state.totalMeters}
              onChangeText={(totalMeters) => this.setState({ totalMeters })}
            />
            <AppText>m</AppText>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerLabel}>TOTAL WEIGHT</Text>
            <Text style={styles.footerTotal}>{this.state.totalWeight} kg</Text>
          </View>
        </View>
      </Layout>
    );
  }
}

export default CalculatorPage;

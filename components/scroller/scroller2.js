import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View, ScrollView, Button } from 'react-native';

import ScrollerItem from './scrollerItem';

const defaultStyle = {
 scrollView: {
  borderWidth: 1,
  borderColor: 'red',
 }
};

class Scroller2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: props.selectedItem
    };
  }

  render() {
    const { data, style, onItemPress } = this.props;

    return (
      <ScrollView
        contentContainerStyle={{...style, ...defaultStyle.scrollView}}
        // bounces={false}
        // snapToInterval={3}
        indicatorStyle="black"
        // snapToAlignment="center"
      >
        {data.map((item, idx) => (
          <ScrollerItem
            key={`item-scroller-${idx}`}
            item={item}
            title={item.key}
            onPressItem={() => onItemPress(item)}
            selected={this.state.selectedItem.key === item.key}
          />
        ))}
      </ScrollView>
    );
  }
}

Scroller2.defaultProps = {
  data: [],
  style: {},
  selectedItem: null,
  onItemPress: () => {}
};

Scroller2.propTypes = {
  data: PropTypes.array,
  style: PropTypes.object,
  selectedItem: PropTypes.any,
  onItemPress: PropTypes.func
};

export default Scroller2;
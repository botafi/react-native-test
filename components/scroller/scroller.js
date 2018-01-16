import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View, ScrollView, Button, Platform } from 'react-native';

import ScrollerItem from './scrollerItem';

const ITEM_HEIGHT = 50;
const getStyles = (props) => ({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  scrollView: {
    borderWidth: 1,
    borderColor: '#000',
  },
  selector: {
    height: ITEM_HEIGHT,
    width: props.style.width,
    position: 'absolute',
    backgroundColor: '#C3DDC3',
    top: ITEM_HEIGHT,
    left: 0,
    zIndex: 9,
    opacity: 0.7,
  }
});

class Scroller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: props.selectedItem,
      selectedItemMem: { key: null }
    };
    this.scrollViewEl = null;
  }

  componentDidMount() {
    this.scrollViewEl.scrollTo({ x: 0, y: this.state.selectedItem.key * ITEM_HEIGHT, animated: true });
  }

  render() {
    const { data, style, onItemPress } = this.props;
    const styles = getStyles(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.selector} pointerEvents="none"></View>
        <ScrollView
          ref={(sv) => this.scrollViewEl = sv}
          decelerationRate={0.25}
          showsVerticalScrollIndicator={false}
          style={{ ...style, ...styles.scrollView }}
          snapToInterval={ITEM_HEIGHT}
          indicatorStyle="black"
          snapToAlignment="center"
          onScroll={() => {
            this.setState({
              selectedItem: { key: null }
            });
          }}
          onMomentumScrollEnd={(e) => {
            // console.log(e.nativeEvent.contentOffset.y, e.nativeEvent.contentSize.height)
            const index = Math.floor(e.nativeEvent.contentOffset.y / ITEM_HEIGHT);

            if (this.state.selectedItem.key !== index) {
              this.setState({
                selectedItem: { key: index }
              }, () => {
                if (Platform.OS === 'android') {
                  this.scrollViewEl.scrollTo({ x: 0, y: index * ITEM_HEIGHT, animated: true });
                }
              });
            }
          }}
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
      </View>
    );
  }
}

Scroller.defaultProps = {
  data: [],
  style: {},
  selectedItem: null,
  onItemPress: () => {}
};

Scroller.propTypes = {
  data: PropTypes.array,
  style: PropTypes.object,
  selectedItem: PropTypes.any,
  onItemPress: PropTypes.func
};

export default Scroller;
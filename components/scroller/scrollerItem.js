import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  flatList: {
    flex: 1
  },
  flatListContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class ScrollerItem extends PureComponent {
  render() {
    const { selected, item, onPressItem, title, itemHeight } = this.props;
    const style = {
      minWidth: '100%',
      height: itemHeight,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',

    };

    return item.helper ? (
      <View style={style}>
        <Text style={{
          fontSize: 20,
          color: selected ? '#000' : '#C3C3C3',
          fontWeight: selected ? 'bold' : 'normal',
          zIndex: 10
        }}>
          {title}
        </Text>
      </View>
    ) : (
      <TouchableOpacity onPress={() => onPressItem(item)} style={style}>
        <Text style={{
          fontSize: 20,
          color: selected ? '#000' : '#C3C3C3',
          fontWeight: selected ? 'bold' : 'normal',
        }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}
ScrollerItem.defaultProps = {
  title: 'title',
  selected: false,
  onPressItem: () => {},
  itemHeight: 50
};
ScrollerItem.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.number, PropTypes.string
  ]),
  selected: PropTypes.bool,
  onPressItem: PropTypes.func,
  item: PropTypes.object,
  itemHeight: PropTypes.number
};

export default ScrollerItem;
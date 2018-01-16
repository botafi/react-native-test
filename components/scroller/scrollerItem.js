import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  // container: {
  //   height: 120,
  //   width: '100%',
  //   alignItems: 'center',
  //   overflow: 'hidden',
  //   borderWidth: 1,
  //   borderColor: 'grey'
  // },
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
    const { selected, item, onPressItem, title } = this.props;
    const style = {
      minWidth: '100%',
      height: 50,
      backgroundColor: selected ? '#C3DDC3' : '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      borderWidth: 1,
      borderColor: selected ? '#000' : 'grey',
    };

    return (
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
  onPressItem: () => {}
};
ScrollerItem.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.number, PropTypes.string
  ]),
  selected: PropTypes.bool,
  onPressItem: PropTypes.func,
  item: PropTypes.object
};

export default ScrollerItem;
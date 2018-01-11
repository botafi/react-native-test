import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, StyleSheet, View, TouchableOpacity, Button } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  container: {
    height: 120,
    width: '100%',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#000',
  },
  flatList: {
    flex: 1
  },
  flatListContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: 25
  },
  listItem: {

  }
});

class ListItem extends PureComponent {
  render() {
    const { selected, item, onPressItem, title } = this.props;
    const style = {
      minWidth: '100%',
      backgroundColor: selected ? '#C3DDC3' : '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex'
    };

    return (
      <TouchableOpacity onPress={() => onPressItem(item)} style={style}>
        <View style={styles.flatListContent}>
          <Text style={{
            fontSize: 20,
            color: selected ? '#000' : '#C3C3C3',
            fontWeight: selected ? 'bold' : 'normal',
          }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
ListItem.defaultProps = {
  title: 'title',
  selected: false,
  onPressItem: () => {}
};
ListItem.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.number, PropTypes.string
  ]),
  selected: PropTypes.bool,
  id: PropTypes.any,
  onPressItem: PropTypes.func,
  item: PropTypes.object
};



class Scroller extends Component {
  componentDidMount() {
    this.scrollToItem(this.props.selectedItem.key);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedItem.key !== this.props.selectedItem.key) {
      this.scrollToItem(nextProps.selectedItem.key);
    }
  }

  onItemPress = (item) => {
    // this.scrollToItem(item.key);
    const { onItemPress } = this.props;

    if (typeof onItemPress === 'function') {
      onItemPress(item);
    }
  };

  scrollToItem = (idx) => {
    if (idx) {
      // this.flatListRef.scrollToIndex({ animated: true, index: Math.floor(idx * this.props.data.length) });
      this.flatListRef.scrollToIndex({ animated: true, index: idx });
    }
  }

  getItemLayout = (data, index) => {
    // return { length: data.length, offset: data.slice(0, index).length, index };
    return { length: data.length, offset: data.length * index, index };
    // { length: 50, offset: 50 * index, index }
  };

  renderItem = ({ item }) => {
    return (
      <ListItem
        style={styles.listItem}
        id={item.key}
        item={item}
        onPressItem={this.onItemPress}
        selected={this.props.selectedItem.key === item.key}
        title={item.key}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ref={ref => this.flatListRef = ref}
          extraData={this.props.selectedItem}
          keyExtractor={(item) => item.key}
          renderItem={this.renderItem}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
          data={this.props.data}
          initialScrollIndex={0}
          getItemLayout={this.getItemLayout}
          scrollToIndex={this.scrollToItem}
        />
      </View>
    );
  }
}
Scroller.propTypes = {
  selectedItem: PropTypes.object,
  data: PropTypes.array,
  onItemPress: PropTypes.func
};

export default Scroller;

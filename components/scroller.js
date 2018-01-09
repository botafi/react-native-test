import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  container: {
    height: 80,
    width: '100%',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#000',
  },
  flatList: {
    width: '100%',
  },
  flatListContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class ListItem extends PureComponent {
  render() {
    const { selected, item, onPressItem, title } = this.props;
    const style = {
      minWidth: '100%',
      backgroundColor: selected ? '#3E6EC7' : '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex'
    };

    return (
      <TouchableOpacity onPress={() => onPressItem(item)} style={style}>
        <View style={styles.flatListContent}>
          <Text style={{ color: selected ? '#fff' : 'black', fontWeight: 'bold' }}>
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

// test data
let data = [];
for (let i = 0; i < 15; i++) {
  data.push({ key: `${i}` });
}

class Scroller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: { key: '2' }
    };
  }

  onItemPress = (item) => {
    this.setState({
      selectedItem: item
    });
  };

  renderItem = ({ item }) => {
    return (
      <ListItem
        id={item.key}
        item={item}
        onPressItem={this.onItemPress}
        selected={this.state.selectedItem.key === item.key}
        title={item.key}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          extraData={this.state}
          keyExtractor={(item) => item.key}
          renderItem={this.renderItem}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
          data={data}
        />
      </View>
    );
  }
}

export default Scroller;

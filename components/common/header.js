import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  header: {
    width: '100%'
  }
});

class LeftComponent extends Component {

  openDrawer = () => {
    const { navigation } = this.props;

    if (navigation) {
      navigation.navigate('DrawerOpen');
    }
  };

  render() {
    return (
        <Ionicons
          name="ios-menu"
          size={26}
          color="white"
          onPress={this.openDrawer}
        />
    );
  }
}

class RightComponent extends Component {

  render() {
    return (
        <Ionicons
          name="ios-information-circle-outline"
          size={26}
          color="white"
          // onPress={this.openDrawer}
        />
    );
  }
}

class HeaderComponent extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <Header
        style={styles.header}
        leftComponent={<LeftComponent navigation={this.props.navigation}/>}
        centerComponent={{ text: navigation.state.routeName.toUpperCase() || 'TITLE', style: { color: '#fff' } }}
        rightComponent={<RightComponent navigation={this.props.navigation}/>}
      />
    );
  }
}

HeaderComponent.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default HeaderComponent;
import React from 'react';

import { Platform, Text, Linking } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        this.navigate(url);
      });
    } else {
      Linking.addEventListener('url', this.handleOpenURL);
    }
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = (event) => {
    this.navigate(event.url);
  }

  navigate = (url) => {
    const { navigate } = this.props.navigation;

    const route = url.replace(/.*?:\/\//g, '');
    const id = route.match(/\/([^\/]+)\/?$/)[1];
    const routeName = route.split('/')[0];
    if (routeName === 'people') {
      navigate('People', { id, name: 'chris' })
    };
  }

  render() {
    return <Text>Hello from Home!</Text>;
  }
}

export default Home;

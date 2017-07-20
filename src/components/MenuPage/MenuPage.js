import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// import * as PropTypes from 'react-native/flow/prop-types';

class MenuPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bananaVisible: true
    }
  }

  componentDidMount() {
    //setInterval(() => this.setState({ bananaVisible: !this.state.bananaVisible }), 1000);
  }

  render() {
    const { name } = this.props;


    const bananaImageSource = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.menuPage}>
        <Text>{name}</Text>
        {this.state.bananaVisible && <Image source={bananaImageSource} style={styles.image} />}
      </View>
    )
  };
}

// MenuPage.propTypes = {
//   name: PropTypes.string.isRequired
// };

const styles = StyleSheet.create({
  menuPage: {
  },
  image: {
    width: 193,
    height: 110
  },
});

export default MenuPage;
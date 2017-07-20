import React from 'react';
import {
  Alert,
  Button,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  SectionList,
  ScrollView
} from 'react-native';
import MenuPage from './src/components/MenuPage/MenuPage';

export default class App extends React.Component {

  onTextChange = (text) => console.log("onTextChange", text);

  onTextSubmit = () => {
    console.log("onTextSubmit");
  };

  handleButtonPressed = () => {
    Alert.alert("Show alert");
    console.log("handleButtonPressed");
  };

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <FlatList
            data={[
              { key: 'Devin' },
              { key: 'Jackson' },
              { key: 'James' },
              { key: 'Joel' },
              { key: 'John' },
              { key: 'Jillian' },
              { key: 'Jimmy' },
              { key: 'Julie' },
            ]}
            renderItem={({ item }) => <MenuPage name={item.key} />}
          />
          <SectionList sections={[
            { title: 'new', data: ['a, b'] },
            { title: 'b', data: ['a, b', 'c'] }
          ]}
                       renderItem={({ item }) => <Text>{item}</Text>}
                       renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
          />
          <Text>Shake your phone to open the developer menu.</Text>
          <TextInput
            onChangeText={this.onTextChange}
            onSubmitEditing={this.onTextSubmit}
            placeholder="Type here to translate!"
          />
          <Button onPress={this.handleButtonPressed} title="Button" />

          <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableHighlight</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableOpacity</Text>
            </View>
          </TouchableOpacity>
          <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableWithoutFeedback onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Touchable with Long Press</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});

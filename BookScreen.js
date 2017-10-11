import React, { Component } from 'react';
import { 
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image
} from 'react-native';

export default class BookScreen extends Component {
  /*
    Set the StackNavigator options so our screen's title says Book
  */
  static navigationOptions = {
    title: 'Book',
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>{params.book.title}</Text>
          <View style={styles.searchView}>
            <Image 
              style={styles.thumbnail}
              resizeMode='contain'
              source={{uri: params.book.imageLinks.thumbnail}}
            />

            <Text style={styles.information}>Author: {params.book.authors}
            {"\n"}Page count: {params.book.pageCount}
            {"\n"}Rating: {params.book.averageRating} </Text>
          </View>

          <Text style={styles.description}> Description: {params.book.description}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 2,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 20,
    padding: 5,
  },
  thumbnail: {
    width: 200,
    height: 200,
    flexBasis: '50%',
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    lineHeight: 20,
    padding: 10,
    borderRadius: 20,
    borderColor: '#84ffb8',
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    margin: 20,
  },
  information: {
    fontSize: 15,
    lineHeight: 20,
    padding: 20,
    flexBasis: '50%',
  },
  searchView: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',   
 },
});
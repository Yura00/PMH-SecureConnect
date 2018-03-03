import React, { Component } from 'react';
import { Text, View, ListView, Image, TouchableOpacity } from 'react-native'
import { Badge, Avatar } from 'react-native-material-ui'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { SearchBar, TopBar, AtoZList, ContactListSection, ContactListItem, Switch } from '../../components/'
import { GlobalStyle, Colors } from '../../themes'
import styles from './newGroup.style'

import data from '../mockData'

const formatData = function(data) {
  // We're sorting by alphabetically so we need the alphabet
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Need somewhere to store our data
  const dataBlob = {};
  const sectionIds = [];
  const rowIds = [];

  const result = {};

  // Each section is going to represent a letter in the alphabet so we loop over the alphabet
  for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
    // Get the character we're currently looking for
    const currentChar = alphabet[sectionId];

    // Get users whose first name starts with the current letter
    const users = data.filter((user) => user.name.first.toUpperCase().indexOf(currentChar) === 0);

    // If there are any users who have a first name starting with the current letter then we'll
    // add a new section otherwise we just skip over it
    if (users.length > 0) {

      result[currentChar] = users
      // Add a section id to our array so the listview knows that we've got a new section
      sectionIds.push(sectionId);

      // Store any data we would want to display in the section header. In our case we want to show
      // the current character
      dataBlob[sectionId] = { character: currentChar };

      // Setup a new array that we can store the row ids for this section
      rowIds.push([]);

      // Loop over the valid users for this section
      for (let i = 0; i < users.length; i++) {
        // Create a unique row id for the data blob that the listview can use for reference
        const rowId = `${sectionId}:${i}`;

        // Push the row id to the row ids array. This is what listview will reference to pull
        // data from our data blob
        rowIds[rowIds.length - 1].push(rowId);

        // Store the data we care about for this row
        dataBlob[rowId] = users[i];
      }
    }
  }

  return result
}

class NewGroup extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity style={styles.backButtonContainer} onPress={() => {navigation.goBack()}}>
        <MaterialCommunityIcons name='chevron-left' size={30} color={'white'} />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity style={styles.searchButtonContainer} onPress={() => navigation.state.params.enableNewGroup ? navigation.state.params.newGroup() : {}}>
        <Text style={[styles.btnNext, {opacity: navigation.state.params.enableNewGroup ? 1 : 0.7}]}> Next </Text>
      </TouchableOpacity>
    )
  })
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      groupUsers: [],
      listData: formatData(data)
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ newGroup: this.newGroup.bind(this) });
  }

  newGroup () {
    this.props.navigation.goBack()
  }

  onSearchChanged (searchKey) {
    if (!searchKey || searchKey === '') {
      this.setState({
        listData: formatData(data)
      })
      return
    }

    const key = searchKey.toLowerCase()
    let filteredItems = data.filter((item) => {
      return (item.name.first + item.name.last).toLowerCase().match(key)
    })
    if (Array.isArray(filteredItems)) {
      this.setState({
        listData: formatData(filteredItems)
      })
    }
  }

  addToGroup (user) {
    const index = this.state.groupUsers.indexOf(user)
    if (index !== -1) {
      this.setState((prevState) => ({
        groupUsers: prevState.groupUsers.filter((_, i) => i !== index)
      }), () =>  this.props.navigation.setParams({ enableNewGroup: this.state.groupUsers.length > 0 }));
    } else {
      this.setState({
        groupUsers: this.state.groupUsers.concat(user)
      }, () =>  this.props.navigation.setParams({ enableNewGroup: this.state.groupUsers.length > 0 }))
    }
  }

  render() {
    return (
      <View style={GlobalStyle.pageContainer}>
        <SearchBar
          withTopBar
          placeholder='Search'
          searchHandler={(key) => this.onSearchChanged(key)}
          cancelSearchHandler={() => this.onCancelSearch()}
        />
        {this.state.groupUsers.length > 0 &&
          <View style={styles.groupContainer}>
            {
              this.state.groupUsers.map((user) => {
                return (
                  <View key={user.login.username} style={styles.groupUser}>
                    <Image source={{ uri: user.picture.large}} style={styles.photo} />
                    <TouchableOpacity style={styles.removeBackground} onPress={() => this.addToGroup(user)}>
                      <MaterialCommunityIcons style={styles.remove} name='close-circle' size={17} color='gray' />
                    </TouchableOpacity>
                  </View>
                )
              })
            }
          </View>
        }
        <AtoZList
          visibleAlphabet
          noHeader
          style={styles.listView}
          sectionHeaderHeight={0}
          cellHeight={60}
          data={this.state.listData}
          renderCell={(user) => <ContactListItem fromNewGroup {...user} onPress={() => this.addToGroup(user)}/>}
          renderSection={(data) => <ContactListSection data={data.sectionId}/>}
        />
      </View>
    );
  }
}

export default NewGroup;

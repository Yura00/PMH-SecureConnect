import React, { Component } from 'react';
import { Text, View, ListView, TouchableOpacity, Alert, Button } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TopBar, SearchBar, AtoZList, ContactListSection, ContactListItem, Switch } from '../../components/'
import { GlobalStyle, Images } from '../../themes'
import styles from './contacts.style'

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

class Contacts extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: navigation.state.params ? navigation.state.params.header : undefined,
    headerRight: (
      <TouchableOpacity style={styles.searchButtonContainer} onPress={() => navigation.state.params.openSearch()}>
        <MaterialIcons name='search' size={22} color={'white'} />
      </TouchableOpacity>
    )
  })

  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      listData: formatData(data)
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ openSearch: this.openSearch.bind(this) });
  }

  openSearch () {
    this.setState({isSearch: !this.state.isSearch}, () => {
      this.props.navigation.setParams({ header: null });
    })
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

  onCancelSearch () {
    this.setState({
      listData: formatData(data)
    })
    this.setState({isSearch: false}, () => {
      this.props.navigation.setParams({ header: this.props.navigation.navigation });
    })
  }

  render() {
    return (
      <View style={GlobalStyle.pageContainer}>
      { this.state.isSearch
        ? <SearchBar
            placeholder='Search contact'
            searchHandler={(key) => this.onSearchChanged(key)}
            cancelSearchHandler={() => this.onCancelSearch()}
          />
        : <TopBar hasContent>
            <Switch
              value={false}
              onValueChange={(val) => console.log(val)}
              activeText={'Local'}
              inActiveText={'Global'}
              barWidth={160}
              barHeight={25}
            />
          </TopBar>
      }
        <AtoZList
          visibleAlphabet
          style={[styles.listView, {position: this.state.isSearch ? 'relative' : 'absolute'}]}
          sectionHeaderHeight={0}
          cellHeight={60}
          data={this.state.listData}
          renderCell={(data) => <ContactListItem {...data} onPress={() => this.props.navigation.navigate('ViewProfile', {data: data})}/>}
          renderSection={(data) => <ContactListSection data={data.sectionId}/>}
        />
      </View>
    );
  }
}

export default Contacts;

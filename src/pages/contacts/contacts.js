import React, { Component } from 'react';
import { View, ListView } from 'react-native'
import { TopBar, AtoZList, ContactListSection, ContactListItem, Switch } from '../../components/'
import { GlobalStyle } from '../../themes'
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

class Contacts  extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      isActive: false,
      dataSource: ds.cloneWithRows(data),
    };
  }

  render() {
    const listData = formatData(data)
    return (
      <View style={GlobalStyle.pageContainer}>
        <TopBar hasContent>
          <Switch 
            value={false}
            onValueChange={(val) => console.log(val)}
            activeText={'Local'}
            inActiveText={'Global'}
            barWidth={160}
            barHeight={25}
          />
        </TopBar>
        <AtoZList
          visibleAlphabet
          style={styles.listView}
          sectionHeaderHeight={0}
          cellHeight={60}
          data={listData}
          renderCell={(data) => <ContactListItem {...data} onPress={() => this.props.navigation.navigate('Chat', {data: data})}/>}
          renderSection={(data) => <ContactListSection data={data.sectionId}/>}
        />
      </View>
    );
  }
}

export default Contacts;

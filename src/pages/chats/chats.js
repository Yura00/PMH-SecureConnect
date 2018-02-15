import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { ChatListItem } from '../../components'
import styles from './chats.style'

const data = [
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "aiden",
      "last": "lucas"
    },
    "location": {
      "street": "1446 oak lawn ave",
      "city": "lakewood",
      "state": "arizona",
      "postcode": 60649
    },
    "email": "aiden.lucas@example.com",
    "login": {
      "username": "smallostrich903",
      "password": "kristine",
      "salt": "r5u9JFIh",
      "md5": "0e2f37c4b8baafacd62562857e9ecda5",
      "sha1": "e39a1487902ecc6d54287080c26794504348a4de",
      "sha256": "96220812c203891d9e7fc287e5fa73275ac8159d277ea088b051e80ec43abc99"
    },
    "registered": 1056249168,
    "dob": 1216516975,
    "phone": "(661)-131-8187",
    "cell": "(408)-707-4720",
    "id": {
      "name": "SSN",
      "value": "294-55-5909"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/4.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/4.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/4.jpg"
    },
    "nat": "US"
  },
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "mario",
      "last": "walters"
    },
    "location": {
      "street": "8467 preston rd",
      "city": "allentown",
      "state": "maine",
      "postcode": 71108
    },
    "email": "mario.walters@example.com",
    "login": {
      "username": "tinyrabbit750",
      "password": "detroit",
      "salt": "KQ9v0DxF",
      "md5": "720e03bf546c0e0d52c19cfb395bcb7b",
      "sha1": "7e01f165e1da1bf643a2a990f3e07a31239712cb",
      "sha256": "107e1e74180163911ffd09bbb40654e1ccafdcb9f7ed049c5f99b2a2491af631"
    },
    "registered": 1011808304,
    "dob": 381810389,
    "phone": "(612)-481-1846",
    "cell": "(213)-966-9760",
    "id": {
      "name": "SSN",
      "value": "501-03-3665"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/47.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/47.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/47.jpg"
    },
    "nat": "US"
  }
]

class Chats  extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <ChatListItem {...data} />}
      />
    );
  }
}

export default Chats;
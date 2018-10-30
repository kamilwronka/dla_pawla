import React, { Component } from 'react';
import axios from 'axios';
import { isNil } from 'lodash';

class App extends Component {
  state = {
    users: null
  }

  async componentDidMount() {
    let res = await axios.get('twoj url');
    this.setState({ users: res.data })
  }

  render() {
    const { users } = this.state;
    return (
      <div className="App">
      <ul>
        {!isNil(users) && users.map(user => {
          return <li key={user.id}>{user.name}</li>
        })}
        </ul>
      </div>
    );
  }
}

export default App;

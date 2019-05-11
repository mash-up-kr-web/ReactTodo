import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const url = 'http://13.113.246.46:8081';

class Todos extends Component {
  state = {
    token: window.localStorage.getItem('token'),
    list: [],
  }
  async componentDidMount () {
    const result = await axios.get(`${url}/todos`, {
      headers: {
        Authorization: 'Bearer ' + this.state.token //the token is a variable which holds the token
      }
    });
    if(result.status === 200 && result.data.ok === true) {
      this.setState({
        list: result.data.result,
      })
    } else {
      console.log(result.data.error);
    }
    
  }
  render() {
    const { token } = this.state;
    console.log(this.state.list);
    return (
      <>
        {!token && <Redirect to='/signin' />}
        <table border="1">
          <thead>
            <tr>
              <td>
                안녕
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                하하
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Todos;
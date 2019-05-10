import React, { Component } from 'react';
import axios from 'axios';
import { url } from './const';

class Signup extends Component {
  state = {
    email: '',
    password: '',
  }

  componentDidMount() {
    console.log(this.props.history.goBack);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  goBack = () => {
    this.props.history.goBack()
  }

  onSubmit = (e) => {
    const { email, password } = this.state
    e.preventDefault()
    const result = axios.post(`${url}/users`, {
      email,
      password,
    })
    console.log('data', email, password)
    console.log(result);

  }

  render() {
    const { email, password } = this.state;
    return (
      <>
      <form onSubmit={this.onSubmit}>
        <label htmlFor='email'>email</label>
        <br />
        <input type="text" name="email" id="email" value={email} onChange={this.onChange} />
        <br />
        <label htmlFor="password">password</label>
        <br />
        <input type="password" name="password" id="password" value={password} onChange={this.onChange} />
        <br />
        <button type='submit'>로그인</button>
      </form>
      <button onClick={this.goBack}>이전</button>
    </>
    );
  }
}

export default Signup;
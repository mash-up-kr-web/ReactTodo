import axios from 'axios';
import React, { Component } from 'react';

import { url } from './const';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    error: null,
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

  onSubmit = async (e) => {
    const { email, password } = this.state
    e.preventDefault()
    const result = await axios.post(`${url}/users`, {
      email,
      password,
    })
    if ( result.status === 200 && result.data.ok === true ) {
      this.props.history.push('/signin');
    } else {
      this.setState({
        error: result.data.error,
      })
    }
  }

  render() {
    const { email, password, error } = this.state;
    return (
      <>
      <h1>회원가입</h1>
      {!!error && <div style={{color: "red"}}>{error}</div>}
      <form onSubmit={this.onSubmit}>
        <label htmlFor='email'>email</label>
        <br />
        <input type="text" name="email" id="email" value={email} onChange={this.onChange} />
        <br />
        <label htmlFor="password">password</label>
        <br />
        <input type="password" name="password" id="password" value={password} onChange={this.onChange} />
        <br />
        <button type='submit'>회원가입</button>
      </form>
      <button onClick={this.goBack}>이전</button>
    </>
    );
  }
}

export default Signup;
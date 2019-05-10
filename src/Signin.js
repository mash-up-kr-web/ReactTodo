import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signin extends Component {
  state = {
    email: '',
    password: '',
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  
  render() {
    const { email, password } = this.state
    return (
      <>
        <form>
          <label htmlFor='email'>email</label>
          <br />
          <input type="text" name="email" id="email" value={email} onChange={this.onChange} />
          <br />
          <label htmlFor="password">password</label>
          <br />
          <input type="password" name="password" id="password" value={password} onChange={this.onChange} />
          <br />
          <button>로그인</button>
        </form>
        <Link to='signup'>회원가입</Link>
      </>
    );
  }
}

export default Signin;
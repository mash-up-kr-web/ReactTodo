import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { url } from "./const";

class Signin extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async e => {
    const { email, password } = this.state;
    e.preventDefault();
    const result = await axios.post(`${url}/signIn`, {
      email,
      password
    });
    if (result.status === 200) {
      window.localStorage.setItem("token", result.data.result.token);
      this.props.history.push("/");
    } else {
      this.setState({
        error: result.data.error
      });
    }
  };

  render() {
    console.log("props", this.props);
    const { email, password, error } = this.state;
    return (
      <>
        <h1>로그인</h1>
        {!!error && <div style={{ color: "red" }}>{error}</div>}
        <form onSubmit={this.onSubmit}>
          <label htmlFor="email">email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={this.onChange}
          />
          <br />
          <label htmlFor="password">password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={this.onChange}
          />
          <br />
          <button>로그인</button>
        </form>
        <Link to="signup">회원가입</Link>
      </>
    );
  }
}

export default Signin;

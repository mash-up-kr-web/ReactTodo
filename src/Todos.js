import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const url = 'http://13.113.246.46:8081';

class Todos extends Component {
  state = {
    redirect: false,
  }
  componentDidMount() {
  }
  render() {
    return (
      <>
        {!this.state.redirect && <Redirect to='/signin' />}
        <div>
          정상적으로 로그인 되었습니다.
        </div>
      </>
    );
  }
}

export default Todos;
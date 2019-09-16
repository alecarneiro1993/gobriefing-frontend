import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        Home
        {' '}
        <button onClick={() => this.props.cookies.set('token', '')}>
          Logout
        </button>
      </div>
    );
  }
}

export default HomePage;

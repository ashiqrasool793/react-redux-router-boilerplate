import React, { Component } from "react";
import { fetchLoginInfo } from "../actions/index";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onButtonClick = () => {
    this.props.fetchLoginInfo();
  };
  render() {
    return (
      <div>
        <h1>Login Page {JSON.stringify(this.props.nativeData)}</h1>
        <button onClick={this.onButtonClick}>TEST REDUX</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.digiNativePOC);
  return {
    dataReturned: state.authentication.USER,
    nativeData: state.digiNativePOC,
  };
};

export default connect(mapStateToProps, { fetchLoginInfo })(Login);

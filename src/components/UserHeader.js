import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    if (!this.props.user) {
      return null;
    }

    return <div>{this.props.user.name}</div>;
  }
}
//ownProps are props passed to the componenent from another component
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);

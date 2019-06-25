import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/index";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    // XXX // const user = this.props.users.find(user => user.id === this.props.userId);
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className='header'>{user.name}</div>;
  }
}
/* XXX
const mapStateToProps = state => {
  return { users: state.users };
};
*/

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);

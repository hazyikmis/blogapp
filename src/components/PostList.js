import React, { Component } from "react";
import { connect } from "react-redux";
//import { fetchPosts } from "../actions/index";
import { fetchPostsAndUsers } from "../actions/index";
import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    //this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user' />
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    //console.log(this.props.posts);
    return <div className='ui relaxed divided list'>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  //  { fetchPosts }
  { fetchPostsAndUsers }
)(PostList);

/*
//AT THE PREV VERSION, we do NOT want to store any STATE in this component,
//this is the reason why there is no "mapStateTOProps", and sent as null to connect
//second parameter is the set of action-creators
export default connect(
  null,
  { fetchPosts }
)(PostList);
*/

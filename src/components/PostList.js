import React from "react";
import { Button, Card, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { getPosts } from "../store/actions/postList";

function PostList({ posts, getPosts }) {
  const blogPost = posts.map((post) => {
    return (
      <Card key={post.id}>
        <Card.Content>
          <Card.Header>{post.title}</Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>{post.body}</Card.Description>
        </Card.Content>
      </Card>
    );
  });

  return (
    <Segment>
      {blogPost}
      <Button primary onClick={getPosts}>
        Get Posts
      </Button>
    </Segment>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.postList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

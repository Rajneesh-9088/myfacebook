import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostsList extends Component {
    render() {
        const {posts} = this.props;
        return (
            <div className="post-list">
          {posts.map((post) => (
            <div className="post-wrapper" key={post.id}>
              <div className="post-header">
                <div className="post-avatar">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-pic"
                  />
                  <div>
                    <span className="post-author">{post.name} </span>
                    <span className="post-time">a minute ago</span>
                  </div>
                </div>
                <div className="post-content">{post.address.street}</div>
                <div className="post-actions">
                  <div className="post-like">
                    <img
                      src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                      alt="likes-icon"
                    />
                    <span>{post.company.bs.length}</span>
                  </div>
                  <div className="post-comments-icon">
                    <img
                      src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                      alt="commetns-icons"
                    />
                    <span>{post.address.street.length}</span>
                  </div>
                </div>
                <div className="post-comment-box">
                  <input placeholder="Start typing a comment" />
                </div>

                <div className="post-comments-list">
                  <div className="post-comments-item">
                    <div className="post-comments-header">
                      <span className="post-comment-author">Bill</span>
                      <span className="post-comment-time">a minute ago</span>
                      <span className="post-comment-likes">32</span>
                    </div>
                    <div className="post-comment-content">
                        Radom comment
                      </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        );
    }
}

 PostsList.propTypes = {
   posts: PropTypes.array.isRequired
 }
export default PostsList;
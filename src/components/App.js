import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/posts';
import { Home, Navbar, Page404, Login,Signup} from './';
import * as jwtDecode from 'jwt-decode';


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    const token = localStorage.getItem('token');

    if(token) {
      const user = jwtDecode(token);
      console.log('user',user)
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Home {...props} posts={posts} />;
            }}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
App.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);

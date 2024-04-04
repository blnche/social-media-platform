import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Feed from './components/Feed';

const App = () => (
    <Provider store={store}>
        <Router>
            <div>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/feed" component={Feed} />
            </Switch>
            </div>
        </Router>
    </Provider>
  );

export default App;
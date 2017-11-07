import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LoginView from './views/login-view';

class App extends Component {
    render() {
        return (
            <LoginView />
        );
    }
    
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
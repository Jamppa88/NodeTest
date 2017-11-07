import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>Hello from React! This is different!</div>
        );
    }
    
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
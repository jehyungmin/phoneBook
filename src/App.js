import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { List, PhonebookPage } from 'pages'
import Menu from './components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Route exact path="/" component={List} />
                <Route exact path="/phonebook" component={PhonebookPage} />
            </div>
        );
    }
}

export default App;
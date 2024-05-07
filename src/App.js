import React, { Component } from 'react';
import './App.css';
import Cadastro from './Cadastro';
import Login from './Login';
import Principal from './Principal';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        };
    }
    
    handleLogin = (user) => {
        this.setState({ currentUser: user });
    }

    handleLogout = () => {
        this.setState({ currentUser: null });
    }
    
    render() {
        const { currentUser } = this.state;
        return (
            <div className="App">
                {!currentUser && (
                    <Login onLogin={this.handleLogin} />
                )}
                {currentUser && (
                    <div>
                        <Principal currentUser={currentUser} />
                        <button onClick={this.handleLogout}>Logout</button>
                    </div>
                )}
                {!currentUser && (
                    <Cadastro />
                )}
            </div>
        );
    }
}

export default App;
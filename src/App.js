import React, { Component } from 'react';
import NavigationBar from "./components/NavigationBar";


class App extends Component {
    render() {
        return (
            <div className="container">
                <NavigationBar />
                {/* route specific content displays contents of nested route */}
                {this.props.children}
            </div>
        );
    }
}

export default App;

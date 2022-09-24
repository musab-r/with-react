import React from "react";
import Header from "./Header";
import PropTypes from 'prop-types';

class App extends React.Component {
    state = {
        pageHeader: "Hello React Header!"
    };
    componentDidMount(){

    }
    
    render() {
        return(
            <div>
                <Header message={this.state.pageHeader}/>
                <div>
                    ...1
                </div>
            </div>
        );
    }
}


App.propTypes = {
    headerMessage: PropTypes.string
};

App.defaultProps={
    headerMessage: 'hello!'
};

export default App;
import React from "react";
import Header from "./Header";
import PropTypes from 'prop-types';
import ContestList from "./ContestList";

class App extends React.Component {
    state = {
        pageHeader: 'Hello React Header!',
        contests: this.props.initialContests
    };
    componentDidMount(){
        // timer and listener
    }
    
    render() {
        return(
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <ContestList contests={this.state.contests}/>
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
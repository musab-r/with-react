import React from "react";
import Header from "./Header";
import PropTypes from 'prop-types';
import ContestPreview from "./ContestPreview";
import axios from 'axios';

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
                <div>
                    {this.state.contests.map(contest =>
                        <ContestPreview key={contest.id} {...contest} />
                    )}
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
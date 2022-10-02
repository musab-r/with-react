import React from "react";
import Header from "./Header";
import PropTypes from 'prop-types';
import ContestPreview from "./ContestPreview";

class App extends React.Component {
    state = {
        pageHeader: this.props.pageHeader,
        contests: this.props.contests
    };
    componentDidMount(){

    }
    
    render() {
        return(
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <div>
                    {this.props.contests.map(contest =>
                        <ContestPreview {...contest} />
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
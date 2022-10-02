import React from "react";
import Header from "./Header";
import PropTypes from 'prop-types';
import ContestPreview from "./ContestPreview";
import axios from 'axios';

class App extends React.Component {
    state = {
        pageHeader: 'Hello React Header!',
        contests: []
    };
    componentDidMount(){
        // timer and listener
        
        // ajax request
        axios.get('/api/contests')
        .then(resp => {
            console.log(resp)
            this.setState({
                contests: resp.data.contests
            })
        })
        .catch(console.error)
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
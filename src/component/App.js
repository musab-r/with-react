import React from "react";
import Header from "./Header";
import PropTypes from 'prop-types';

const App = (props) => {
    return(
        <div>
            <Header message={'This is Header'}/>
            <div>
                ...
            </div>
        </div>
    );
};

App.propTypes = {
    headerMessage: PropTypes.string
};

App.defaultProps={
    headerMessage: 'hello!'
};

export default App;
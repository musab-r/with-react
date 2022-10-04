import React from "react";
import { createRoot } from 'react-dom/client'
import App from './components/App';
import axios from 'axios';

axios.get('/api/contests')
    .then(resp => {
        createRoot(
            document.getElementById('root')).render(
                <App initialContests={resp.data.contests}/>
        );
    })
    .catch(console.error);

// ReactDOM.render(
//     // React.createElement('h2', null, 'Hello React'),
//     <App headerMessage='Hello React'/>,  
//     document.getElementById('root')
// );
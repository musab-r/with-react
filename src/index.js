import React from "react";
import { createRoot } from 'react-dom/client'
import App from './components/App';


createRoot(
    document.getElementById('root')).render(
        <App initialContests={window.initialData.contests}/>
);


// ReactDOM.render(
//     // React.createElement('h2', null, 'Hello React'),
//     <App headerMessage='Hello React'/>,  
//     document.getElementById('root')
// );
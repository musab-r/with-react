import React from "react";
import { createRoot } from 'react-dom/client'
import App from './component/App';

createRoot(
    document.getElementById('root')).render(
        <App headerMessage='Hello React'/>
);

// ReactDOM.render(
//     // React.createElement('h2', null, 'Hello React'),
//     <App headerMessage='Hello React'/>,  
//     document.getElementById('root')
// );
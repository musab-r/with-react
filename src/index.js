import React from "react";
import { createRoot } from 'react-dom/client'
import data from './testData.json';
// console.log(data);
import App from './component/App';



createRoot(
    document.getElementById('root')).render(
        <App contests={data.contests} pageHeader='Hello React Header!'/>
);

// ReactDOM.render(
//     // React.createElement('h2', null, 'Hello React'),
//     <App headerMessage='Hello React'/>,  
//     document.getElementById('root')
// );
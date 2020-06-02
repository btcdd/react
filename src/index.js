import React from 'react';
import ReactDOM from 'react-dom';
import CodeTree from './CodeTree';
import {BrowserRouter} from 'react-router-dom';



ReactDOM.render(
    <BrowserRouter>
        <CodeTree />
    </BrowserRouter>,
    document.getElementById('root'));
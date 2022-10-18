import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import Main from "./components/Main";
import "./styles/index.css"
  
const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);
root.render(
        <Main/>
);

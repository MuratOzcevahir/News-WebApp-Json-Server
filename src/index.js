import App from "./component/App";
import ReactDOM from 'react-dom/client';
import react from "react";


var rootElement = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(rootElement);
var deneme = "testlendiniz"
reactRoot.render(
    <App />
);
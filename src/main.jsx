import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import "../src (3)/src/css/r1.css";
// import App from '../src (3)/src/App';
import "./ecommerce/home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./portfolio.css"
import { Provider } from 'react-redux';
import store from './ecommerce/store.jsx';



// import "./style.css";

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
<App />
</Provider>
)

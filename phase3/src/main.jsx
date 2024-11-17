import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Nav from "./nav/Nav.jsx";


createRoot(document.getElementById('root')).render(
    <Router>
        <StrictMode>
            <Nav/>,
            <App path='/*'/>
        </StrictMode>
    </Router>,
)

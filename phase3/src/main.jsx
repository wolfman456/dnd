import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Nav from "./nav/Nav.jsx";
import backgroundImage from './assets/fantasy-scene-with-dragon.jpg';



createRoot(document.getElementById('root')).render(
    <Router>
        <StrictMode>
            <Nav/>
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    zIndex: '-1',
                }}
            >
            <App path='/*'/>
            </div>

        </StrictMode>
    </Router>,
)

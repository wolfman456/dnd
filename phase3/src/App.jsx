import Home from "./Home.jsx";
import ReturnDisplay from "./render/ReturnDisplay.jsx";
import {Route, Routes} from "react-router-dom";
import Classes from "./render/Classes.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>,
            <Route path="/return-display/:call" element={<ReturnDisplay/>}/>
            <Route Path="/classes/:url" element={<Classes/>}/>
        </Routes>
    )
}

export default App

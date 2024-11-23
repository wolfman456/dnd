import Home from "./Home.jsx";
import ReturnDisplay from "./render/ReturnDisplay.jsx";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>,
            <Route path="/return-display/:call" element={<ReturnDisplay/>}/>
        </Routes>
    )
}

export default App

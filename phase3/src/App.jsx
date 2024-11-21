import Home from "./Home.jsx";
import ReturnDisplay from "./render/ReturnDisplay.js";

function App() {
    return (
        <Home path="/"/>,
        <ReturnDisplay path="/return-display/:call" element={<call/>} />
    )
}

export default App

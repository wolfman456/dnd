
function App() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-primary">Hello, Bootstrap!</button>
                        <button type="button" className="btn btn-secondary" onClick={()=>
                        console.log('Hello, Bootstrap!')
                        }>Secondary</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App

import Classes from "./subtype/Classes.jsx";

function RenderType(x) {
    if (x.type === "monsters") return (<h1>hello monster</h1>)
    if (x.type === "classes") return (<Classes url={x.url}/>)

}

export default RenderType;

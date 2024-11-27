import Classes from "./subtype/Classes.jsx";
import Spells from "./subtype/Spells.jsx";

function RenderType(x) {
    if (x.type === "monsters") return (<h1>hello monster</h1>)
    if (x.type === "classes") return (<Classes url={x.url}/>)
    if (x.type === "spells") return (<Spells url={x.url}/>)

}

export default RenderType;

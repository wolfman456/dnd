import Classes from "./subtype/Classes.jsx";
import Spells from "./subtype/Spells.jsx";
import Monster from "./subtype/Monster.jsx";

function RenderType(x) {
    if (x.type === "monsters") return (<Monster url={x.url}/>)
    if (x.type === "classes") return (<Classes url={x.url}/>)
    if (x.type === "spells") return (<Spells url={x.url}/>)

}

export default RenderType;

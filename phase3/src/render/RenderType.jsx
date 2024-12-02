import Classes from "./subtype/Classes.jsx";
import Spells from "./subtype/Spells.jsx";
import Monster from "./subtype/Monster.jsx";
import Equipment from "./subtype/Equipment.jsx";
import MagicItems from "./subtype/MagicItems.jsx";

function RenderType(x) {
    if (x.type === "monsters") return (<Monster url={x.url}/>)
    if (x.type === "classes") return (<Classes url={x.url}/>)
    if (x.type === "spells") return (<Spells url={x.url}/>)
    if (x.type === "equipment") return (<Equipment url={x.url}/>)
    if (x.type === "magic-items") return (<MagicItems url={x.url}/>)

}

export default RenderType;

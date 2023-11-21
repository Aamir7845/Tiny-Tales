import React, { useState } from "react";
import "./card.css";
import Menu from "./cardApi";
import Card from "./card";

const Plot = ()=>{

        const [menuData, setMenuData] = useState(Menu);

        return(
        <>
            <Card menuData = {menuData}/>


            {/* <button onClick={bur}  >plus</button> */}
        </>
        )
}
export default Plot;
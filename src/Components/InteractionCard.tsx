import { useState } from "react"
import Act from "./Actions/Act";
import Figth from "./Actions/Figth";
import Item from "./Actions/Item";
import Mercy from "./Actions/Mercy";

function InteractionCard(onSetVid:Number) {
  let vid = onSetVid
   
      if (vid == 1) {
        return <Figth />
      } else if (vid == 2) {
        return <Act />
      } else if (vid == 3) {
        return <Item />
      } else if (vid == 4) {
        return <Mercy />
      } else{
        return <div> <p>Problens </p></div>
      }

}

export default InteractionCard
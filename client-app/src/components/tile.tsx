import "./tile.css"
import React,{useState} from "react";
function Tile(){
    const[turn,setTurn] = useState(0);

    let isFirstPlayerTurn:boolean = true;

    function makeMove(){
        isFirstPlayerTurn = !isFirstPlayerTurn;
    }
    
    return (<div className="board">
        <div onClick={()=>makeMove} className="tile">Tile</div>
        <div onClick={()=>makeMove} className="tile">Tile</div>
        <div onClick={()=>makeMove} className="tile">Tile</div>
        <div onClick={()=>makeMove} className="tile">Tile</div>
        <div onClick={()=>makeMove} className="tile">Tile</div>
        <div onClick={()=>makeMove} className="tile">Tile</div>
        <div onClick={()=>makeMove} className="tile">Tile</div>
        <div onClick={()=>makeMove} className="tile">Tile</div>
        <div onClick={()=>makeMove} className="tile">Tile</div>
    </div>
    )
}

export default Tile;
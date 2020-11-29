let position1 = [0,0]; 
function getRowIndex(y) {
    // alert("Row index is: " + y.rowIndex);
position1[0] = y.rowIndex 
testPosition()
}

function getColumnIndex(x) {
    // alert("Cell index is: " + x.cellIndex);
    position1[1] = x.cellIndex 

}


let table = document.getElementById("table")

console.log(table.rows[1].cells[1]);




class Piece {

    constructor(Name, Position =[]) { 
        this.Name= Name,
        this.Position = Position;
        // this.Position = [0,0]
    }


    Move(name,position){
    
        if(name =="Rook")
    {
        this.FullBackwards(position);
        this.Forward(position);
    }
    else{ 
        console.log("error");
     
    }
    /*Get name + pos
      determine what kind of piece it is,
      set the moveset as the functions below appropriately based on the name
      this function should MOVE THE PIECE
      moves the piece depending on the highlighted block  
    
    */
    

    }

    Forward(position){
        // should highlight the blocks
         var r = position[0]
         var c = position[1]
        let highlight = table.rows[r-1].cells[c];
        highlight.style.backgroundColor = "blue"
    }
    
    FullBackwards(position){
        var r = position[0]
        var c = position[1]
        const totNoOfRows = table.rows.length;
        for(let i =r; i<totNoOfRows;i++){
        let dots=table.rows[i+1-r].cells[c];
        dots.innerHTML ="."
        dots.style.backgroundColor="red"
        // .setAttribute("class", "democlass"); 
    }
    }

    Backwards(position){
        
    }


    // PossibleMoves(name,position){

    //     /*
    //     Get name and position, and highlight all the possible moves based on the objects name
    //     */

    // }

};


let Rook = new Piece("Rook",[1,2]);
// console.log(Rook.Position)
Rook.Move(Rook.Name,Rook.Position)
































/*

piece ={
    name: " ",
    position: [],
    moveset: {
        FullForward() ={

        },
        FullBackward() ={

        }
    }
}




*/


// const FullBackward = (r,c) =>{

//     const totNoOfRows = table.rows.length;

//     for(let i =r; i<totNoOfRows;i++){
//         let dots=table.rows[i+1].cells[c];
//         // dots.innerHTML ="."
//         dots.style.backgroundColor="red"
//         //.setAttribute("class", "democlass"); 
//     }

// }


const Forward = (r,c)=>{

let highlight = table.rows[r-1].cells[c];
highlight.style.backgroundColor = "blue"

}

const testPosition = ()=>{
let row = position[0];
let column = position[1];
let dot = table.rows[row].cells[column];
dot.innerHTML = "."
dot.style.backgroundColor ="peach"
// FullBackward(row,column);
Forward(row,column)
}






/*
console.log(table.rows.length); to get amount of total rows
console.log(table.rows[0].cells.length); amoung of total columns on each row
*/





console.log(Piece);

// let createObject = Object.create(Piece);
// let PieceFunctions = createObject.init();
// console.log(PieceFunctions);























































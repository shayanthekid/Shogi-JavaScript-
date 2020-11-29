export default class Piece {

    constructor(Name, Position =[]) { 
        this.Name= Name,
        this.Position = Position;
        // this.Position = [0,0]
    }


    Move(name,position){
    
    /*Get name + pos
      determine what kind of piece it is,
      set the moveset as the functions below appropriately based on the name
      this function should MOVE THE PIECE
      moves the piece depending on the highlighted block  
    
    */

    

    }

    Forward(position){
        // should highlight the blocks
        let highlight = table.rows[position[0]-1].cells[position[1]];
        highlight.style.backgroundColor = "blue"
    }
    
    FullForward(position){
        var r = position[0]
        var c = position[1]
        const totNoOfRows = table.rows.length;
        for(let i =r; i<totNoOfRows;i++){
        let dots=table.rows[i+1].cells[c];
        dots.innerHTML ="."
        dots.style.backgroundColor="red"
        .setAttribute("class", "democlass"); 
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

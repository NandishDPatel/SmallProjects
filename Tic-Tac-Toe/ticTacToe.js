var boxes = document.querySelectorAll('td');
var turnBox1 = document.querySelector('.p1');
var turnBox2 = document.querySelector('.p2');
var result = document.querySelector('.winner');

let counter=0;
let check = true;
let winPatterns = []
let turn1 = "Player-1 turn";
let turn2 = "Player-2 turn";
let p1Wins = "Player-1 Wins :)";
let p2Wins = "Player-2 Wins :)";

turnBox1.innerHTML = turn1;

for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener('click',()=>{
        if(boxes[i].innerHTML == "" && check){
            if(counter%2 == 0){
                boxes[i].innerHTML = "X";
                counter+=1;
                turnBox1.innerHTML = "";
                turnBox2.innerHTML = turn2;
            }
            else{
                boxes[i].innerHTML = "O";
                counter+=1;
                turnBox1.innerHTML = turn1;
                turnBox2.innerHTML = "";
            }
        

            if(counter>=4){
                if(boxes[0].innerHTML=="X" && boxes[1].innerHTML=="X" && boxes[2].innerHTML=="X"){
                    result.innerHTML = p1Wins;
                    turnBox1.innerHTML = "";
                    turnBox2.innerHTML = "";
                    check = false;
                } 
                else if(boxes[0].innerHTML=="X" && boxes[3].innerHTML=="X" && boxes[6].innerHTML=="X"){
                    result.innerHTML = p1Wins;
                    turnBox1.innerHTML = "";
                    turnBox2.innerHTML = "";
                    check = false;
                }
                else if(boxes[0].innerHTML=="X" && boxes[4].innerHTML=="X" && boxes[8].innerHTML=="X"){
                    result.innerHTML = p1Wins;
                    turnBox1.innerHTML = "";
                    turnBox2.innerHTML = "";
                    check = false;
                }
                else if(boxes[1].innerHTML=="X" && boxes[4].innerHTML=="X" && boxes[7].innerHTML=="X"){
                    result.innerHTML = p1Wins;
                    turnBox1.innerHTML = "";
                    turnBox2.innerHTML = "";
                    check = false;
                }
                else if(boxes[2].innerHTML=="X" && boxes[5].innerHTML=="X" && boxes[8].innerHTML=="X"){
                    result.innerHTML = p1Wins;
                    turnBox1.innerHTML = "";
                    turnBox2.innerHTML = "";
                    check = false;
                }
                else if(boxes[2].innerHTML=="X" && boxes[4].innerHTML=="X" && boxes[6].innerHTML=="X"){
                    result.innerHTML = p1Wins;
                    turnBox1.innerHTML = "";
                    turnBox2.innerHTML = "";
                    check = false;
                }
                else if(boxes[3].innerHTML=="X" && boxes[4].innerHTML=="X" && boxes[5].innerHTML=="X"){
                    result.innerHTML = p1Wins;
                    turnBox1.innerHTML = "";
                    turnBox2.innerHTML = "";
                    check = false;
                }
                else if(boxes[6].innerHTML=="X" && boxes[7].innerHTML=="X" && boxes[8].innerHTML=="X"){
                    result.innerHTML = p1Wins;
                    turnBox1.innerHTML = "";
                    turnBox2.innerHTML = "";
                    check = false;
                }
                else if(boxes[0].innerHTML=="O" && boxes[1].innerHTML=="O" && boxes[2].innerHTML=="O"){
                    result.innerHTML = p2Wins;
                    turnBox1.innerHTML = "";
                    turnBox2.innerHTML = "";
                    check = false;
                } 
                else if(boxes[0].innerHTML=="O" && boxes[3].innerHTML=="O" && boxes[6].innerHTML=="O"){
                    result.innerHTML = p2Wins;
                    turnBox1.innerHTML = "";
                    turnBox2.innerHTML = "";
                    check = false;
                }
                else if(boxes[0].innerHTML=="O" && boxes[4].innerHTML=="O" && boxes[8].innerHTML=="O"){
                    result.innerHTML = p2Wins;
                    turnBox1.innerHTML = "";
                    turnBox2.innerHTML = "";
                    check = false;
                }
                else if(boxes[1].innerHTML=="O" && boxes[4].innerHTML=="O" && boxes[7].innerHTML=="O"){
                    result.innerHTML = p2Wins;
                    turnBox1.innerHTML = "";
                    turnBox2.innerHTML = "";
                    check = false;
                }
                else if(boxes[2].innerHTML=="O" && boxes[5].innerHTML=="O" && boxes[8].innerHTML=="O"){
                    result.innerHTML = p2Wins;
                    turnBox1.innerHTML = "";
                    turnBox2.innerHTML = "";
                    check = false;
                }
                else if(boxes[2].innerHTML=="O" && boxes[4].innerHTML=="O" && boxes[6].innerHTML=="O"){
                    result.innerHTML = p2Wins;
                    turnBox1.innerHTML = "";
                    turnBox2.innerHTML = "";
                    check = false;
                }
                else if(boxes[3].innerHTML=="O" && boxes[4].innerHTML=="O" && boxes[5].innerHTML=="O"){
                    result.innerHTML = p2Wins;
                    turnBox1.innerHTML = "";
                    turnBox2.innerHTML = "";
                    check = false;
                }
                else if(boxes[6].innerHTML=="O" && boxes[7].innerHTML=="O" && boxes[8].innerHTML=="O"){
                    result.innerHTML = p2Wins;
                    turnBox1.innerHTML = "";
                    turnBox2.innerHTML = "";
                    check = false;
                }
                
            }
        }
        else{
            alert("Please press ctrl+R to start a new game !!")
        }
        

    })
}
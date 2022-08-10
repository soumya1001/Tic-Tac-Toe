 console.log("Welcome to Tic Tac Toe");
 let gamemusic= new Audio("game_music.mp3");
 let turnaudio= new Audio("Facebook_Chat_Beep.mp3");
 let gameover=new Audio("gamewon.mp3");
 let resetaudio=new Audio("reset.mp3")
 let turn ="X";
 let isgameover = false;  

//  function to change turn
const changeTurn = ()=>{
    return turn === "X"?"O":"X"
}
// function to check for a win
const checkWin = () =>{
    let boxtext = document.getElementsByClassName("boxtext")
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText !== "")){
            document.querySelector('.container').style.display="none";
            document.querySelector('.info').innerText= " "+ boxtext[e[0]].innerText + " Won ";
            isgameover=true;
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="300px";
            gameover.play();
        }
    })
}
// Game logic
resetaudio.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnaudio.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
            }
        }
    })
})
//add onclick listener to reset button
// reset.addEventListener('click',()=>{
//     gameover.pause();
//     resetaudio.play();
//     let boxtexts=document.querySelectorAll('.boxtext');
//     Array.from(boxtexts).forEach(element=>{
//         document.querySelector('.container').style.display="block";
//         element.innerText= "";
//         turn="X";
//         document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
//         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0";
//     });
// })
reset.addEventListener('click',()=>{
    window.location.reload("Refresh");
})
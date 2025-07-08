let scoreStr= localStorage.getItem('Score');
let score;
reset(scoreStr)

function reset(scoreStr){
 score=scoreStr ? JSON.parse(scoreStr) : { 
    win:0,
    loss:0,
    draw:0,
  };
  score.display = function (){
    return` Score :  Won: ${score.win}, loss: ${score.loss}, draw: ${score.draw}
  `;
  }
  showResult();
}


function random() {
  let r = Math.random() * 3;
  if (r > 0 && r <= 1) {
    return "bat";
  } else if (r > 1 && r <= 2) {
    return "ball";
  } else {
    return "stump";
  }
}
function result(yourMove, compMove) {
  if (yourMove === compMove) {
    score.draw+=1;
    return "Tie";
  } else if (yourMove === "bat") {
    if (compMove == "bat")
       {           score.draw+=1;
        return "draw";
      }
    else if (compMove === "ball")
      {            score.win+=1;
        return "win";

      }
    else {           score.loss+=1;
      return "loss";
    }
  } else if (yourMove === "ball") {
    if (compMove == "bat") 
      {          score.loss+=1;
      return "loss";
    }
    else if (compMove == "ball") 
      {           score.draw++;
        return "draw";
      }
    else {           score.win+=1;
      return "win";
    }
  } else {
    if (compMove == "bat")
      {          score.win+=1;
        return "win";
      }
    else if (compMove == "ball")
       {    score.loss+=1;
        return "loss";
      }
    else 
    {           score.draw+=1;
      return "draw";

    }
  }
}
function showResult(yourMove,compMove,result){

  localStorage.setItem('Score',JSON.stringify(score));
  console.log(localStorage.getItem('Score'));
  document.querySelector('#user-move').innerText=
  yourMove ?`Your Choice ${yourMove}`:'';
  document.querySelector('#computer-move').innerText=
  compMove ? `computer Choice ${compMove}`:'';
  document.querySelector('#result').innerText=
  result || '';
  document.querySelector('#score').innerText=score.display();
}



var WordArray=["miami", "transformers","arcade","cassette", "pong"];
var GuessesLeft;
var WinStreak;
var StartGame=0;
var AnswerKey=[""];
var Word="";
var exitloop;

// remove this bullshit later
var wins = 0;
var losses = 0;
var ties = 0;
var computerChoices = ["r", "p", "s"];
var UnderScores = [""];

var HangMan = document.getElementById("HangMan");
var HangManOutPut = document.createElement("div");
var UnderScoresOutput = "";
var RunOunce=0;
document.onkeyup = function(event) {
  var PlayerGuess = event.key;   
    
function Redraw(){
  var UnderScoresOutput="";
 for (var i=0; i< Word.length; i++){ 
    
    //  console.log(UnderScores[i]);
     UnderScoresOutput = UnderScoresOutput +UnderScores[i];
 //    console.log(UnderScoresOutput); 
  }

  var html = UnderScoresOutput;
  document.querySelector("#HangMan").innerHTML = html;
}
    
              // Determines which key was pressed.
              var userGuess = event.key;
              if (StartGame===0){
                
                
                Word=WordArray[Math.floor((Math.random() * WordArray.length) + 1)];
                
               console.log(Word); // Debugging to check the hangman word
                // console.log(UnderScores);  Debugging to check word length
                for (var i=0; i< Word.length; i++){ 
                UnderScores[i] ="_ ";
            //    console.log(UnderScores[i]);
                UnderScoresOutput = UnderScoresOutput +UnderScores[i];
              //  console.log(UnderScoresOutput);
              //  console.log(StartGame);
                }
              
                // Creates Answer Key array on intial run only
                StartGame=1 
                for (var i=0; i < Word.length; i++){
                  AnswerKey[i]=Word.charAt(i);
                  console.log(AnswerKey[i]);    
                  }
              }
            
            for (var i=0; i < Word.length; i++){
              if (AnswerKey[i]===PlayerGuess){
                  UnderScores[i] = AnswerKey[i];
                  console.log(AnswerKey[i]);
            
                                            };
                                              };
        Redraw();
      };

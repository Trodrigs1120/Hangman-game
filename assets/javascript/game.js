var WordArray=["miami", "transformers","arcade","cassette", "alf", "gremlins", "thundercats","USSR"];
var WinStreak=0; 
var StartGame=0; // variable for intial run 
var AnswerKey=[""];
var Word="";
var UnderScores = [""];
var WasRight=false;
var output = document.getElementById("output");
var HangMan = document.getElementById("HangMan");
var HangManOutPut = document.createElement("div");
var UnderScoresOutput = "";
var RunOunce=0;
var ValidKeyStroke; 
var messages;
var PlayerLives;
var AreWeDoneYet;
var UsedLetters=[];
var RemainingLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
document.onkeyup = function(event) {
  var PlayerGuess = event.key;   
    
function Redraw(){
  var UnderScoresOutput=""; // without this it adds to itself endlessly
 for (var i=0; i< Word.length; i++){ 
    
    //  console.log(UnderScores[i]);
     UnderScoresOutput = UnderScoresOutput +UnderScores[i];
 //    console.log(UnderScoresOutput); 
  };

  var html = UnderScoresOutput;
  document.querySelector("#HangMan").innerHTML = html;
  document.querySelector("#LivesRemaining").innerText = ("You have "+ PlayerLives + " lives Remaining");
  document.querySelector("#UsedLetters").innerHTML = UsedLetters.toString();
};
function ClearLetters(){
  UsedLetters=[];
}

              // Determines which key was pressed.
              var userGuess = event.key;
              ValidKeyStroke=false;
              if (StartGame===0){
                RemainingLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // gotta give them a fresh chance                
                 messages = {
                 win: 'You win!',
                  lose: 'GAME OVER MAN, GAME OVER',
                  
      };       // output.innerHTML = '';
                document.querySelector("#Messages").innerText = "";
                AreWeDoneYet=0;
                PlayerLives=10; // Sets player lives for each new iteration
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
                //  console.log(AnswerKey[i]);    
                  }
              }
            // checks to see if the player guess matches the answer key at all
            for(i=0; i<RemainingLetters.length; i++)
            if (RemainingLetters[i]===userGuess){
             ValidKeyStroke=true;
             UsedLetters[UsedLetters.length]=PlayerGuess;
           //  console.log(ValidKeyStroke);
             RemainingLetters[i]="null"
            }
            if (ValidKeyStroke===true){
              WasRight=false;
              for (var i=0; i < Word.length; i++){
                if (AnswerKey[i]===PlayerGuess){
                    UnderScores[i] = AnswerKey[i];
                    console.log(AnswerKey[i]);
                    WasRight=true;
                    AreWeDoneYet= AreWeDoneYet+1;
                                              };
                                                };
              if(WasRight===false){
                PlayerLives= PlayerLives -1;
                console.log(PlayerLives);
  
              }
            }
            if (AreWeDoneYet===Word.length){
              // do post game stuff
              StartGame=0;
              WinStreak=WinStreak+1;
              document.querySelector("#WinStreak").innerHTML = ("Winstreak:"+ WinStreak);
              document.querySelector("#Messages").innerText = messages.win;
              ClearLetters();
            }
            if (PlayerLives===0){
             for (i=0; i <RemainingLetters.length; i++){
              // ITS ALL OVER 
              document.querySelector("#Messages").innerText = messages.lose;
              
              //add in player has lost
              RemainingLetters[i]=""; 
             } 
             WinStreak=0;
             StartGame=0;
             ClearLetters();
            }
        Redraw(); // redraws the _ _ _ _ 
      };

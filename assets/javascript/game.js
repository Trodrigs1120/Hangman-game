var WordArray=["Miami", "Transformers","Arcade","Coca-Cola","Cassete", "Pong"];
var GuessesLeft;
var WinStreak;
var StartGame=0;
var AnswerKey=[""];
var Word="";
var exitloop;
document.onkeyup = function(event) {
    var UnderScores = "";
    var PlayerGuess = event.key;
    var HangMan = document.getElementById("HangMan");
    var HangManOutPut = document.createElement("div");
    
  
    console.log(PlayerGuess);
    //console.log(StartGame);
    if (StartGame===0){
        StartGame=1
        if (StartGame=1){
        Word=WordArray[Math.floor((Math.random() * WordArray.length) + 1)];
    //  console.log(WordChosen)  
       console.log(Word); // Debugging to check the hangman word
        // console.log(UnderScores);  Debugging to check word length
        for (var i=0; i<Word.length; i++){
        UnderScores = UnderScores + "_ ";
    //    console.log(StartGame);
        }
        // console.log(Word.length); Checking Length of the word
        for (var i=0; i < Word.length; i++){
        AnswerKey[i]=Word.charAt(i);
        console.log(AnswerKey[i]);    
        }
        
        
        // We'll need an If statement where if exitloop=0 then the player loses a life
        
        console.log(UnderScores);
       HangManOutPut.innerText = UnderScores; 
       HangMan.appendChild(HangManOutPut);

        };
    };
    for (var i=0; i < Word.length; i++ || exitloop===1){
        if (AnswerKey[i]===PlayerGuess){
            exitloop=1; // loop will cease 
            console.log(exitloop);        
            // I need code to replace an _ with a successful guess IE If miami is the word
            // an I guess should result in _ i _ _ i
    }; 
      console.log(i);
    }
    // 
//    
     

};

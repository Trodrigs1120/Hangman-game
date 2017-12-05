var WordArray=["miami", "transformers","arcade","coca-cola","cassete", "pong"];
var GuessesLeft;
var WinStreak;
var StartGame=0;
var AnswerKey=[""];
var Word="";
var exitloop;

document.onkeyup = function(event) {
    var UnderScores = [""];
    var PlayerGuess = event.key;
    var HangMan = document.getElementById("HangMan");
    var HangManOutPut = document.createElement("div");
    var UnderScoresOutput = "";
    var RunOunce=0;
    function Redraw(){
       // for (var i=0; i< Word.length; i++){ 
       //     UnderScores[i] ="_ ";
       //     console.log(UnderScores[i]);
       //     UnderScoresOutput = UnderScoresOutput +UnderScores[i];
      //  }
        HangManOutPut.innerText = UnderScoresOutput; 
        HangMan.appendChild(HangManOutPut);
    }
    // To do: Create Functions 
  
  
    console.log(PlayerGuess);
    //console.log(StartGame);
    if (StartGame===0){
        
        if (StartGame===0){
        Word=WordArray[Math.floor((Math.random() * WordArray.length) + 1)];
        
       console.log(Word); // Debugging to check the hangman word
        // console.log(UnderScores);  Debugging to check word length
        for (var i=0; i< Word.length; i++){ 
        UnderScores[i] ="_ ";
        console.log(UnderScores[i]);
        UnderScoresOutput = UnderScoresOutput +UnderScores[i];
      //  console.log(UnderScoresOutput);
      //  console.log(StartGame);
        }
        StartGame=1
        console.log(UnderScoresOutput);     
        //console.log(Word.length); Checking Length of the word
        for (var i=0; i < Word.length; i++){
        AnswerKey[i]=Word.charAt(i);
        console.log(AnswerKey[i]);    
        }
        
        
        // We'll need an If statement where if exitloop=0 then the player loses a life
        
       // console.log(UnderScores);
       Redraw()
       //HangManOutPut.innerText = UnderScoresOutput; 
      // HangMan.appendChild(HangManOutPut);

        };
    };
    for (var i=0; i < Word.length; i++){
        if (AnswerKey[i]===PlayerGuess){
            UnderScores[i] = AnswerKey[i];
            console.log(AnswerKey[i]);
           
            break;   
        }
            // I need code to replace an _ with a successful guess IE If miami is the word
            // an I guess should result in _ i _ _ i
    }; 
      console.log(i);
    }

    // 
//    
     


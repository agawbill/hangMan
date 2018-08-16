
var wrapperText=document.getElementsByClassName("wrapperText")[0];
var loading=document.getElementsByClassName("loading")[0];
var hintTextDiv=document.getElementsByClassName("hintTextDiv")[0]
var wrongLettersText=document.getElementsByClassName("wrongLettersText")[0];
var winModal=document.getElementsByClassName("winModal")[0];
var loseModal=document.getElementsByClassName("loseModal")[0];
var countDown=document.getElementsByClassName("countDown")[0];
var playAgain=document.getElementById("playAgain");
var playAgain2=document.getElementById("playAgain2");


var wrong=[];


window.addEventListener("load",function(){
 generateWord()
 createKeyboard()
 generateHint()
})



var randomWord=""
var randomHint=""
var counter=5



  function generateWord(){
    var words= ["milk", "lamp", "silk", "felt", "purple", "water", "cellphone", "dog"]
    var hints=["It's something white that you drink","You turn this on, and things get brighter", "A super smooth fabric", "Past tense for feel", "It's the color of grape jelly", "It's wet and you swim in it", "You talk on this", "It has four legs and is man's best friend"]
    var randI=Math.floor(Math.random() * words.length)
    randomWord=(words[randI])
    randomHint=hints[randI]
  }




function createKeyboard(){

  for(i=0; i<randomWord.length; i++){
        var keys1= document.createElement('div');
        keys1.style.display="inline-block";
        keys1.style.marginRight="14px";
        keys1.style.marginBottom="14px";
        keys1.style.marginTop="0px";
        keys1.style.textAlign="center";
        keys1.style.paddingTop="10px";
        keys1.style.paddingBottom="10px";
        keys1.style.borderRadius="10px";
        keys1.style.fontWeight="bold";
        keys1.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        keys1.style.zIndex="0";
        keys1.style.background="rgba(255,255,255,0.7)";
        keys1.style.positon="absolute";
        keys1.style.width= "40px";
        keys1.style.columnGap= "10px";
        keys1.style.height="35px";
        keys1.style.fontSize="0px";
        keys1.innerHTML=randomWord[i];
        keys1.className="div";
        wrapperText.appendChild(keys1);

      }

}

function generateHint(){
  hintTextDiv.innerHTML="Hint:  " +randomHint
}

var wrongArray = [];
var correctArray = [];


  var newCounter=0

window.addEventListener('keypress', function(event){
        if(correctArray.indexOf(String.fromCharCode(event.charCode))==-1 ){
        rightFunction(event.key)
        }
        wrongFunction(event.key)
        ;

})




function rightFunction(x){
  var keys1=document.querySelectorAll(".div")
    for(let i = 0;i<keys1.length;i++){
        if(keys1[i].innerHTML == String(x)){
         keys1[i].style.fontSize="35px"
         correctArray.push(x)
         newCounter+=1
        }
        if(newCounter==randomWord.length){
         return winModal.style.display="block"
    }


}
}


function wrongFunction(x){

  if(randomWord.indexOf(x) == -1){
      wrongArray.push(x)
      wrongLettersText.innerHTML="Wrong Letters: " +wrongArray.join(", ")
      counter=counter-1
      countDown.innerHTML="Chances: "+counter

  }


  if(wrongArray.length==5){
      return loseModal.style.display="block"
    }


}


playAgain.addEventListener("click", playGameAgain)

function playGameAgain(){
  location.reload()

}
playAgain2.addEventListener("click", playGameAgain)

function playGameAgain(){
  location.reload()

}

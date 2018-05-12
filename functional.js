
var wrapper=document.getElementsByClassName("wrapper")[0];
// var container=document.getElementsByClassName("container")[0];
var spaces=document.getElementsByClassName("spaces")[0];
var loading=document.getElementsByClassName("loading")[0];
var hintDiv=document.getElementsByClassName("hintDiv")[0]
var wrongLetters=document.getElementsByClassName("wrongLetters")[0]


var wrong=[];


window.addEventListener("load",function(){
 generateWord()
 createKeyboard()
 generateHint()
})




var word1="milk"
var word2="lamp"
var word3="silk"
var word4="felt"

var hint1="It's something white that you drink"
var hint2="You turn this on, and things get brighter"
var hint3="A super smooth fabric"
var hint4="Past tense for feel"


var randomWord=""
var randomHint=""





  function generateWord(){
    var words= [word1, word2, word3, word4]
    var hints=[hint1, hint2, hint3, hint4]
    var randI=Math.floor(Math.random() * words.length)
    randomWord=(words[randI])
    randomHint=hints[randI]
  }




function createKeyboard(){

  for(i=0; i<randomWord.length; i++){
        var keys1= document.createElement('div');
        keys1.style.display="inline-block";
        keys1.style.positon="absolute";
        keys1.style.border= "2px solid red";
        keys1.style.width= "40px";
        keys1.style.height="40px";
        keys1.style.fontSize="0px";
        keys1.innerHTML=randomWord[i];
        keys1.style.backgroundColor="blue";
        keys1.className="div"
        wrapper.appendChild(keys1);

      }

}

function generateHint(){
  hintDiv.innerHTML=randomHint
}


window.addEventListener('keypress', function(event){
        rightFunction(event.key)
        wrongFunction(event.key)

})

var wrongArray = [];



function rightFunction(x){
var keys1=document.querySelectorAll(".div")
    for(let i = 0,  j=0 ;i<keys1.length, j<randomWord.length;i++,j++){
        if(keys1[i].innerHTML == String(x) && randomWord[j]== x){
         keys1[i].style.fontSize="30px"

        }

    }

}


function wrongFunction(x){

  if(wrongArray.length==5){
      return wrapper.innerHTML="FAIL"
    }
    else if(randomWord.indexOf(x) == -1){
        wrongArray.push(x)
        wrongLetters.innerHTML=wrongArray
    }

}

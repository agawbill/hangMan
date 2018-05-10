
var wrapper=document.getElementsByClassName("wrapper")[0];
var container=document.getElementsByClassName("container")[0];
var keys1

var correct=[];
var wrong=[];
var word1="milk";
// var letters=[]



window.addEventListener("load", createKeyboard)

  var alphabet=['a','b','c','d','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function createKeyboard(){


  for(i=0; i<alphabet.length; i++){
        var keys1= document.createElement('div');
        keys1.style.display="inline-block";
        // this is set to inline block for now just so I can see them being dynamically created and experiment in the console
        keys1.style.border= "2px solid red";
        keys1.style.width= "40px";
        keys1.style.height="40px";
        keys1.innerHTML=alphabet[i];
        keys1.style.backgroundColor="blue";
        keys1.className="div"+[i]
        wrapper.appendChild(keys1);
        // letters.push(keys1.className);
      }

}

function myFunction(){
  container.innerHTML=alphabet[i]
}



window.addEventListener('keypress', function(event){
        rightFunction(event.key)
        wrongFunction(event.key)
})
var wrongArray = [];



function rightFunction(x){

    for(let i = 0 ;i<alphabet.length;i++){
      // i want to create a for loop to iterate through the dynamically created divs
        if(keys1[i].innerHTML == String(x) ){
        // essentially, what i want to create here is a conditional statement that checks to see if the value of the dynamically created div's innerHTML is the same as the keystroke...
        // it would then return something along the lines of this...
        return keys1[1].style.display="none"
        }

    }

}


function wrongFunction(x){

  if(wrongArray.length==5){
      return letter1.innerHTML="FAIL"
    }
    else if(correct.indexOf(x) == -1){
        wrongArray.push(x)
    }

}

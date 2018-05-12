// break into chunks of problems
// how are you going to store the words you guess
// a random array with words... each time you reload the page it selects a random word
// what's going to happen on load

// on click, if it's correct display block as opposed to hidden

// there are other alternatives how to get the letters outside of keyboard

// what happens when you get it wrong? are there attempts, a timer?

// like a counter... 5 attempts that goes down each time
// if you guess all words, does it reload and start new game?

// you can use an on page load if statement to create the correct amount of divs

// every time they click, they push a number to an array, and once array reaches a certain length, they can longer log

// for loop with 2 variables i and j to compare whether or not a variable matches


// set attribute


// have it change to inline block from none
// var a=document.getElementsByClassName("a")[0];
var letter1=document.getElementsByClassName("letter1")[0];
var container=document.getElementsByClassName("container")[0];


var correct=[];
var wrong=[];
var word1="milk";
var letters=[]
// when you press a button it will change the variable to that


window.addEventListener("load", createKeyboard)

  var alphabet=['a','b','c','d','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function createKeyboard(){


  for(i=0; i<alphabet.length; i++){
        var keys1= document.createElement('div');
        keys1.style.display="inline-block";
        keys1.style.border= "2px solid red";
        keys1.style.width= "40px";
        keys1.style.height="40px";
        keys1.innerHTML=alphabet[i];
        keys1.style.backgroundColor="blue";
        keys1.className="letter1" + [i]
        wrapper.appendChild(keys1);
      }

}

function myFunction(){
  container.innerHTML=alphabet[i]
}

// window.setTimeout(function(){
//   createKeyboard()
//   generateHint()
//   hideLoad()
//
// }, 3000)



// function hideLoad(){
//   loading.style.display="none"
// }
//


// window.addEventListener("load",  createKeyboard)



// function hangman(word1){
//   var array= word.split("")
//   for(let i=0; i<array.length; i++)
//     if(array.includes(array[i])){
//
//
//     }
//   }
// }

// a.addEventListener("click", function(){
//   var array= word1.split("")
//   for(let i=0; i<array.length; i++)
//     if(array.includes(array[i])){
//       letter1.style.display="block"
//     }
// })

// window.addEventListener("keypress",pressing)
// window.addEventListener("keypress",pressing2)
//
//   // var array= word1.split("")
//   function pressing(){
//   var a = String.fromCharCode(event.keyCode)
//
//   for(i=0; i<word1.length; i++){
//     console.log(sum)
//      if(sum==5){
//        return letter1.innerHTML="failure"
//      }
//      else if(a == word1[i]){
//       correct.push(a)
//       // letter1.style.display="block"
//     }
//   }
// return letter1.innerHTML=correct.join("")
//
// }
//
//
// function pressing2(){
// var a = String.fromCharCode(event.keyCode)
//
// for(i=0; i<=sum; i++){
//   console.log(sum)
//    if(sum==5){
//      return letter1.innerHTML="failure"
//    }
//    else if(a != word1[i]){
//     return sum+=1
//     // letter1.style.display="block"
//   }
// }
//
// }


window.addEventListener('keypress', function(event){
        rightFunction(event.key)
        wrongFunction(event.key)
})
var wrongArray = [];
var correct = ['m', 'i', 'l', 'k']
var rightArray = [];


function rightFunction(x){

    for(let i = 0 ;i<letters.length;i++){
        if(i == x ){
          console.log(letters[x]);
            return letters[i].innerHTML="hello"

        }

    }
    // return letter1.innerHTML=rightArray.join("")
}


function wrongFunction(x){

  if(wrongArray.length==5){
      return letter1.innerHTML="FAIL"
    }
    else if(correct.indexOf(x) == -1){
        wrongArray.push(x)
    }

}




// saved



function rightFunction(x){
var keys1=document.querySelectorAll(".div")
    for(let i = 0,  j=0 ;i<keys1.length, j<randomWord.length;i++, j++){
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





// function thirdFunction(x){
// for(let i=0; i<randomWord.length; i++){
//   if(correctArray.length==randomWord.length){
//       return wrapper.innerHTML="SUCCESS"
//     }
//     else if(randomWord.indexOf(x) == i && correctArray.indexOf(x) == -1){
//         correctArray.push(x)
//
//     }
//   }
// }

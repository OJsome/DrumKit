//#region //target the buttons and keyboard strokes and listen for events using the addEventListener function

//1. addEventListener() sets up a function to be called whenever the specified event is delivered to the target.
    //takes two paramenters (type, listener).
    //"when there's a click, call that function"

//LISTEN FOR HTML BUTTON PRESS
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){         //anonymous functions

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        addAnimation(buttonInnerHTML);
    })
}

//LISTEN FOR KEYBOARD PRESS
document.addEventListener("keypress", function(event){          //anonymous functions
    makeSound(event.key);
    addAnimation(event.key);
});

//#endregion


//the function that's responsible for generating sounds
function makeSound(key){

    /* 
        Is it any different (in performance) to create the audio objects outside the switch statement
        and just have to use it inside the switch statement?
    */

        // var audioW = new Audio('sounds/crash.mp3');
        // var audioA = new Audio('sounds/tom-1.mp3');
        // var audioS = new Audio('sounds/tom-2.mp3');
        // var audioD = new Audio('sounds/tom-3.mp3');
        // var audioJ = new Audio('sounds/tom-4.mp3');
        // var audioK = new Audio('sounds/snare.mp3');
        // var audioL = new Audio('sounds/kick-bass.mp3');



    switch(key){


        case "w":
            var audioW = new Audio('sounds/crash.mp3');
            audioW.play();
            break;
    
        case "a":
            var audioA = new Audio('sounds/tom-1.mp3');
            audioA.play();
            break;
    
        case "s":
            var audioS = new Audio('sounds/tom-2.mp3');
            audioS.play();
            break;
    
        case "d":
            var audioD = new Audio('sounds/tom-3.mp3');
            audioD.play();
            break;
    
        case "j":
            var audioJ = new Audio('sounds/tom-4.mp3');
            audioJ.play();
            break;
    
        case "k":
            var audioK = new Audio('sounds/snare.mp3');
            audioK.play();
            break;
    
        case "l":
            var audioL = new Audio('sounds/kick-bass.mp3');
            audioL.play();
            break;
    
        default:
            alert("No drum was hit");
            break;
        }
}


function addAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    //setTimeout function(class to perform, the time it should take before it performs it)
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}


